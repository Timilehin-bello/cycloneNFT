import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Explore.module.css";

const Explore = () => {
  //-------- EXPLORE NAVIGATION MENU
  const explore = [
    {
      name: "Author",
      link: "author",
    },
    {
      name: "Create NFT",
      link: "uploadNFT",
    },
    {
      name: "Search",
      link: "searchPage",
    },
  ];
  return (
    <div>
      {explore.map((el, i) => (
        <div key={i + 1} className={Style.explore}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Explore;
