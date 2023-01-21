import React from "react";
import { DiJqueryUiLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
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
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
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
