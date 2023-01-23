import React from "react";
import Image from "next/image";

import Style from "./Service.module.css";
import images from "../../img";
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
          />

          <h3>Connect Wallet</h3>
          <p>Connect with wallet to interact with Cyclone Marketplace</p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <h3>Filter & Discover</h3>
          <p>Filter and Discover Listed NFTs</p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />

          <h3>Start Transaction</h3>
          <p>
            Discover,Connect Wallet, buy NTFs, sell your NFTs and earn money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
