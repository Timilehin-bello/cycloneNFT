import "animate.css";
import "../styles/globals.css";
import { motion, useScroll } from "framer-motion";

import { NavBar, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";

const MyApp = ({ Component, pageProps }) => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <NFTMarketplaceProvider>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </NFTMarketplaceProvider>
    </div>
  );
};

export default MyApp;
