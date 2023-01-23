import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";
import { NFTTabs } from "../NFTDetailsIndex";

//IMPORT SMART CONTRACT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [owner, setOwner] = useState(false);

  const router = useRouter();

  const openSocial = () => {
    if (!social) {
      setSocial(true);
    } else {
      setSocial(false);
    }
  };

  //SMART CONTRACT DATA
  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);
  const proxyUrl = "https://lit-citadel-42195.herokuapp.com/";
  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* //Part ONE */}
        <div className={Style.NFTDescription_box_share}>
          <p>Cyclone Universe</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instragram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}
          </div>
        </div>
        {/* //Part TWO */}
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

            <div className={Style.NFTDescription_box_profile_box_right}>
              {/* <Image
                src={images.creatorbackground1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              /> */}

              {/* <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Collection</small> <br />
                <span>
                  Mokeny app <MdVerified />
                </span>
              </div> */}
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_biding}>
            {/* <p>
              <MdTimer /> <span>Auction ending in:</span>
            </p> */}

            <div className={Style.NFTDescription_box_profile_biding_box_timer}>
              {/* <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>2</p>
                <span>Days</span>
              </div> */}
              {/* <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>22</p>
                <span>hours</span>
              </div> */}
              {/* <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>45</p>
                <span>mins</span>
              </div> */}
              {/* <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>12</p>
                <span>secs</span>
              </div> */}
            </div>

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
              ) : // TODO: ADDED ? and proxy
              currentAccount == nft.owner?.toLowerCase() ? (
                <Button
                  icon=<FaWallet />
                  btnName="List on Marketplace"
                  handleClick={() =>
                    router.push(
                      `/reSellToken?id=${nft.tokenId}&tokenURI=${
                        proxyUrl + nft.tokenURI
                      }&price=${nft.price}`
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

              <Button
                icon=<FaPercentage />
                btnName="Make offer"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </div>

            {/* <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
              <button onClick={(e) => openTabs(e)}>Bid History</button>
              <button onClick={(e) => openTabs(e)}>Provanance</button>
              <button onClick={() => openOwmer()}>Owner</button>
            </div>

            {history && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {provanance && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={provananceArray} />
              </div>
            )}

            {owner && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={ownerArray} icon=<MdVerified /> />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
