import React, { useEffect, useState, useContext } from "react";

import Style from "../styles/searchPage.module.css";
import { Brand, Loader } from "../components/componentsindex";
import { SearchBar } from "../SearchPage/searchBarIndex";

import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const searchPage = () => {
  const { fetchNFTs, setError } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    try {
      fetchNFTs().then((items) => {
        if (items === undefined) {
          return;
        }
        setNfts(items.reverse());
        setNftsCopy(items);
      });
    } catch (error) {
      setError("Please reload the browser", error);
    }
  }, []);

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground1} />
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />

      {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}

      <Brand />
    </div>
  );
};

export default searchPage;
