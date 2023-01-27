import React from "react";
import Image from "next/image";
import { DiJqueryUiLogo } from "react-icons/di";
import { useRouter } from "next/router";

import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";

const Brand = () => {
  const router = useRouter();
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <a href="/">
            <DiJqueryUiLogo className={Style.Brand_box_left_logo} />
          </a>
          <h1>Cyclone NFT Marketplace</h1>
          <p>A creative agency that lead and inspire NFTs.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button
              btnName="Create"
              handleClick={() => router.push("/uploadNFT")}
            />
            <Button
              btnName="Search"
              handleClick={() => router.push("/searchPage")}
            />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.earn} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
