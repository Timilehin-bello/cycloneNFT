import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import images from "../../img";

const FollowerTab = ({ TopCreator }) => {
  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2> List of Creators</h2>
      </div>

      <div className={Style.followerTab_box}>
        {TopCreator.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    </div>
  );
};

export default FollowerTab;
