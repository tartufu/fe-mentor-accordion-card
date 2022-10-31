import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import IllustrationSection from "./IllustrationSection";
import FaqSection from "./FaqSection";
import faqData from "./data/faqData";

export default function AccordionDesktopContainer() {
  const [faqArr, setFaqArr] = useState(faqData);

  const faqIsExpandedHandler = (id) => {
    const faqArrCopy = [...faqArr];
    const clickedFaqId = faqArrCopy.findIndex((faq) => faq.id === id);
    faqArrCopy[clickedFaqId].isExpanded = !faqArrCopy[clickedFaqId].isExpanded;

    setFaqArr(() => faqArrCopy);
  };

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
          <FaqSection
            faqData={faqArr}
            faqIsExpandedHandler={faqIsExpandedHandler}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
