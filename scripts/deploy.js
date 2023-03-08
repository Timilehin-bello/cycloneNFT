const hre = require("hardhat");

async function main() {
  // Fetch  network
  const { chainId } = await ethers.provider.getNetwork();
  console.log("Using chainId:", chainId);

  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();

  await nftMarketplace.deployed();

  console.log(`Deployed contract Address ${nftMarketplace.address}`);
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
