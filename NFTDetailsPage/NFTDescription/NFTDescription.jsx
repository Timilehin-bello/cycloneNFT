import React, { useContext } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { MdVerified } from "react-icons/md";
import { FaWallet } from "react-icons/fa";

import Style from "./NFTDescription.module.css";
import { Button } from "../../components/componentsindex.js";

import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const router = useRouter();

  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        <div className={Style.NFTDescription_box_share}>
          <p>Cyclone Universe</p>
        </div>

        <div className={Style.NFTDescription_box_profile}>
          <h1>
            {nft.name} #{nft.tokenId}
          </h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
                  <span>
                    Click to view Creator <MdVerified />
                  </span>
                </Link>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}></div>
          </div>

          <div className={Style.NFTDescription_box_profile_biding}>
            <div className={Style.NFTDescription_box_profile_biding_box_price}>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_price_bid
                }
              >
                <small>Price</small>
                <p>{nft.price} ETH</p>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_biding_box_button}>
              {currentAccount == nft.seller?.toLowerCase() ? (
                <p>You can't buy your own NFT</p>
              ) : currentAccount == nft.owner?.toLowerCase() ? (
                <Button
                  icon=<FaWallet />
                  btnName="List on Marketplace"
                  handleClick={() =>
                    router.push(
                      `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
                    )
                  }
                  classStyle={Style.button}
                />
              ) : (
                <Button
                  icon=<FaWallet />
                  btnName="Buy NFT"
                  handleClick={() => buyNFT(nft)}
                  classStyle={Style.button}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
