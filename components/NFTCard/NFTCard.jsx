import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./NFTCard.module.css";
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const NFTCard = ({ NFTData }) => {
  const { truncateString } = useContext(NFTMarketplaceContext);

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

            <div className={Style.NFTCard_box_update_details}>
              <div className={Style.NFTCard_box_update_details_price}>
                <div className={Style.NFTCard_box_update_details_price_box}>
                  <h4>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCard;
