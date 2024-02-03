pragma solidity ^0.8.0;

 uint256 constant TotalTickets =10 ;


contract TicketContract {
    address public owner = msg.sender;

    struct Ticket{
        uint256 price;
        address owner;
    }


    Ticket[TotalTickets] public allTicket;

    constructor(){
        for (uint256 i = 0; i < TotalTickets; i++) {
            allTicket[i].price = 1e17;
            allTicket[i].owner = address(0x0);
        }
    }
    function byTicket(uint256 index) external payable {

        require(index<TotalTickets && index >=0);
        require(allTicket[index].owner==address(0x0));  
        require(msg.value>=allTicket[index].price);
        allTicket[index].owner = msg.sender;
    }
    

}
