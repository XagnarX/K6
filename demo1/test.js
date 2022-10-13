var Web3 = require('web3');

console.log(Web3.utils.isAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d'))
console.log(Web3.utils.toChecksumAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d'))
console.log(Web3.utils.checkAddressChecksum('0xc1912fee45d61c87cc5ea59dae31190fffff232d'))
console.log(Web3.utils.checkAddressChecksum('0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'))
