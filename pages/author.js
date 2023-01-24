import React, { useState, useEffect, useContext } from "react";

import Style from "../styles/author.module.css";
import { Banner } from "../collectionPage/collectionIndex";
import { Brand } from "../components/componentsindex";

import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../authorPage/componentIndex";

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const author = () => {
  const [collectables, setcollectables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

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
      <Banner bannerImage={images.creatorbackground1} />
      <AuthorProfileCard currentAccount={currentAccount} />
      <AuthorTaps
        setcollectables={setcollectables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCardBox
        collectables={collectables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={nfts}
        myNFTS={myNFTs}
      />

      <Brand />
    </div>
  );
};

export default author;
