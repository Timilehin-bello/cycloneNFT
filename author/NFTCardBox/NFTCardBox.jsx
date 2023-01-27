import React from "react";
import Style from "./NFTCardBox.module.css";
import { NFTCardCollection } from "../../collection/collectionIndex";

const NFTCardBox = ({ collectables, created, nfts, myNFTS }) => {
  return (
    <div className={Style.NFTCardBox}>
      {collectables && <NFTCardCollection NFTData={nfts} />}
      {created && <NFTCardCollection NFTData={myNFTS} />}
    </div>
  );
};

export default NFTCardBox;
