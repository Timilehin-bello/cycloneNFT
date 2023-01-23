import React from "react";
import Image from "next/image";

import Style from "./BrandEngage.module.css";
import images from "../../img";

const BrandEngage = () => {
  return (
    <div className={Style.brandengage}>
      <div className={Style.brandengage_box}>
        <div className={Style.brandengage_box_left}>
          <h2>Cyclone Digital Marketplace</h2>
          <p>Engage with Cyclone and Own Unique NFTs</p>
          <div className={Style.brandengage_box_left_box}>
            <span>01</span>
            <small>Connect your wallet</small>
          </div>

          <div className={Style.brandengage_box_left_box}>
            <span>02</span>
            <small> Create NFTs</small>
          </div>

          <div className={Style.brandengage_box_left_box}>
            <span>03</span>
            <small> Buy NFTs</small>
          </div>

          <div className={Style.brandengage_box_left_box}>
            <span>03</span>
            <small> ReSell NFTs</small>
          </div>
        </div>

        <div className={Style.brandengage_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandEngage;
