import React, { useState, useEffect, useContext } from "react";

import Style from "../styles/author.module.css";
import { BannerCollection } from "../collection/collectionIndex";
import { Brand } from "../components/componentsindex";

import images from "../img";
import { ProfileCard, Taps, NFTCardBox } from "../author/componentIndex";

import { NFTMarketplaceContext } from "../context/NFTMarketplaceContext";

const author = () => {
  const [collectables, setcollectables] = useState(true);
  const [created, setCreated] = useState(false);

  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
      setNfts(items);
    });
  }, []);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      setMyNFTs(items);
    });
  }, []);

  return (
    <div className={Style.author}>
      <BannerCollection bannerImage={images.creatorbackground1} />
      <ProfileCard currentAccount={currentAccount} />
      <Taps setcollectables={setcollectables} setCreated={setCreated} />

      <NFTCardBox
        collectables={collectables}
        created={created}
        nfts={nfts}
        myNFTS={myNFTs}
      />

      <Brand />
    </div>
  );
};

export default author;
