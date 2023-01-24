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
