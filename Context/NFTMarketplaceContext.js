import React, { useEffect, useState } from "react";
import config from "./config.json";
import NFT_ABI from "./NFTMarketplace.json";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { create } from "ipfs-http-client";
import axios from "axios";

const projectId = "2KHfZsYP1zBOVsSZZYx4VJ9qzR0";
const projectSecretKey = "355244ba91064d11370befe1297ef660";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;

const subdomain = "https://cyclone-nft-marketplace.infura-ipfs.io";

const client = create({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

// import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

const fetchContract = async (signerOrProvider) => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const { chainId } = await provider.getNetwork();

  const nftConfig = config[chainId].cycloneNFT;
  const nftContract = new ethers.Contract(
    nftConfig.address,
    NFT_ABI,
    signerOrProvider
  );
  return nftContract;
};
// Connect to SmartContract
const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log(
      `Ran into an error while connecting to Smart Contract ${error}`
    );
  }
};

export const NFTMarketplaceContext = React.createContext();

// Truncate Strings
const truncateString = (str, number) => {
  if (str?.length > number) {
    return str.slice(0, number) + "...";
  } else {
    return str;
  }
};

export const NFTMarketplaceProvider = ({ children }) => {
  const [success, setSuccess] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [newPrice, setNewPrice] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");

  const router = useRouter();

  const ConnectToWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Oops, Install a Wallet");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        setError("No available account found");
        setOpenError(true);
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const getBalance = await provider.getBalance(accounts[0]);
      const bal = ethers.utils.formatEther(getBalance);

      setAccountBalance(bal);
    } catch (error) {
      setError("Wallet is not connected");
      setOpenError(true);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      connectingWithSmartContract();

      setSuccess("Successfully Connected to Wallet");
      setOpenSuccess(true);
    } catch (error) {
      setError("Error while connecting to Wallet");
      setOpenError(true);
    }
  };

  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });

      const url = `${subdomain}/ipfs/${added.path}`;
      console.log(added);
      console.log(url);
      return url;
    } catch (error) {
      setError("Error Uploading to IPFS");
      setOpenError(true);
    }
  };

  const createNFT = async (name, price, image, description, router) => {
    if (!name || !description || !price || !image)
      return setError("Data Is Missing"), setOpenError(true);

    const data = JSON.stringify({ name, description, image });

    console.log(data);

    try {
      const added = await client.add(data);
      console.log("added", added);
      const url = `${subdomain}/ipfs/${added.path}`;
      // const urla = `https://infura-ipfs.io/ipfs/${added.path}`;
      // const urlb = `https://ipfs.infura.io/ipfs/${added.path}`;

      // console.log("URL", url);
      // console.log("URL1", url);
      // console.log("URL2", urla);

      await createSale(url, price);

      router.push("/searchPage");
    } catch (error) {
      setError("Error while creating NFT");
      setOpenError(true);
    }
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    if (!url || !formInputPrice)
      return (
        setError("Please input the price"), setOpenError(true), "Empty input"
      );

    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");

      const contract = await connectingWithSmartContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createMarketItemToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();

      setSuccess("Transaction successfull");
      setOpenSuccess(true);
    } catch (error) {
      console.log(`Error while creating sale!: ${error}`);
      setError("Transaction Error");
      setOpenError(true);
    }
  };

  const fetchNFTs = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const { chainId } = await provider.getNetwork();
      console.log(chainId);

      const contract = await fetchContract(provider);
      const data = await contract.fetchMarketItems();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI, {});

            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );
      console.log("working...", items);

      return items;
    } catch (error) {
      console.log(error);
      setError("Error while fetching NFTS");
      setOpenError(true);
    }
  };

  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();

      const data =
        type == "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFTs();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI, {});

            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      setError("Error while fetching listed NFTs");
      setOpenError(true);
    }
  };

  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

      console.log();
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();

      setSuccess(" NFT Purchase Successfull");
      setOpenSuccess(true);

      router.push("/author");
    } catch (error) {
      setError("Error While uying NFT");
      setOpenError(true);
    }
  };

  const updateListingPrice = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      const listingPrice = ethers.utils.parseEther(newPrice);
      await contract.updateListingPrice(listingPrice);
      setNewPrice("");
      setSuccess("Listing price updated successfully!!");
      setOpenSuccess(true);
    } catch (error) {
      console.log(error);
      setError("Only Owner of Marketplace can Update the Listing Price");
      setOpenError(true);
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        ConnectToWallet,
        connectWallet,
        uploadToIPFS,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        createSale,
        currentAccount,
        newPrice,
        setNewPrice,
        setCurrentAccount,
        setOpenSuccess,
        openSuccess,
        success,
        setOpenError,
        openError,
        error,
        accountBalance,
        updateListingPrice,
        truncateString,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
