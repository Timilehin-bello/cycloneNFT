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
            <h1>👋 About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              aliquam, dolores non reiciendis dolorem pariatur blanditiis ad
              nesciunt
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.about} />
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
            <h1>👋 Founder.</h1>
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
