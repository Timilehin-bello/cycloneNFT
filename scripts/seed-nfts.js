const config = require("../config/config.json");

const { ethers } = require("hardhat");

async function main() {
  // Fetch accounts from wallet - these are unlocked
  const accounts = await ethers.getSigners();

  // Fetch  network
  const { chainId } = await ethers.provider.getNetwork();
  console.log("Using chainId:", chainId);

  // Fetch deployed NFT Marketplace
  const NFTMarketplace = await ethers.getContractAt(
    "NFTMarketplace",
    config[chainId].cycloneNFT.address
  );

  // Fetch Listing Price
  const listingPrice = await NFTMarketplace.getListingPrice();

  console.log(`NFTMarketplace Token fetched: ${NFTMarketplace.address}\n`);

  //   Give tokens to accounts[1]
  const creator = accounts[0];

  // Create NFTs
  let transaction;

  const tokenURLs = [
    "https://cyclone-nft-marketplace.infura-ipfs.io/ipfs/QmTd6XitrCDsk1QFGYHz3yQAja2wE1aY2Em9uSEXVpC4mb",
    "https://cyclone-nft-marketplace.infura-ipfs.io/ipfs/QmPfBs7LJPXjzKUxDmqffemLxPt3TjaAe7TVXiGd673cfB",
    "https://cyclone-nft-marketplace.infura-ipfs.io/ipfs/QmWgFB1tFHcFqnN82RtNFGdP4wXuxVqmBTBDnh6dERZXPN",
    "https://cyclone-nft-marketplace.infura-ipfs.io/ipfs/Qma8uG23tyMStjeWhB4E61gm1sb1c9C726KjgdRLZUHQHW",
  ];

  const inputPrice = "12";
  const itemPrice = ethers.utils.parseUnits(inputPrice, "ether");

  for (let i = 0; i < tokenURLs.length; i++) {
    transaction = await NFTMarketplace.connect(creator).createMarketItemToken(
      tokenURLs[i],
      itemPrice,
      { value: listingPrice.toString() }
    );

    await transaction.wait();
  }

  console.log(`Created Seed NFTs from ${creator.address}\n`);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();
