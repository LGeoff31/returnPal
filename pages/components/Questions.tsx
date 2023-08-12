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
        marginBottom="3rem"
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          <Typography variant="h3" fontWeight={"bold"} color="#01314B">
            Drop Offs Made Easy
          </Typography>
          <Typography
            variant="h6"
            fontSize={"1.5rem"}
            paddingTop="2rem"
            paddingBottom="2rem"
            color="#01314B"
          >
            Your scheduled pickup is retrieved by us right from your door and on
            its way to our assigned courier
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          justifyContent="center"
          spacing={2}
          marginLeft="2rem"
        >
          <Box
            sx={{
              boxShadow: "0 10px 20px rgba(4, 117, 208, 0.8)", // Increase the shadow intensity
              borderRadius: "12px", // Add larger border radius for a more rounded appearance
              display: "inline-block",
              p: 2, // Add more padding to create space between the image and the border
              margin: "10px",
            }}
          >
            <picture>
              <img
                src="https://static.wixstatic.com/media/bf8e2b_45cf2bb5c6c94e6d93f32a2a65d26fb1~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bf8e2b_45cf2bb5c6c94e6d93f32a2a65d26fb1~mv2.png"
                alt="purolator courier logo"
                width="102"
                height="102"
              />
            </picture>
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
            <picture>
              <img
                src="https://static.wixstatic.com/media/bf8e2b_057e9b83e897486ba813c80ac897b5d7~mv2.png/v1/fill/w_344,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FedEx-Logo.png"
                alt="FedEx Logo"
                width="172"
                height="84"
              />
            </picture>
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
            <picture>
              <img
                src="https://static.wixstatic.com/media/bf8e2b_4be81e81690c434488e498fa103d75a7~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UPS-Logo_edited.png"
                alt="ups logo"
                width="83"
                height="83"
              />
            </picture>
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
            <picture>
              <img
                src="https://static.wixstatic.com/media/bf8e2b_0c9381a5706043c6b388f94acbb31a69~mv2.png/v1/fill/w_344,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DHL-Emblem.png"
                alt="DHL Logo"
                width="172"
                height="84"
              />
            </picture>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        paddingLeft="15%"
        paddingRight="15%"
        sx={{ background: "#ebebeb" }}
      >
        <Typography
          color={"#01314B"}
          variant="h3"
          paddingTop="2rem"
          fontSize={"2rem"}
          paddingBottom="1rem"
          fontWeight="bold"
        >
          FAQ's
        </Typography>
        <Grid item xs={12} md={6}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                background: "#ebebeb",
                border: "none",
                boxShadow: "none", // Remove box shadow
                "&.MuiAccordion-root:before": {
                  display: "none", // Hide the border using pseudo-element
                },
              }}
            >
              <AccordionSummary
                sx={{ padding: 0 }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography
                  fontSize="1.25rem"
                  fontWeight="bold"
                  color="#6e6d6b"
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <Typography color="#01314B">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Button
          sx={{
            borderRadius: "50px", // Adjust the value as needed to get the desired oval shape
            padding: "0.5rem 36px", // Customize the padding to fit the content
            fontSize: "1.15rem", // Set the font size to your preference
            fontWeight: "bold", // Adjust font weight as needed
            textTransform: "none", // Avoid uppercase transformation
            background: "#00bfff", // Set the desired background color
            marginBottom: "2rem",
            color: "#fff", // Set the text color to contrast with the background
            "&:hover": {
              background: "#005DFF", // Set a darker background color on hover
            },
          }}
        >
          Learn More
        </Button>
      </Grid>
    </>
  );
};

export default Questions;
