import React from "react";
import Image from "next/image";

import Style from "./Brief.module.css";
import images from "../../img";

const Brief = () => {
  return (
    <div className={Style.Brief}>
      <div className={Style.Brief_box}>
        <h1>About Us</h1>
        <p>
          Cyclone strives to be the most trustworthy and secure marketplace for
          NFTs. Finding and eliminating current vulnerabilities is a top
          priority.
        </p>

        <div className={Style.Brief_box_frame}>
          <div className={Style.Brief_box_frame_left}>
            <Image
              src={images.bg_nft}
              alt="Brief image"
              width={1920}
              height={1080}
              objectFit="cover"
              className={Style.Brief_box_frame_left_img}
            />
          </div>

          <div className={Style.Brief_box_frame_right}></div>
        </div>
      </div>
    </div>
  );
};

export default Brief;
