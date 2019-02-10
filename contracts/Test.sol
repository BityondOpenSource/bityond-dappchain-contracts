pragma solidity 0.4.24;

contract Test {
	uint256 test = 256;

	function get() public returns (uint256) {
		return test;
	}

	function set(uint256 newTest) public {
		test = newTest;
	}

}