import React, { useState } from "react";

import Style from "./AuthorTaps.module.css";

const AuthorTaps = ({ setcollectables, setCreated }) => {
  const [activeBtn, setActiveBtn] = useState(1);

  const openTab = (e) => {
    const btnText = e.target.innerText;
    console.log(btnText);
    if (btnText == "Listed NFTs") {
      setcollectables(true);
      setCreated(false);
      setActiveBtn(1);
    } else if (btnText == "Own NFT") {
      setcollectables(false);
      setCreated(true);
      setActiveBtn(2);
    }
  };

  return (
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
          <div className={Style.AuthorTaps_box_left_btn}>
            <button
              className={`${activeBtn == 1 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Listed NFTs
            </button>
            <button
              className={`${activeBtn == 2 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Own NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
