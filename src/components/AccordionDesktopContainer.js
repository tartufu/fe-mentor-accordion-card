import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// import { ReactComponent as IllustrationWomanDesktop } from "../resources/illustration-woman-online-desktop.svg";

import IllustrationWomanDesktop from "../resources/illustration-woman-online-desktop.svg";

export default function AccordionDesktopContainer() {
  return (
    <Box
      sx={{
        width: "500px",
        backgroundColor: "white",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={6} sx={{ border: "1px solid red" }}>
          <div style={{ border: "1px solid green" }}>
            <img
              src={IllustrationWomanDesktop}
              alt="132"
              style={{ width: "100%", border: "1px solid green" }}
            />
          </div>
          {/* <IllustrationWomanDesktop
            style={{ transform: "scale(0.5)", border: "1px solid green" }}
          /> */}
        </Grid>
        <Grid item xs={6}>
          554
        </Grid>
      </Grid>
    </Box>
  );
}
