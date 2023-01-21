import React from "react";
import Image from "next/image";

//INTERNALIMPORT
import Style from "./Video.module.css";
import images from "../../img";

const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}>
        <h1>About Us</h1>
        <p>
          Cyclone strives to be the most trustworthy and secure marketplace for
          NFTs. Finding and eliminating current vulnerabilities is a top
          priority.
        </p>

        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <Image
              src={images.bg_nft}
              alt="Video image"
              width={1920}
              height={1080}
              objectFit="cover"
              className={Style.Video_box_frame_left_img}
            />
          </div>

          <div className={Style.Video_box_frame_right}></div>
        </div>
      </div>
    </div>
  );
};

export default Video;
