import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

// This should already be declared in your API file

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const projectId = "your id";
const projectSecretKey = "your key";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;

const subdomain = "infura-ipfs.io";

// TODO: CLIENT EDIT

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
// const client = ipfsHttpClient({
//   host: "infura-ipfs.io",
//   port: 5001,
//   protocol: "https",
//   headers: {
//     authorization: auth,
//   },
// });

//INTERNAL  IMPORT
import {
  NFTMarketplaceAddress,
  NFTMarketplaceABI,
  transferFundsAddress,
  transferFundsABI,
} from "./constants";

//---FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

//---CONNECTING WITH SMART CONTRACT

const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover,Collect & Sell Popular";

  //------USESTAT
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const router = useRouter();

  // TODO: CHECK IF THE CONTRACT IS CONNECTED
  // const checkContract = async () => {
  //   const contract = await connectingWithSmartContract();

  //   console.log(contract);
  // };

  //---CHECK IF WALLET IS CONNECTED
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        // setError("No Account Found");
        // setOpenError(true);
        console.log("No Account Found");
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const getBalance = await provider.getBalance(accounts[0]);
      const bal = ethers.utils.formatEther(getBalance);
      setAccountBalance(bal);
    } catch (error) {
      // setError("Something wrong while connecting to wallet");
      // setOpenError(true);
      console.log("not connected");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  //---CONNET WALLET FUNCTION
  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);
      setCurrentAccount(accounts[0]);

      // window.location.reload();
      connectingWithSmartContract();
    } catch (error) {
      // setError("Error while connecting to wallet");
      // setOpenError(true);
    }
  };

  //---UPLOAD TO IPFS FUNCTION
  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      //TODO: CHANGE SUBDOMAIN
      // const url = `${subdomain}/ipfs/${added.path}`;
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      return url;
    } catch (error) {
      setError("Error Uploading to IPFS");
      setOpenError(true);
    }
  };

  //---CREATENFT FUNCTION
  const createNFT = async (formInput, fileUrl, router) => {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl)
      return console.log("Data is Missing");

    const data = JSON.stringify({ name, description, image: fileUrl });

    try {
      const added = await client.add(data);

      const url = `https://infura-ipfs.io/ipfs/${added.path}`;

      await createSale(url, price);
      // router.push("/searchPage");
    } catch (error) {
      console.log("Error whole creating NFT");
    }
  };

  // const createNFT = async (name, price, image, description, router) => {
  //   if (!name || !description || !price || !image)
  //     return setError("Data Is Missing"), setOpenError(true);

  //   const data = JSON.stringify({ name, description, image });

  //   try {
  //     const added = await client.add(data);

  //     const url = `https://infura-ipfs.io/ipfs/${added.path}`;

  //     await createSale(url, price);
  //     router.push("/searchPage");
  //   } catch (error) {
  //     setError("Error while creating NFT");
  //     setOpenError(true);
  //   }
  // };

  //--- createSale FUNCTION
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      // console.log(url, formInputPrice, isReselling, id);
      const price = ethers.utils.parseUnits(formInputPrice, "ether");

      const contract = await connectingWithSmartContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
      console.log(transaction);
    } catch (error) {
      console.log(error);
      console.log("error while creating sale");
    }
  };

  // const createSale = async (url, formInputPrice, isReselling, id) => {
  //   try {
  //     console.log(url, formInputPrice, isReselling, id);
  //     const price = ethers.utils.parseUnits(formInputPrice, "ether");

  //     const contract = await connectingWithSmartContract();

  //     const listingPrice = await contract.getListingPrice();

  //     const transaction = !isReselling
  //       ? await contract.createToken(url, price, {
  //           value: listingPrice.toString(),
  //         })
  //       : await contract.resellToken(id, price, {
  //           value: listingPrice.toString(),
  //         });

  //     await transaction.wait();
  //     console.log(transaction);
  //   } catch (error) {
  //     setError("error while creating sale");
  //     setOpenError(true);
  //     console.log(error);
  //   }
  // };

  //--FETCHNFTS FUNCTION

  const fetchNFTs = async () => {
    try {
      // if (currentAccount
      // const web3Modal = new Web3Modal();
      // const connection = await web3Modal.connect();
      // const provider = new ethers.providers.Web3Provider(connection);) {

      // const provider = new ethers.providers.JsonRpcProvider(
      //   "https://polygon-mumbai.g.alchemy.com/v2/Yq1F4URSZIlAfsBKQiv_PAD5P3Fn6N6z"
      // );

      const provider = new ethers.providers.JsonRpcProvider();

      // TODO: COMMENTED THE CONSOLE LOG
      // console.log(provider);
      const contract = fetchContract(provider);
      // const contract = fetchContract(provider);

      const data = await contract.fetchMarketItems();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
              // TODO: axios.get(tokenURI, {})
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
      console.log(items);
      return items;

      // }
    } catch (error) {
      // setError("Error while fetching NFTS");
      // setOpenError(true);
      console.log(error);
    }
  };

  // useEffect(() => {
  //   // if (currentAccount) {
  //   fetchNFTs();
  //   // }
  // }, []);

  //--FETCHING MY NFT OR LISTED NFTs
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      if (currentAccount) {
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
              } = await axios.get(tokenURI);
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
      }
    } catch (error) {
      // setError("Error while fetching listed NFTs");
      // setOpenError(true);
    }
  };

  // useEffect(() => {
  //   fetchMyNFTsOrListedNFTs();
  // }, []);

  //---BUY NFTs FUNCTION
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
    } catch (error) {
      console.log("Error While buying NFT");
    }
  };

  // const buyNFT = async (nft) => {
  //   try {
  //     const contract = await connectingWithSmartContract();
  //     const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

  //     const transaction = await contract.createMarketSale(nft.tokenId, {
  //       value: price,
  //     });

  //     await transaction.wait();
  //     router.push("/author");
  //   } catch (error) {
  //     setError("Error While buying NFT");
  //     setOpenError(true);
  //   }
  // };

  //------------------------------------------------------------------

  //----TRANSFER FUNDS

  const fetchTransferFundsContract = (signerOrProvider) =>
    new ethers.Contract(
      transferFundsAddress,
      transferFundsABI,
      signerOrProvider
    );

  const connectToTransferFunds = async () => {
    try {
      const web3Modal = new Wenb3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchTransferFundsContract(signer);
      return contract;
    } catch (error) {
      console.log(error);
    }
  };
  //---TRANSFER FUNDS
  const [transactionCount, setTransactionCount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const transferEther = async (address, ether, message) => {
    try {
      if (currentAccount) {
        const contract = await connectToTransferFunds();
        console.log(address, ether, message);

        const unFormatedPrice = ethers.utils.parseEther(ether);
        // //FIRST METHOD TO TRANSFER FUND
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: address,
              gas: "0x5208",
              value: unFormatedPrice._hex,
            },
          ],
        });

        const transaction = await contract.addDataToBlockchain(
          address,
          unFormatedPrice,
          message
        );

        console.log(transaction);

        setLoading(true);
        transaction.wait();
        setLoading(false);

        const transactionCount = await contract.getTransactionCount();
        setTransactionCount(transactionCount.toNumber());
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //FETCH ALL TRANSACTION
  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const contract = await connectToTransferFunds();

        const avaliableTransaction = await contract.getAllTransactions();

        const readTransaction = avaliableTransaction.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message: transaction.message,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        }));

        setTransactions(readTransaction);
        console.log(transactions);
      } else {
        console.log("On Ethereum");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NFTMarketplaceContext.Provider
      value={{
        // checkContract,
        checkIfWalletConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        createSale,
        currentAccount,
        titleData,
        setOpenError,
        openError,
        error,
        transferEther,
        getAllTransactions,
        loading,
        accountBalance,
        transactionCount,
        transactions,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
