
# RTH NFT
This project is used for making ERC721 NFT and deploying it on etherum network and bridging it to polygon



## CONTRACTS
This project has 1 contract which defines some functions including mint function which is used to mint the NFTs

## Getting Started
To execute the program, follow these steps:

1. Download the entire repository to access its contents.
2. Navigate to the main project directory.
3. Run npm install to install the required dependencies.
4. Execute the npx hardhat compile to compile the contract.
## Scripts

There are 4 scripts in the projects:

1. Deploy.js : Used to deploy the contract on ethereum network and getting the contract address.

2. mint.js: Used to mint all the nfts using the function described in solidity file.

3. approveDeposit.js: This helps in bridging the eth nfts to polygon using fxtunnelroot.

4. Balance.js: Used to tell the balance of nft tokens on mumbai network.

## Note

I haven't used a .env file but you can use it as you like and install dotenv directories

## Authors
Chirag Arora

## License
This project is licensed under the MIT License. Feel free to make a copy of the project and use it for your own purposes.
