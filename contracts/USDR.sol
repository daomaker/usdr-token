//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDR is ERC20 {
    constructor() ERC20("USD Redeem", "USDR") {
        _mint(msg.sender, 4761245347309997000000000);
    }
}
