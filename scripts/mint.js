// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/RUTH.json");
require('dotenv').config()

const tokenAddress = "0xe198F3EE6bf164E4001039d9F6F7982661C86539"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xE482969b5A4b8558c1B639c83e9AAD1C993779eF"; // place your public address for your wallet here
var x=0;
const url = ["QmVJE2CBuckznKNASAcfjA4MUouzStShzAESmDsRVGkVHW",
"QmPbBHFZv1AQGmDVkPDc1xXxJNoS6DWCTXb2rzQJrqH2zE",
"QmdMqSPs6KzCaedjpCFmhaZN8NuaF6nXCiXAxQogLTzqK9",
"QmYqoxzeBJSJTUCbHX74kkTERhHKZELqYstnhC1WkuuTjW",
];
async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    for (let i = 0; i < 4; i++) {
      const tx = await token.safeMint(walletAddress, i,url[i]);
      await tx.wait();
    }


    console.log("You now have: 4 NFTS");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });