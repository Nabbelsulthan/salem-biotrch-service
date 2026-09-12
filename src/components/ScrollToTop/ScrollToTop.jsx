import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

  const { pathname, hash } = useLocation();


  useLayoutEffect(() => {

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }


    /*
     * If there is a hash,
     * let the browser/React navigate to
     * that exact product.
     */

    if (hash) {

      const element = document.getElementById(
        hash.substring(1)
      );

      if (element) {

        requestAnimationFrame(() => {

          element.scrollIntoView({
            behavior: "instant",
            block: "start",
          });

        });

      }

      return;
    }


    /*
     * Normal route navigation:
     * start from the top.
     */

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

  }, [pathname, hash]);


  return null;
};

export default ScrollToTop;