import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
} from "react-icons/ti";
import { DiJqueryUiLogo } from "react-icons/di";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import Button from "../../Button/Button";

const SideBar = ({ setOpenSideMenu, currentAccount, connectWallet }) => {
  //------USESTATE
  const [openExplore, setOpenExplore] = useState(false);
  const [openLearnMore, setOpenLearnMore] = useState(false);

  const router = useRouter();

  //--------Explore NAVIGATION MENU
  const explore = [
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Author",
      link: "author",
    },
    {
      name: "Create NFTs",
      link: "uploadNFT",
    },
  ];
  //------HELP CNTEER
  const learnMore = [
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
  ];

  const openExploreMenu = () => {
    if (!openExplore) {
      setOpenExplore(true);
    } else {
      setOpenExplore(false);
    }
  };

  const openLearnMoreMenu = () => {
    if (!openLearnMore) {
      setOpenLearnMore(true);
    } else {
      setOpenLearnMore(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />

      <div className={Style.sideBar_box_container}>
        <p>
          <a href="/">
            <DiJqueryUiLogo className={Style.sideBar_box_container_logo} />
          </a>
        </p>

        <div className={Style.sideBar_social}>
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

      <div className={Style.sideBar_nav}>
        <div>
          <div
            className={Style.sideBar_nav_container}
            onClick={() => openExploreMenu()}
          >
            <p>Explore</p>
            <TiArrowSortedDown />
          </div>

          {openExplore && (
            <div className={Style.sideBar_explore}>
              {explore.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div
            className={Style.sideBar_nav_container}
            onClick={() => openLearnMoreMenu()}
          >
            <p>Learn More</p>
            <TiArrowSortedDown />
          </div>

          {openLearnMore && (
            <div className={Style.sideBar_explore}>
              {learnMore.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={Style.sideBar_button}>
        {currentAccount == "" ? (
          <Button btnName="connect" handleClick={() => connectWallet()} />
        ) : (
          <Button
            btnName="Create"
            handleClick={() => router.push("/uploadNFT")}
          />
        )}

        <Button btnName="Connect Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default SideBar;
