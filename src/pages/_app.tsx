/* eslint-disable react/react-in-jsx-scope */
import { AppProps } from "next/app";
import "../styles/index.scss";
import "jquery";
import "animate.css/animate.min.css";
import { Fragment, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Head from "next/head";

if (process.browser) {
  require("jquery");
  require("popper.js");
  require("bootstrap/dist/js/bootstrap");
  // require("../utils/slick.min.js")
  // require("../utils/SmoothScroll")
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("../utils/slick.min.js");
    require("../utils/SmoothScroll");
    // require("../utils/custom")

    const links = document.querySelectorAll("#navbarSupportedContent ul a");

    // for (const link of links) {
    //   link.addEventListener("click", clickHandler);
    // }
<<<<<<< HEAD
=======

>>>>>>> 120d7f0d3122cdd6938c88c0aa4765add6bf3480
    links.forEach((link) => {
      link.addEventListener("click", clickHandler);
    });

    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop - 10,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
        ></script>
<<<<<<< HEAD
        <title>Divine Love</title>
=======
        <title>Divin Love</title>
>>>>>>> 120d7f0d3122cdd6938c88c0aa4765add6bf3480
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
