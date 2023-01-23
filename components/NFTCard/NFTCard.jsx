import React, { useState, useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

import Style from "./NFTCard.module.css";
import images from "../../img";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTCard = ({ NFTData }) => {
  const { truncateString } = useContext(NFTMarketplaceContext);
  const [like, setLike] = useState(true);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={Style.NFTCard}>
      {NFTData.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1}>
          <div className={Style.NFTCard_box}>
            <div className={Style.NFTCard_box_img}>
              <Image
                src={el.image}
                alt="NFT images"
                width={600}
                height={600}
                className={Style.NFTCard_box_img_img}
              />
            </div>

            <div className={Style.NFTCard_box_update}>
              {/* <div className={Style.NFTCard_box_update_left}>
                <div
                  className={Style.NFTCard_box_update_left_like}
                  onClick={() => likeNft()}
                >
                  {like ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart
                      className={Style.NFTCard_box_update_left_like_icon}
                    />
                  )}
                </div>
              </div> */}

              {/* <div className={Style.NFTCard_box_update_right}>
                <div className={Style.NFTCard_box_update_right_info}></div>
              </div> */}
            </div>

            <div className={Style.NFTCard_box_update_details}>
              <div className={Style.NFTCard_box_update_details_price}>
                <div className={Style.NFTCard_box_update_details_price_box}>
                  <h4>
                    {/* TODO: TRUNCATE */}
                    {truncateString(el.name, 3)} #{el.tokenId}
                  </h4>

                  <div
                    className={Style.NFTCard_box_update_details_price_box_box}
                  >
                    <div
                      className={Style.NFTCard_box_update_details_price_box_bid}
                    >
                      <small>Price</small>
                      <p>{el.price}ETH</p>
                    </div>
                    <div
                      className={
                        Style.NFTCard_box_update_details_price_box_stock
                      }
                    ></div>
                  </div>
                </div>
              </div>
              {/* <div className={Style.NFTCard_box_update_details_category}>
                <BsImages />
              </div> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCard;
