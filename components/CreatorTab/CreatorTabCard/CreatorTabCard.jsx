import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

//INTERNAL IMPORT
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
            src={el.background || images[`creatorbackground${i + 1}`]}
            alt="profile braground"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>

        <div className={Style.CreatorTabCard_box_profile}>
          <Image
            className={Style.CreatorTabCard_box_profile_img}
            alt="profile picture"
            width={50}
            height={50}
            src={el.user || images[`user${i + 1}`]}
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
