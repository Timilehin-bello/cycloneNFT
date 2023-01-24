import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Style from "./LandingPage.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className={`${Style.LandingPage} `}>
      <div className={`${Style.LandingPage_box}`}>
        <div className={Style.LandingPage_box_left}>
          <h1>
            <Image
              className={`${Style.LandingPage_image} animate__animated animate__zoomIn`}
              src={images.nftsText}
              alt="Hero section"
            />
          </h1>
          <div className="animate__animated animate__zoomIn">
            <p>
              The world’s Biggest advanced commercial center for Crypto
              collectibles and non-fungible tokens.
            </p>
          </div>
          <div className="animate__animated animate__zoomIn">
            <Button
              btnName="SEARCH FOR NFTs 🚀"
              handleClick={() => router.push("/searchPage")}
            />
          </div>
        </div>
        <div
          className={`${Style.LandingPage_box_right} animate__animated animate__zoomIn`}
        >
          <Image
            src={images.myhero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
