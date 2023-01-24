import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Brand } from "../components/componentsindex";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

const NFTDetails = () => {
  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setNft(router.query);
  }, [router.isReady]);

  return (
    <div>
      <NFTDetailsPage nft={nft} />
      <Brand />
    </div>
  );
};

export default NFTDetails;
