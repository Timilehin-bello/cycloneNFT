require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  solidity: "0.8.17",
  networks: {
    localhost: {},
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/KBuX4MEvHnuxz1qVl9Rd-QKqEl0WUVWW",
      accounts: [
        `0x${"581d24bcb73d19019d78cd8bddbc89c362eb1dc22da667c0e9e0f07ae7af8284"}`,
      ],
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/rDrOLSTdBxfdoj-pptYKrS1t2r0NfEuZ",
      accounts: [
        `0x${"581d24bcb73d19019d78cd8bddbc89c362eb1dc22da667c0e9e0f07ae7af8284"}`,
      ],
    },
  },
};
