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
      question:
        "Can I return Items from any online store and any courier with ReturnPal",
      answer: `Yes! ReturnPal works with all online retailers and couriers. You can use our service to return anything you bought online`,
    },
    {
      question: "Do I have to package my item before returning it?",
      answer:
        "No, you don't have to worry about packaging. We will do it for you when we collect your item.",
    },
    {
      question: "Do I have to print my return label before returning it",
      answer:
        "No, you don't have to print anything. Just upload your return label or receipt to our app or website and we will print it for you.",
    },
    {
      question: "Can I return items on the weekends or holidays?",
      answer:
        "Yes, you can return items anytime you want. We collect returns 24/7, 7 days a week.",
    },
    {
      question: "How fast will my item be shipped back to the retailer",
      answer:
        "Usually, your item will be delivered to the post office within 12-24 hours of your return request",
    },
    {
      question: "What if I have more questions or need help?",
      answer:
        "Please contact us here. We are happy to assist you with any queries or issues.",
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
