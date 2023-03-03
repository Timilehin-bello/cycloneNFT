import React, { useState, useEffect, useContext } from "react";
import Style from "../styles/index.module.css";
import {
  LandingPage,
  Service,
  BrandEngage,
  Title,
  NFTCard,
  CreatorTab,
  Brand,
  Brief,
  Loader,
} from "../components/componentsindex";
import { getCreators } from "../Creators/Creators";
import { NFTMarketplaceContext } from "../context/NFTMarketplaceContext";

const Home = () => {
  const { ConnectToWallet } = useContext(NFTMarketplaceContext);

  useEffect(() => {
    ConnectToWallet();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    fetchNFTs().then((items) => {
      console.log(items);
      if (items == undefined) {
        return;
      }
      setNfts(items.reverse());
    });
  }, []);

  const creators = getCreators(nfts);

  return (
    <div className={Style.homePage}>
      <LandingPage />
      <Service />

      {creators.length == 0 ? <Loader /> : <CreatorTab TopCreator={creators} />}

      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />

      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}

      <BrandEngage />
      <Brief />
      <Brand />
    </div>
  );
};

export default Home;
