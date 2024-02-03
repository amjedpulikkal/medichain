import { useEffect, useState } from 'react'
import './App.css'
import Web3 from 'web3'
import configuration from '../../truffle/build/contracts/TicketContract.json'
function App() {

  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [storedString, setStoredString] = useState('');
  const [account, setAccount] = useState('');

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = configuration.networks[networkId];
        const contract = new web3.eth.Contract(
          configuration.abi,
          deployedNetwork && deployedNetwork.address
        );
        setContract(contract);
        const account = await web3.eth.requestAccounts()
        const ticket = await contract.methods.allTicket(0).call()
        console.log(ticket);
        setAccount(account[0])

        setStoredString(data);
      } else {
        console.error('Please install MetaMask to interact with the Ethereum blockchain.');
      }
    }

    init();
  }, []);

  return (
    <>
      <div>
        <div className='text-center'>
          <h2>login</h2>
        </div>

        <p className='mt-3'>{account}</p>
        <form action="" className='mt-10'>
          <div className='w-50'>
            <input type="text" className='w-60 h-10 rounded-lg p-2' name="address" placeholder='id' id="" />
          </div>
          <div className='mt-10'>
            <input type="email" className='w-60 h-10 rounded-lg p-2' name="email" placeholder='Email' id="" />
          </div>
          <div className='mt-10'>

            <input type="number" className='w-60 h-10 rounded-l p-2' name="age" placeholder='phone number' id="" />
          </div>
          <button className='mt-10 bg-slate-800' type='submit'>Login</button>
        </form>
      </div>
    </>
  )
}

export default App
