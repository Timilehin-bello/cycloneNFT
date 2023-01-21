import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";
import { getTopCreators } from "../TopCreators/TopCreators";

//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, currentAccount /*checkContract*/ } =
    useContext(NFTMarketplaceContext);
  useEffect(() => {
    checkIfWalletConnected();
    // checkContract();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  const wait = (seconds) => {
    const milliseconds = seconds * 1000;
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    // if (currentAccount) {
    fetchNFTs().then((items) => {
      if (items == undefined) {
        return;
      }
      // TODO: ADDED ?
      setNfts(items.reverse());
      setNftsCopy(items);
    });
    // }
  }, []);

  //CREATOR LIST

  const creators = getTopCreators(nfts);
  // console.log(creators);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      {/* <BigNFTSilder /> */}
      {/* <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      /> */}
      {/* <AudioLive /> */}
      {creators.length == 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )}
      {/* <Slider /> */}
      {/* <Collection /> */}
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      {/* <Filter /> */}
      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
      {}
      {/* <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      /> */}
      {/* <Category /> */}
      <Subscribe />
      <Video />
      <Brand />
    </div>
  );
};

export default Home;
