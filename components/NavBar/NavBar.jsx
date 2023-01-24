import React, { useState, useContext } from "react";
import { DiJqueryUiLogo } from "react-icons/di";

import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { useRouter } from "next/router";

import Style from "./NavBar.module.css";
import { LearnMore, SideBar } from "./index";
import { Button, Error } from "../componentsindex";

import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
import Explore from "./Explore/Explore";

const NavBar = () => {
  const [explore, setExplore] = useState(false);
  const [learn, setLearnMore] = useState(false);

  const [openSideMenu, setOpenSideMenu] = useState(false);

  const router = useRouter();

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Explore" && !explore) {
      setExplore(true);
      setLearnMore(false);
    } else if (btnText == "Learn More" && !learn) {
      setLearnMore(true);
      setExplore(false);
    } else {
      setExplore(false);
      setLearnMore(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  const { currentAccount, connectWallet, openError } = useContext(
    NFTMarketplaceContext
  );

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.navbar_logo}>
            <DiJqueryUiLogo onClick={() => router.push("/")} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* //END OF LEFT SECTION */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_explore}>
            {/* Explore MENU */}
            <p onClick={(e) => openMenu(e)}>Explore</p>
            {explore && (
              <div className={Style.navbar_container_right_explore_container}>
                <Explore />
              </div>
            )}
          </div>

          {/* Learn More MENU */}
          <div className={Style.navbar_container_right_learn}>
            <p onClick={(e) => openMenu(e)}>Learn More</p>
            {learn && (
              <div className={Style.navbar_container_right_learn_container}>
                <LearnMore />
              </div>
            )}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            {currentAccount == "" ? (
              <Button btnName="Connect" handleClick={() => connectWallet()} />
            ) : (
              <Button
                btnName="Create"
                handleClick={() => router.push("/uploadNFT")}
              />
            )}
          </div>

          {/* MENU BUTTON */}

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDBAR CPMPONENT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}

      {openError && <Error />}
    </div>
  );
};

export default NavBar;
