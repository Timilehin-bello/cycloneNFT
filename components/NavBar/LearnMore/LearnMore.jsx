import React from "react";
import Link from "next/link";

import Style from "./LearnMore.module.css";

const LearnMore = () => {
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
  return (
    <div className={Style.box}>
      {learnMore.map((el, i) => (
        <div className={Style.learnMore} key={i + 1}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default LearnMore;
