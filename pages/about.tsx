import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import Layout from "./components/Layout";
import Image from "next/image";
import LayoutOne from "./sub_components/LayoutOne";
import QuoteBox from "./sub_components/QuoteBox";
import LayoutTwo from "./sub_components/LayoutTwo";
import Founder from "./sub_components/Founder";

const About = () => {
  return (
    <Layout>
      <Stack direction={{ md: "row", sm: "column" }} paddingTop="8rem">
        <Box
          textAlign={{ md: "start", sm: "center", xs: "center" }}
          paddingLeft={{ lg: "10rem", md: "5rem", sm: "0rem" }}
        >
          <Typography fontSize="40px">
            <span style={{ color: "black", fontWeight: "150" }}>
              Mission&nbsp;
            </span>
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #87CEEB, #1E90FF)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "600",
              }}
            >
              Statement
            </span>
          </Typography>
          <Typography
            // width={{ md: "70%", sm: "80%", xs: "80%" }}
            margin={{ md: "0", sm: "0 auto", xs: "0 auto" }}
            color="grey"
            paddingTop="1rem"
            paddingRight="0rem"
            marginRight="0rem"
          >
            Our mission at ReturnPal is to revolutionize the way returns are
            <br />
            done by providing a hassle-free and convenient solution for online
            shoppers.
            {/* <br />
            <br />
            We aim to take the stress out of the return process by handling the
            entire repackaging and delivery process, allowing customers to sit
            back and relax. */}
          </Typography>
        </Box>
        <img
          src="/images/loading.png"
          width="300px"
          style={{
            margin: "0 auto",
            // marginRight: "5rem",
          }}
        />
      </Stack>
      <Stack
        direction={{ md: "row", xs: "column" }}
        paddingLeft={{ lg: "10rem", md: "5rem", sm: "0rem" }}
        paddingTop="3rem"
        sx={{ background: "#e8f7ff" }}
        textAlign={{ md: "start", xs: "center" }}
        gap={{ lg: "200px", md: "0px" }}
        alignItems={{ sm: "center" }}
        paddingBottom={{ md: "4rem", xs: "4rem" }}
      >
        <Grid
          container
          direction="column"
          width={{ lg: "700px", md: "750px", sm: "650px" }}
        >
          <Typography variant="h2" fontSize={{ lg: "60px", md: "50px" }}>
            <span>Social&nbsp;</span>
            <span style={{ fontWeight: "600" }}>Impact</span>
          </Typography>

          <Typography
            marginTop={{ md: "1rem", sm: "0rem" }}
            variant="h6"
            fontSize={"1.25rem"}
            padding={{ md: "0rem", xs: "2rem" }}
            paddingTop="3rem"
            marginBottom={{ md: "2rem", xs: "1rem" }}
            color="#474747"
            fontWeight="300"
          >
            ReturnPal focuses on sustainability and community empowerment, that
            is why we’re minimizing waste by partnering with companies and
            agencies like Play Forever to redistribute unsold or unused returns.
            The returns are sorted, refurbished if needed, and redistributed to
            various communities in need.
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "12rem",
              background: "#128be0",
              borderRadius: "10px",
              fontWeight: "600",
              padding: "0.5rem",
              margin: { md: "0", sm: "0 auto", xs: "0 auto" },
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Stack>
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
        paddingTop="3rem"
        marginTop="10rem"
        sx={{
          background: "#e8f7ff",
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          // justifyContent: "space-between",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        width="80%"
        // maxWidth="800px"
        marginX="auto"
      >
        <Typography
          variant="h2"
          fontSize={{ lg: "60px", md: "50px", sm: "40px", xs: "30px" }}
          textAlign={{ md: "-moz-initial", xs: "center" }}
        >
          <span>Schedule Your Return&nbsp;</span>
          <span
            style={{
              fontWeight: "600",
              backgroundImage: "linear-gradient(to right, #87CEEB, #1E90FF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Now
          </span>
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "12rem",
            background: "#128be0",
            borderRadius: "10px",
            fontWeight: "600",
            marginLeft: { md: "4rem", xs: "0rem" },
            padding: "0.5rem",
            marginTop: { md: "0rem", xs: "2rem" },
          }}
        >
          Get started
        </Button>
      </Box>
      <Grid sx={{ background: "white" }}>
        <Typography
          variant="h2"
          paddingTop="7rem"
          paddingBottom="1rem"
          color="black"
          fontWeight="500"
          textAlign={"center"}
        >
          <span style={{ fontWeight: "100" }}>Our&nbsp;</span>
          <span style={{ fontWeight: "600", color: "#1b8af2" }}>Founders</span>
        </Typography>
        <Grid container direction="column">
          <Founder
            src="/images/returnpals-hasan.png"
            name="Hasan-Ali Abidi"
            role="CEO of Returnpal"
            description="
            
Our service allows everyday shoppers to return items with just a click of a button, all without leaving home. We also integrate seamlessly with existing business operations, making it easier for companies to offer hassle-free returns while maintaining customer satisfaction. What sets ReturnPal apart is our collaboration with brands to repurpose unsold or returned goods. We achieve this by partnering with various nonprofits and charities."
          />
          <Divider orientation="horizontal" color="black" />
          <Founder
            src="/images/returnpal-moe.png"
            name="Mohammed Al-Salem"
            role="CEO of Returnpal"
            description="
            
            Choosing ReturnPal is a win-win for everyone involved. It simplifies the return process, promotes a more sustainable way of doing business, and ultimately improves the quality of life for our customers. Our focus on simplifying returns, fostering sustainability, and improving quality of life has resonated with both consumers and businesses, making a real difference in the way online shopping returns are handled."
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
