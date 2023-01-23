import React from "react";
import Image from "next/image";

import Link from "next/link";

import Style from "./NFTCardTwo.module.css";
import { LikeProfile, Loader } from "../../components/componentsindex";

const NFTCardTwo = ({ NFTData }) => {
  // console.log(NFTData);
  return (
    <div className={Style.NFTCardTwo}>
      {/*   // TODO: ADDED ?*/}
      {NFTData.length === 0 ? (
        <Loader />
      ) : (
        NFTData?.map((el, i) => (
          <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1}>
            <div className={Style.NFTCardTwo_box} key={i + 1}>
              <div className={Style.NFTCardTwo_box_img}>
                <Image
                  src={el.image}
                  alt="NFT"
                  width={500}
                  height={500}
                  objectFit="cover"
                  className={Style.NFTCardTwo_box_img_img}
                />
              </div>

              <div className={Style.NFTCardTwo_box_info}>
                <div className={Style.NFTCardTwo_box_info_left}>
                  <span>{el.name}</span>
                </div>
              </div>

              <div className={Style.NFTCardTwo_box_price}>
                <div className={Style.NFTCardTwo_box_price_box}>
                  <small>Price</small>
                  <p>{el.price}ETH</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default NFTCardTwo;
