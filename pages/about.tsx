import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import Layout from "./components/Layout";
import Image from "next/image";
import LayoutOne from "./sub_components/LayoutOne";
import QuoteBox from "./sub_components/QuoteBox";
import LayoutTwo from "./sub_components/LayoutTwo";

const About = () => {
  return (
    <Layout>
      <Grid paddingTop="10rem">
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          <span style={{ color: "#071048" }}>How</span>
          <span style={{ color: "#03a9fc" }}>&nbsp;ReturnPal</span>
          <span style={{ color: "#071048" }}>&nbsp;Started</span>
        </Typography>
        <Typography
          variant="body2"
          maxWidth="40%"
          textAlign="center"
          margin="0 auto"
          color="#798189"
          fontSize="1rem"
          sx={{ marginTop: "2rem", lineHeight: "25.6px" }}
          marginBottom="1rem"
        >
          Returnmates was founded by two friends who were frustrated with their
          online shopping experiences due to the hassle of online returns. One
          day, after a 45 minute trip to the post office, they wondered "why
          don’t we just pick up everyone’s returns?". The light bulb went off.
          They called their friends -- they all had the same problem. 48 hours
          later, Returnmates was born.
        </Typography>
        <Image
          src={"/images/returnpal-car.png"}
          alt="Retailers"
          width={600}
          height={300}
          style={{
            margin: "0 auto",
            marginBottom: "1rem",
          }}
        />
        <QuoteBox />
        <LayoutOne
          description1="No Boxes."
          description2="No Lines."
          description3="No Regrets."
          src="/images/returnpal-line.jpeg"
          buttonDescription="Learn More"
        />
        <LayoutOne
          description1="Any Retail Store"
          description2="you purchased"
          description3="from we return"
          src="/images/returnpal-retailers.png"
          buttonDescription="Get Started"
        />
        <LayoutTwo
          src="/images/returnpal-fedex.webp"
          description1="As a convenient one-stop service, We're bringing couriers
          to your location, repackaging, and delivering your return to a
          predefined location."
          description2="Our goal is to save you from having to repackage items, print
          shipping labels, and take that long drive to the not so local
          post office."
        />
        <LayoutTwo
          src="/images/returnpal-gta.webp"
          description1="We are all over the GTA, with a local facility in Toronto
                designed to ensure shipping labels are printed and the
                repackaging of items can meet same-day return needs."
          description2="Returning your online shopping purchases has never been easier.
                Unless you get the wrong size, in which case you will be
                returning it so many times you'll know the shipping label
                by heart."
        />
        <Box
          sx={{
            backgroundColor: "#def8ff", // Light blue background color
            padding: "2rem",
            textAlign: "center",
            width: "100%",
            mx: "auto", // Center the box horizontally
            marginBottom: "5%",
          }}
        >
          <Typography
            marginBottom="2rem"
            variant="h5"
            fontWeight="bold"
            color="#01314B"
          >
            Learn more about our process step by step.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: "bold",
              borderRadius: "50px",
              background: "#00bfff",
              padding: { md: "1.5%", xs: "3%" },
            }}
          >
            Our Process &nbsp; {<NearMeIcon />}
          </Button>
        </Box>
      </Grid>
    </Layout>
  );
};

export default About;
