import {
  Typography,
  Grid,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Questions = () => {
  const faqs = [
    {
      question: "Do I need to package my returns?",
      answer: `ReturnPal recommends returns be repackaged into their original packaging material provided upon purchase. 
     If this is not possible, our ReturnPal couriers will happily deliver your returns to our packing facility where items will be appropriately repackaged before being sent out for final returns.`,
    },
    {
      question: "How do I add a new question?",
      answer:
        "To add a new question go to app settings and press Manage Questions button.",
    },
    {
      question: "Can I insert pictures in my FAQ?",
      answer:
        "Yes! To add a picture follow these simple steps: Enter App Settings Click the Manage Questions button Click on the question you would like to attach a picture to  When editing your answer, click on the picture icon and then add an image from your library",
    },
    {
      question: "Do you collect returns on weekends?",
      answer:
        "We operate 7 days a week, on average, returns are picked up on the same day the return is originally ordered.",
    },
    {
      question: "Can I insert a video in my FAQ?",
      answer:
        "Yes! Users can add video from YouTube or Vimeo with ease: Enter App Settings Click the Manage Questions button Click on the question you would like to attach a video to When editing your answer, click on the video icon and then paste the YouTube or Vimeo video URL That's it! A thumbnail of your video will appear in answer text box.",
    },
    {
      question: "How long does shipping typically take?",
      answer:
        "Shipping time is entirely dependent on the terms listed on your return label, typically, the entire return process takes an additional 12 hours more then how long it would take to complete the return yourself.",
    },
    {
      question: "What if I’m returning multiple item to the same place?",
      answer:
        "ReturnPal offers discounted rates for same delivery location returns, as well as lowest price gurantees on items that have already been repackaged.",
    },
  ];
  return (
    <>
      <Grid
        container
        direction="column"
        // bgcolor="#f4f4f4"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h3"
          paddingTop="4rem"
          fontSize={"2rem"}
          paddingBottom="2rem"
          fontWeight="bold"
          textAlign={"center"}
        >
          <span style={{ fontWeight: "100" }}>OUR&nbsp;</span>
          <span style={{ fontWeight: "700" }}>FAQS</span>
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              background: "#ffffff",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
              // boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              // boxShadow: "none",
              width: "24rem",
              marginBottom: "1rem",
            }}
          >
            <AccordionSummary expandIcon={<AddIcon />}>
              <Typography fontSize="1rem" fontWeight="400" textAlign="left">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography textAlign="left" fontSize="1rem">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </>
  );
};

export default Questions;
