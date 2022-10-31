import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqSection({ faqData, faqIsExpandedHandler }) {
  return (
    <div>
      <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
        FAQ
      </Typography>

      {faqData.map((faq) => {
        const isBold = faq.isExpanded && "bold";

        console.log("isBold", isBold);
        return (
          <div key={faq.id}>
            <Accordion
              disableGutters
              sx={{
                boxShadow: "none",
                borderBottom: "1px solid hsl(240, 5%, 91%)",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "hsl(14, 88%, 65%)" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  padding: "0 1rem 0 0",
                  "&:hover": { color: "hsl(14, 88%, 65%)" },
                }}
                onClick={() => faqIsExpandedHandler(faq.id)}
              >
                <Typography
                  sx={{
                    color: "hsl(237, 12%, 33%)",
                    fontWeight: faq.isExpanded && "bold",
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0" }}>
                <Typography
                  sx={{
                    padding: "0 3rem 0.5rem 0",
                    color: "hsl(240, 6%, 50%)",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}
