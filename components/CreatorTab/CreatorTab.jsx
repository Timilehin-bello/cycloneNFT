import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./CreatorTab.module.css";
import CreatorTabCard from "./CreatorTabCard/CreatorTabCard";
import images from "../../img";

const CreatorTab = ({ TopCreator }) => {
  return (
    <div className={Style.CreatorTab}>
      <div className={Style.CreatorTab_title}>
        <h2> List of Creators</h2>
      </div>

      <div className={Style.CreatorTab_box}>
        {TopCreator.map((el, i) => (
          <CreatorTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    </div>
  );
};

export default CreatorTab;
