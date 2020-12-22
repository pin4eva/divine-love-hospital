import {AppProps} from "next/app"
import "../styles/index.scss";
import "jquery";
import "animate.css/animate.min.css"
import { useEffect } from "react";

if (process.browser) {
  require("jquery");
  require("popper.js");
  require("bootstrap/dist/js/bootstrap")
  // require("../utils/slick.min.js")
  // require("../utils/SmoothScroll")

}


function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    require("../utils/slick.min.js")
  require("../utils/SmoothScroll")
      // require("../utils/custom")
  },[])
  return <Component {...pageProps} />;
}

export default MyApp;
