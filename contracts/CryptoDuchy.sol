//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract CryptoDuchy {
    address private nobleman;
    uint256 private tax;
    string private manifesto;

    constructor(uint256 _tax) {
        tax = _tax;
    }

    function becomeNoble(string calldata _manifesto) payable external {
        require(msg.value > tax, "Pay more tax");
        tax = msg.value;
        nobleman = msg.sender;
        manifesto = _manifesto;
    }

    function getTax() external view returns (uint256) {
        return tax;
    }

    function getNobleman() external view returns (address, string memory) {
        return (nobleman, manifesto);
    }
}
