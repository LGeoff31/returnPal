import {
  Typography,
  Grid,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

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
      question: "What if I’m returning more than one item to the same place?",
      answer:
        "ReturnPal offers discounted rates for same delivery location returns, as well as lowest price gurantees on items that have already been repackaged.",
    },
  ];
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        marginLeft="10%"
        marginTop="10%"
        maxWidth="80%"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="h3" fontWeight={"bold"}>
            Drop Offs Made Easy
          </Typography>
          <Typography
            variant="h6"
            fontSize={"1.5rem"}
            paddingTop="2rem"
            paddingBottom="2rem"
          >
            Your scheduled pickup is retrieved by us right from your door and on
            its way to our assigned courier
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6} justifyContent="center" spacing={2}>
          <Box
            sx={{
              boxShadow: "0 10px 20px rgba(4, 117, 208, 0.8)", // Increase the shadow intensity
              borderRadius: "12px", // Add larger border radius for a more rounded appearance
              display: "inline-block",
              p: 2, // Add more padding to create space between the image and the border
              margin: "10px",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/bf8e2b_45cf2bb5c6c94e6d93f32a2a65d26fb1~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bf8e2b_45cf2bb5c6c94e6d93f32a2a65d26fb1~mv2.png"
              alt="purolator courier logo"
              width="102"
              height="102"
            />
          </Box>
          <Box
            sx={{
              boxShadow: "0 10px 20px rgba(244, 114, 0, 0.8)", // Increase the shadow intensity
              borderRadius: "12px", // Add larger border radius for a more rounded appearance
              display: "inline-block",
              p: 2, // Add more padding to create space between the image and the border
              margin: "10px",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/bf8e2b_057e9b83e897486ba813c80ac897b5d7~mv2.png/v1/fill/w_344,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FedEx-Logo.png"
              alt="FedEx Logo"
              width="172"
              height="84"
            />
          </Box>
          <Box
            sx={{
              boxShadow: "0 10px 20px rgba(244, 114, 0, 0.8)", // Increase the shadow intensity
              borderRadius: "12px", // Add larger border radius for a more rounded appearance
              display: "inline-block",
              p: 2, // Add more padding to create space between the image and the border
              margin: "10px",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/bf8e2b_4be81e81690c434488e498fa103d75a7~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UPS-Logo_edited.png"
              alt="ups logo"
              width="83"
              height="83"
            />
          </Box>
          <Box
            sx={{
              boxShadow: "0 10px 20px rgba(4, 117, 208, 0.8)", // Increase the shadow intensity
              borderRadius: "12px", // Add larger border radius for a more rounded appearance
              display: "inline-block",
              p: 2, // Add more padding to create space between the image and the border
              margin: "10px",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/bf8e2b_0c9381a5706043c6b388f94acbb31a69~mv2.png/v1/fill/w_344,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DHL-Emblem.png"
              alt="DHL Logo"
              width="172"
              height="84"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="column" marginLeft="10%" maxWidth="80%">
        <Typography
          color={"blue"}
          variant="h3"
          paddingTop="15rem"
          fontSize={"2rem"}
          paddingBottom="1rem"
        >
          Frequently Asked Questions
        </Typography>
        <Grid item xs={12} md={6}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                borderRadius: "4px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontSize="1.25rem" fontWeight="bold">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "16px" }}>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Questions;
