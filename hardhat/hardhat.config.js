require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const { API_URL, PRIVATE_KEY, POLYGONSCAN_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};