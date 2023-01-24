# Project Title

Cyclone NFT MarketPlace

# Description

Cyclone NFT MarketPlace is a non-fungible token (NFT) marketplace where users can buy, sell, or create NFTs. It is a noncustodial platform, allowing users full control and access to their cryptocurrency wallets. Users interact directly with other users to buy or sell an NFT or a bundle of NFTs.

# Videoshot

![Cyclone NFT Pages]()

# Link

This is a marketplace for NFTs where users can purchase, sell, and create NFTs. It is a decentralised app built on the Ethereum blockchain.

Github Link: https://github.com/Timilehin-bello/cycloneNFT

Production Link: https://cyclone-nft.vercel.app

# Author

Oluwatimilehin Bello
Github Link: https://github.com/Timilehin-bello

# How to Install and Run the Project

**Clone the repository**

```javascript
git clone https://github.com/Timilehin-bello/cycloneNFT.git
```

**cd into the Client Folder**

```bash
cd cycloneNFT
```

**Install the dependencies**

```javascript
npm install
```

**Start the development server**

```javascript
npm run dev
```

**Port to Run the Website**

```
http://localhost:3000
```

or any other port available to view it in the browser.

- No required input/output files.

- Ensure you are using the `Mumbai Test Network` on your `metamask wallet` or any other wallet when connecting.

# Explaining the Nika-Crowdfunding-SmartContract

## The Contract

The smart contract was deployed at:

https://mumbai.polygonscan.com/address/0x76709c7F4948E293b6990951810E95aedf5bA6CA

With this address:

```
0x76709c7F4948E293b6990951810E95aedf5bA6CA
```

On the `MUMBAI TESTNET`.

## Structs

`MarketItem`: This stores information about the market items, including the tokenId, seller, owner, price and sold value.

## Mapping

`idToMarketItem`: This mapping stores all the MarketItem using their tokenId as the key.

## Variables

`_tokenIds`: Stores the market Item Id

`_itemsSold`: Stores the number of Sold item in the Market

`listingPrice`: This variable stores the listing Price.

`owner`: stores the owner adress.

## Functions

`updateListingPrice`: Updates the listing price of the contract .

`getListingPrice`: Returns the listing price of the contract.

`createToken`: Mints a token and lists it in the marketplace.

`resellToken`: Allows someone to resell a token they have purchased.

`createMarketSale`: Creates the sale of a marketplace item and transfers ownership of the item, as well as funds between parties .

`fetchMarketItems`: Returns all unsold market items .

`fetchMyNFTs`: Returns only items that a user has purchased .

`fetchItemsListed`: Returns only items a user has listed.

## Modifiers

`onlyOwner`: The modifier indicates only owner of the marketplace can change the listing price

## Events

`MarketItemCreated`: it stores the market item passed in transaction logs when emitted.

## Dependencies

- `@openzeppelin/contracts`: A library of modular, reusable, secure smart contracts for the Ethereum network, written in Solidity.

- `axios`: A simple promise based HTTP client for the browser and node.js.

- `dotenv`: A zero-dependency module that loads environment variables from a .env file into process.env.

- `ether`: A compact JavaScript library with full functionality for interacting with the Ethereum blockchain.

- `http-proxy-middleware`: It stands between the sender and the recipient and can also modify an incoming request before it's eventual handler receives it.

- `ipfs-http-client`: A JavaScript client for talking to a js-ipfs node.

- `next`: This is a zero-dependency package for loading environment variables from a .env file.
- `react`: This is a zero-dependency package for loading environment variables from a .env file.
- `react-dom`: This is a zero-dependency package for loading environment variables from a .env file.
- `react-dropzone`: This is a zero-dependency package for loading environment variables from a .env file.
- `react-icons`: This is a zero-dependency package for loading environment variables from a .env file.
- `web3modal`: This is a zero-dependency package for loading environment variables from a .env file.

## Dev Dependencies

- `@nomicfoundation/hardhat-toolbox`: This is a development environment for Ethereum smart contracts.
- `hardhat`: This is a development environment for Ethereum smart contracts.

# Explaining the Nika-Crowdfunding-Client

This package.json file is used to manage the dependencies and scripts for a client project built with Thirdweb, React, and Vite.

## Client Package.json Scripts

- `dev`: This script runs the Vite development server.
- `build`: This script builds the project for production with Vite.
- `preview`: This script previews the built project.
- `deploy`: This script builds the project and uploads the built files to Thirdweb.

## Dependencies

- `@thirdweb-dev/react`: This is a package containing the React components for the project.
- `@thirdweb-dev/sdk`: This is a package containing the SDK for interacting with the Thirdweb platform.
- `ethers`: This is a library for interacting with Ethereum.
- `react`: This is a JavaScript library for building user interfaces.
- `react-dom`: This is a package that provides DOM-specific methods for React.
- `react-router-dom`: This is a package that provides routing functionality for React applications.

## Dev Dependencies

- `@vitejs/plugin-react`: This is a Vite plugin for React.
- `autoprefixer`: This is a tool that adds vendor prefixes to CSS.
- `postcss`: This is a tool for transforming styles with JavaScript.
- `tailwindcss`: This is a CSS framework.
- `vite`: This is a web development build tool.

# How Nika-Crowdfunding-Project was setup with Thirdweb, Hardhat, and Vite

## Technologies

- Thirdweb (Web3 Framework)
- Hardhat (Smart Contract development environment)
- Vite (React Framework)

## Contract setup

1. Run `npx thirdweb@latest create --contract` to create a new contract project.
2. Install `dotenv` with `npm install dotenv`.
3. Get the private key from your MetaMask account.
4. Find the endpoint for the network you want to use (e.g. Goerli). You can find the endpoint at https://www.ankr.com/rpc/eth/eth_goerli/.
5. Add the following code to your `hardhat.config.js` file:

```hardhat
defaultNetwork: 'goerli',
networks: {
hardhat: {},
goerli: {
url: 'https://rpc.ankr.com/eth_goerli',
accounts: [0x${process.env.PRIVATE_KEY}]
}
},
```

6. Run `npm run deploy` to deploy the contracts to the network.

## Client setup

1. Run `npx thirdweb@latest create --app` to create a new client project.
2. Choose the app name with `./`.
3. Select EVM (or Solana as needed).
4. Select Vite to replace using `create-react-app` for React.
5. Select JavaScript (or TypeScript as needed).
6. Install `react-router-dom` with `npm install react-router-dom`.
7. Run `npm run dev` to check your build so far.
8. Delete the `src` folder.
9. Create a new `src` folder and an `index.js` file.
10. Create a new `App.js` file with a React function component using the `rafce` snippet (ES7).
11. Convert `index.js` to `main.jsx` and `App.js` to `App.jsx`.
12. Install Tailwind CSS with Vite by running `npm install -D tailwindcss postcss autoprefixer`.
13. Run `npx tailwindcss init -p` to create the configuration files for Tailwind CSS.
14. Add the following code to your `tailwind.config.cjs` file:

```tailwind
/** @type {import('tailwindcss').Config} /
module.exports = {
content: [
"./index.html",
"./src/**/.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}
```

# License

This project is licensed under Grandida License - see the LICENSE.md file for details.

### Attribution

Some parts of the code were adapted from Thirweb

> **DO NOT USE WITHOUT THE PERMISSION OF GRANDIDA**

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
