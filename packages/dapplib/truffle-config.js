require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone struggle rice ridge pulp harvest clinic army ghost'; 
let testAccounts = [
"0x1a0ea047c4bb4fea1486552535c69316dba598147ea486337c64748b6f53a5cc",
"0x67aea8d4440a4e4f04451de34428e4b0d3b5a66e0dc582a4181550c4bc26105e",
"0x69b44083b3b3c1fac0b7d8e0529218fe398a306cfd0a323b26370d5ff4c336de",
"0xb61d0cdf61e67f71fc6580fd6769ec580682f60f9861fef8b9262769093281f0",
"0xf3802ed3e6f4cae5d942f1171f857aa34f60719d2e2280c817fa55576d524bae",
"0xf618776e91b286891c4e65d9fdeec4ffc23402023d9c2f8c77f07a330a2a6543",
"0x580d54be987c332a1f42535a67c2b42ea2ca29238a18ca01b6e77aa6282c0c87",
"0x83a117350dea24099fd21ea41ff6bfa217e75764c6192e5a2b54e7fbcaa914e4",
"0x75f189a8aa513ad81452f992631c524284ea58b03999031e460f83effbaba278",
"0x7d7d2b77c10715de08e46641526229e287c04c7cccb7ad3ccaa1add9f8f82d67"
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
            version: '^0.5.11'
        }
    }
};
