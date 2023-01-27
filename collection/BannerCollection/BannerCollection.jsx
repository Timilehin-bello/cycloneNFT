import React from "react";
import Image from "next/image";

import Style from "./BannerCollection.module.css";

const BannerCollection = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          objectFit="cover"
          alt="background"
          width={1600}
          height={100}
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          objectFit="cover"
          alt="background"
          width={1600}
          height={300}
        />
      </div>
    </div>
  );
};

export default BannerCollection;
