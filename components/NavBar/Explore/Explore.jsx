import React from "react";
import Link from "next/link";

import Style from "./Explore.module.css";

const Explore = () => {
  const explore = [
    {
      name: "Author",
      link: "author",
    },
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Create NFT",
      link: "uploadNFT",
    },
    {
      name: "Update Listing Price",
      link: "updateListingPrice",
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
