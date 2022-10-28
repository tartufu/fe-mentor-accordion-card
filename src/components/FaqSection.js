import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqSection({ faqData }) {
  return (
    <div>
      <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
        FAQ
      </Typography>

      {faqData.map((faq) => {
        return (
          <Accordion disableGutters sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography paragraph>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography> {faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
