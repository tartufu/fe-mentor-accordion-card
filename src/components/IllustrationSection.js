import React from "react";

import IllustrationWomanDesktop from "../resources/illustration-woman-online-desktop.svg";
import BgPatternDesktop from "../resources/bg-pattern-desktop.svg";
import IllustrationBox from "../resources/illustration-box-desktop.svg";

// https://www.css3.info/preview/multiple-backgrounds/
// https://techglimpse.com/overlap-three-images-using-css/

export default function IllustrationSection() {
  return (
    <div
      style={{
        height: "100%",
        border: "1px solid green",
        position: "relative",
        backgroundImage: `url(${IllustrationBox}), url(${IllustrationWomanDesktop}), url(${BgPatternDesktop})`,
        backgroundPosition: "left bottom, center, left bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    ></div>
  );
}
