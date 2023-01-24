import React from "react";
import { DiJqueryUiLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";

import Style from "./Footer.module.css";
import { Explore, LearnMore } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_container}>
        <div className={Style.footer_container_social}>
          <a href="/">
            <DiJqueryUiLogo className={Style.footer_container_social_logo} />
          </a>
          <p>
            The world’s largest digital marketplace for crypto collectibles and
            non-fungible tokens (NFTs). Buy, sell, and discover exclusive
            digital items
          </p>

          <div className={Style.footer_social}>
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

        <div>
          <h3>Explore</h3>
          <Explore />
        </div>

        <div>
          <h3>Learn More</h3>
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default Footer;
