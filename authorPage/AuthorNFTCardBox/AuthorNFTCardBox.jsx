import React from "react";

import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";
import CreatorTabCard from "../../components/CreatorTab/CreatorTabCard/CreatorTabCard";
import { Loader } from "../../components/componentsindex";

const AuthorNFTCardBox = ({
  collectables,
  created,
  like,
  follower,
  nfts,
  myNFTS,
}) => {
  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectables && <NFTCardTwo NFTData={nfts} />}
      {created && <NFTCardTwo NFTData={myNFTS} />}
    </div>
  );
};

export default AuthorNFTCardBox;
