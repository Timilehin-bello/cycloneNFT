import React, { useContext, useState } from "react";
import { NFTMarketplaceContext } from "../context/NFTMarketplaceContext";
import Style from "../styles/updateListingPrice.module.css";
import formStyle from "../styles/Form.module.css";
import { Button } from "../components/componentsindex";

const updateListingPrice = () => {
  const [newPrice, setNewPrice] = useState("");
  const { updateListingPrice } = useContext(NFTMarketplaceContext);

  return (
    <div>
      <div className={Style.updateListingPrice}>
        <div className={Style.updateListingPrice_box}>
          <h1> Update Listing Price </h1>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="name">Price</label>
            <input
              value={newPrice}
              type="number"
              min={1}
              placeholder="Update Listing Price"
              className={formStyle.Form_box_input_userName}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </div>

          <div className={Style.updateListingPrice_box_btn}>
            <Button
              btnName="Update Price"
              handleClick={() => updateListingPrice(newPrice)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default updateListingPrice;
