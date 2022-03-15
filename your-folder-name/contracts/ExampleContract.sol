// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ExampleContract {
    string word;

    constructor() {}

    function setWord(string memory _word) external {
        word = _word;
    }

    function get() public view returns (string memory) {
        return word;
    }
}
