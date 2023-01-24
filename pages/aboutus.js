import React from "react";
import Image from "next/image";

import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h2>👋 About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              aliquam, dolores non reiciendis dolorem pariatur blanditiis ad
              nesciunt
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right_img}>
            <Image
              src={images.about}
              className={Style.aboutus_box_founder_box_img}
            />
          </div>
        </div>

        <div className={Style.aboutus_founder_box_hero}>
          <div className={Style.aboutus_box_hero_right}>
            <Image
              src={images.user}
              className={Style.aboutus_box_founder_box_img}
            />
          </div>
          <div className={Style.aboutus_box_hero_left}>
            <h2>👋Founder.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              aliquam, dolores non reiciendis dolorem pariatur blanditiis ad
              nesciunt
            </p>
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
