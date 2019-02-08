const abi = [{
    "constant": true,
    "inputs": [{"name": "", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
    "name": "transfer",
    "outputs": [{"name": "success", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"name": "initialSupply", "type": "uint256"}, {"name": "_ticker", "type": "string"}, {
        "name": "_name",
        "type": "string"
    }, {"name": "_owner", "type": "address"}], "payable": false, "stateMutability": "nonpayable", "type": "constructor"
}]

const bytecode = "608060405234801561001057600080fd5b5060405161045138038061045183398101806040528101908080519060200190929190805182019291906020018051820192919060200180519060200190929190505050836000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600290805190602001906100ad9291906100ce565b5082600190805190602001906100c49291906100ce565b5050505050610173565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010f57805160ff191683800117855561013d565b8280016001018555821561013d579182015b8281111561013c578251825591602001919060010190610121565b5b50905061014a919061014e565b5090565b61017091905b8082111561016c576000816000905550600101610154565b5090565b90565b6102cf806101826000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806370a0823114610051578063a9059cbb146100a8575b600080fd5b34801561005d57600080fd5b50610092600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061010d565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b506100f3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610125565b604051808215151515815260200191505060405180910390f35b60006020528060005260406000206000915090505481565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561017457600080fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054011015151561020157600080fd5b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555060019050929150505600a165627a7a723058204583e7e1a71637a89c892b928c2ad396e5a157e7650f3fb1aa19d097475f958c0029"


export default {abi, bytecode}
