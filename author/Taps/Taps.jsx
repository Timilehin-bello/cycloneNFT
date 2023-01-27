import React, { useState } from "react";

import Style from "./Taps.module.css";

const Taps = ({ setcollectables, setCreated }) => {
  const [activeBtn, setActiveBtn] = useState(1);

  const openTab = (e) => {
    const btnText = e.target.innerText;
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
    <div className={Style.Taps}>
      <div className={Style.Taps_box}>
        <div className={Style.Taps_box_left}>
          <div className={Style.Taps_box_left_btn}>
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

export default Taps;
