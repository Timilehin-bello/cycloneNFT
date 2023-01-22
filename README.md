# Title

Cyclone NFT MarketPlace

# Description

Cyclone NFT MarketPlace is a non-fungible token (NFT) marketplace where users can buy, sell, or create NFTs. It is a noncustodial platform, allowing users full control and access to their cryptocurrency wallets. Users interact directly with other users to buy or sell an NFT or a bundle of NFTs.

# Snapshot

![Cyclone NFT Pages](./img/cyclone-nft-snapshot.gif)

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

**Start Hardhat node**

```javascript
npx hardhat node
```

**Run the deploy Script**

```javascript
npx hardhat run --network localhost ./script/deploy.js
```

**Start the development server**

```javascript
npm run dev
```

**Port to Run the Website**

```
http://localhost:3000
```

## Metamask Setup

- Ensure you are using the `Mumbai Test Network` on your `metamask wallet` or any other wallet when connecting.

### Polygon Mumbai Network Setup

1. Open metamask and add network.
2. Network name `Polygon Mumbai Testnet`
3. New RPC URL `https://polygon-mumbai.g.alchemy.com/v2/KBuX4MEvHnuxz1qVl9Rd-QKqEl0WUVWW`
4. Chain ID `80001`
5. Currency symbol `MATIC`

### Localhost Network Setup

1. Open metamask and add network.
2. Network name `Localhost`
3. New RPC URL `http://127.0.0.1:8545`
4. Chain ID `31337`
5. Currency symbol `ETH`

# The Contract

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

- `next`: it's a flexible React framework that gives you building blocks to create fast web applications.

- `react`: it implement a render() method that takes input data and returns what to display

- `react-dom`: it provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page

- `react-dropzone`: It's an HTML5-compliant React component for handling the dragging and dropping of files.

- `react-icons`: It helps you add icons (from all different icon libraries) to your React apps. It delivers the icons to your app as components so they're easier to work with, and it lets you style them so they're consistent with the overall style of your app.

- `web3modal`: It's an easy-to-use library to help developers add support for multiple providers in their apps with a simple customizable configuration.

## Dev Dependencies

- `@nomicfoundation/hardhat-toolbox`: It bundles all the commonly used packages and Hardhat plugins for development in Hardhat.
- `hardhat`: A development environment that helps in testing, compiling, deploying, and debugging dApps on the Ethereum blockchain.

# License

This project is licensed under Grandida License - see the LICENSE.md file for details.
