const ticket = artifacts.require("TicketContract");

module.exports = function (deployer) {
    deployer.deploy(ticket);
};
