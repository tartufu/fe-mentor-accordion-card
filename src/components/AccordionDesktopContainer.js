import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import IllustrationSection from "./IllustrationSection";
import FaqSection from "./FaqSection";
import faqData from "./data/faqData";

export default function AccordionDesktopContainer() {
  console.log("TEST", faqData);
  return (
    <Box
      sx={{
        width: "1000px",
        backgroundColor: "white",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={6} sx={{ border: "1px solid red" }}>
          <IllustrationSection />
        </Grid>
        <Grid item xs={6} sx={{ padding: "1rem" }}>
          <FaqSection faqData={faqData} />
        </Grid>
      </Grid>
    </Box>
  );
}
