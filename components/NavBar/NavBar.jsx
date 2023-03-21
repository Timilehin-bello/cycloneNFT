import React, { useState, useEffect, useContext } from "react";
import { DiJqueryUiLogo } from "react-icons/di";

import Style from "./NavBar.module.css";
import { LearnMore, SideBar } from "./index";
import { Button, Error, Success } from "../componentsindex";

import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { useRouter } from "next/router";

import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";
import Explore from "./Explore/Explore";

const NavBar = () => {
  const [explore, setExplore] = useState(false);
  const [learn, setLearnMore] = useState(false);

  const [openSideMenu, setOpenSideMenu] = useState(false);

  const router = useRouter();
  const {
    currentAccount,
    connectWallet,
    openError,
    openSuccess,
    ConnectToWallet,
  } = useContext(NFTMarketplaceContext);

  useEffect(() => {
    ConnectToWallet();
  });

  useEffect(() => {
    // add event listener to detect clicks outside of dropdown
    const handleClick = (e) => {
      if (e.target.closest(".dropdown")) return;
      setExplore(false);
      setLearnMore(false);
      setOpenSideMenu(false);
    };

    if (!window.ethereum) return;

    // Reload page when network changes
    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });

    // Reload page when address changes
    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    });

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

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

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_explore}>
            <div className="dropdown">
              <p onClick={(e) => openMenu(e)}>Explore</p>
              {explore && (
                <div className={Style.navbar_container_right_explore_container}>
                  <Explore />
                </div>
              )}
            </div>
          </div>

          <div className={Style.navbar_container_right_learn}>
            <div className="dropdown">
              <p onClick={(e) => openMenu(e)}>Learn More</p>
              {learn && (
                <div className={Style.navbar_container_right_learn_container}>
                  <LearnMore />
                </div>
              )}
            </div>
          </div>

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

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      <div className="dropdown">
        {openSideMenu && (
          <div className={Style.sideBar}>
            <SideBar
              setOpenSideMenu={setOpenSideMenu}
              currentAccount={currentAccount}
              connectWallet={connectWallet}
            />
          </div>
        )}
      </div>
      {openError && <Error />}
      {openSuccess && <Success />}
    </div>
  );
};

export default NavBar;
