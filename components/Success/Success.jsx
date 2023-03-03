import React, { useContext } from "react";
import Image from "next/image";

import Style from "./Success.module.css";
import images from "../../img";

import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const Success = () => {
  const { success, setOpenSuccess } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.Success} onClick={() => setOpenSuccess(false)}>
      <div className={Style.Success_box}>
        <div className={Style.Success_box_info}>
          <Image
            alt="success"
            src={images.success}
            width={200}
            height={200}
            objectFit="cover"
            className={Style.Success_box_info_img}
          />
          <p>{success}</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
