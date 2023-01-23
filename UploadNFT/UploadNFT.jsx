import React, { useState } from "react";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { useRouter } from "next/router";
import Style from "./Upload.module.css";
import formStyle from "../styles/Form.module.css";
import { Button } from "../components/componentsindex.js";
import { DropZone } from "./uploadNFTIndex.js";

const UploadNFT = ({ uploadToIPFS, createNFT }) => {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const router = useRouter();

  return (
    <div className={Style.upload}>
      <DropZone
        title="JPG, PNG, WEBM , MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        name={name}
        description={description}
        setImage={setImage}
        uploadToIPFS={uploadToIPFS}
        price={price}
      />

      <div className={Style.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Item Name</label>
          <input
            type="text"
            placeholder="Enter the name of the item"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            name="Description"
            id="1"
            cols="30"
            rows="6"
            placeholder="A brief explanation "
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Price">Price</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={Style.upload_box_btn}>
          <Button
            btnName="Upload"
            handleClick={async () =>
              createNFT(name, price, image, description, router)
            }
            classStyle={Style.upload_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
