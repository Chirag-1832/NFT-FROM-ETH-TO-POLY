require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ['Your_private_key'],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: ['Your_private_key'],
    },
  }
};
