require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    localhost: {},
    //   hardhat: {},

    mumbai: {
      // chainId: 80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/KBuX4MEvHnuxz1qVl9Rd-QKqEl0WUVWW",
      // url: process.env.POLYGON_MUMBAI,
      accounts: [
        `0x${"581d24bcb73d19019d78cd8bddbc89c362eb1dc22da667c0e9e0f07ae7af8284"}`,
      ],
    },

    // fuji: {
    //   url: `Your URL`,
    //   accounts: [
    //     `0x${"Your Account"}`,
    //   ],
    // },
  },
};
