import React from "react";
import Image from "next/image";

import Style from "./CreatorTabCard.module.css";
import images from "../../../img";
const CreatorTabCard = ({ i, el }) => {
  return (
    <div className={Style.CreatorTabCard}>
      <div className={Style.CreatorTabCard_rank}>
        <p>
          {i + 1} <span>✨</span>
        </p>
      </div>

      <div className={Style.CreatorTabCard_box}>
        <div className={Style.CreatorTabCard_box_img}>
          <Image
            className={Style.CreatorTabCard_box_img_img}
            src={images.creatorbackground1}
            alt="profile braground"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>

        <div className={Style.CreatorTabCard_box_info}>
          <div className={Style.CreatorTabCard_box_info_name}>
            <h4>{el.seller.slice(0, 9)}</h4>
            <p>{el.total || 0} ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorTabCard;
