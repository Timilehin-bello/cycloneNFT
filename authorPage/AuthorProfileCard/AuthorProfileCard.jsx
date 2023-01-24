import React from "react";
import Image from "next/image";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

import Style from "./AuthorProfileCard.module.css";
import images from "../../img";

const AuthorProfileCard = ({ currentAccount }) => {
  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={images.nft_image}
            className={Style.AuthorProfileCard_box_img_img}
            alt="NFT IMAGES"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" defaultValue={currentAccount} id="myInput" />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
          </div>

          <p>
            The most secure marketplace for buying and selling unique crypto
            assets.
          </p>

          <div className={Style.AuthorProfileCard_box_info_social}>
            <a
              href="https://www.facebook.com/profile.php?id=100009096397038"
              target="_blank"
            >
              <TiSocialFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/oluwatimilehin-bello/"
              target="_blank"
            >
              <TiSocialLinkedin />
            </a>
            <a href="https://twitter.com/Timmee_Bello" target="_blank">
              <TiSocialTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCDyKFRctmBNBRm1o8-MY4hA"
              target="_blank"
            >
              <TiSocialYoutube />
            </a>
            <a href="https://www.instagram.com/teemee_bello/" target="_blank">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
