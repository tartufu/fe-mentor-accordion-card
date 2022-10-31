import React from "react";

import IllustrationWomanDesktop from "../resources/illustration-woman-online-desktop.svg";
import BgPatternDesktop from "../resources/bg-pattern-desktop.svg";
import IllustrationBox from "../resources/illustration-box-desktop.svg";

// https://www.css3.info/preview/multiple-backgrounds/
// https://techglimpse.com/overlap-three-images-using-css/

export default function IllustrationSection() {
  return (
    <div style={{ border: "1px solid green", position: "relative" }}>
      <img
        src={BgPatternDesktop}
        alt="BgPatternDesktop   "
        style={{
          width: "100%",
          border: "1px solid green",
          position: "absolute",
        }}
      />
      <img
        src={IllustrationWomanDesktop}
        alt="IllustrationWomanDesktop"
        style={{
          width: "100%",
          border: "1px solid green",
          position: "absolute",
          //   right: "200px",
        }}
      />
      <img
        src={IllustrationBox}
        alt="IllustrationBox"
        style={{
          width: "40%",
          border: "1px solid green",
          position: "relative",
          top: "150px",
          right: "50px",
        }}
      />
    </div>
  );
}
