require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note total prosper harvest fork swap gauge'; 
let testAccounts = [
"0xcb9895ea355aacb11bb96e14048ad460d25568de062be011b58864da8e84f009",
"0xccddbe159bce69257869bf71e6a37337a42611cd365301ee24ff6e975be3bd8f",
"0xa8f26f028ad742fa3366ba003674c7e83f350d390b15bb22fa7355a31d5c88d9",
"0x5df049ae7714469b7689a5379c8d34cd1ddb13ccc8526e38a68f82fe9e8fe9c5",
"0x242521e9b0552b7dcef2ffd85e14c590e0c350c9c68f42aac098d41bbfb6e682",
"0x81d6ca521a7ffe25bd14171960850e0aace0b5fff8fdea931905d19395ad18d4",
"0xfa7e1e0acb99fbfa6304ce880c7f26e63126ebf544b1915e4960b39e0a7d606d",
"0xb9954f7013e1d5bd1147c837da5c21e04b5672ad691b2d6501d26c5f92d19316",
"0x1c4ce8308faa5c1c13526484da198d03f87d0c94d0a8cfc00f17c6a4961f95cd",
"0x8adb6276bb843a67df02c053655d63a2e7ee9888e97752410ddf02f14e4a745a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

