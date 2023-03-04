require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  solidity: "0.8.17",
  networks: {
    localhost: {},
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    // },
    // goerli: {
    //   url: "https://eth-goerli.g.alchemy.com/v2/rDrOLSTdBxfdoj-pptYKrS1t2r0NfEuZ",
    //   accounts: [
    //     `0x${"581d24bcb73d19019d78cd8bddbc89c362eb1dc22da667c0e9e0f07ae7af8284"}`,
    //   ],
    // },
  },
};
