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
import MissionCard from "./sub_components/MissionCard";

const About = () => {
  return (
    <Layout>
      <Grid
        container
        alignItems="center"
        // justifyContent="center"
        paddingTop="12rem"
        marginLeft="10%"
        direction={{ sm: "column", md: "row" }}
      >
        <Typography variant="h2" paddingRight="5rem">
          <span style={{ fontWeight: "bold" }}>
            No Boxes. <br /> No Lines. <br />
          </span>
          <span style={{ fontWeight: "bold", color: "#279ce6" }}>
            No Regrets. <br /> 100% Satisfaction
          </span>
        </Typography>

        <Image
          src={"/images/returnpal-waiting.jpeg"}
          alt="Retailers"
          width={600}
          height={300}
        />
      </Grid>
      <Button
        sx={{
          marginLeft: "10%",
          borderRadius: "50px", // Adjust the value as needed to get the desired oval shape
          padding: "0.5rem 36px", // Customize the padding to fit the content
          fontSize: "1.15rem", // Set the font size to your preference
          fontWeight: "bold", // Adjust font weight as needed
          textTransform: "none", // Avoid uppercase transformation
          background: "red", // Set the desired background color
          marginBottom: "2rem",
          color: "red", // Set the text color to contrast with the background
          "&:hover": {
            background: "#005DFF", // Set a darker background color on hover
          },
          transition: "transform 0.75s ease-in-out",
        }}
      >
        Learn More
      </Button>
      <Typography marginLeft="10%">
        We will pick up your item, box it, and get it to the post office safely
      </Typography>

      <Grid
        container
        alignItems="center"
        paddingTop="6rem"
        marginLeft="10%"
        direction={{ sm: "column", md: "row" }}
      >
        <Image
          src="/images/returnpal-retailers.png"
          alt="Retailers"
          width={600}
          height={300}
          style={{ paddingRight: "5rem" }}
        />
        <Stack direction="column">
          <Typography variant="h2" paddingRight="2rem">
            <span style={{ fontWeight: "bold" }}>
              Any retail store <br /> you purchused <br /> from{" "}
            </span>
            <span style={{ fontWeight: "bold", color: "#279ce6" }}>
              we return
            </span>
          </Typography>
          <Button
            sx={{
              color: "primary",
              variant: "contained",
              textTransform: "none",
              borderRadius: "2rem",
              fontWeight: "bold",
              backgroundColor: "#00bfff",
              paddingTop: "1rem",
              width: "30%",
              fontSize: "15px",

              "&:hover": {
                backgroundColor: "#0099ff", // Set the background color on hover
              },
            }}
            className="text-[#0099ff] hover:text-white"
          >
            Get Started &nbsp; <NearMeIcon />
          </Button>
        </Stack>
      </Grid>

      <Grid container>
        <Stack
          direction={{ xs: "column", md: "row", lg: "row" }}
          marginLeft="10%"
          marginTop="5%"
          maxWidth="80%"
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start", lg: "flex-start" }}
          textAlign={{ xs: "center", md: "left", lg: "left" }}
          spacing={2}
        >
          <Grid item xs={12} md={6} lg={6} marginRight={{ xs: 0, md: "5%" }}>
            <Typography
              fontWeight="bold"
              variant="h6"
              fontSize="1.5rem"
              color="#01314B"
              marginBottom="2rem"
            >
              As a convenient one-stop service, We&apos;re bringing couriers to
              your location, repackaging, and delivering your return to a
              predefined location.
            </Typography>
            <Typography
              fontWeight="bold"
              variant="h6"
              fontSize="1.5rem"
              color="#01314B"
            >
              Our goal is to save you from having to repackage items, print
              shipping labels, and take that long drive to the not so local post
              office.
            </Typography>
          </Grid>
          <picture>
            <img
              src="https://static.wixstatic.com/media/nsplsh_dd2487edc88745488809acd16dde4375~mv2.jpg/v1/fill/w_1090,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Bannon%20Morrissy.jpg"
              alt="Image by Bannon Morrissy"
              width="545"
              height="364"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </picture>
        </Stack>
      </Grid>

      <Grid container>
        <Stack
          direction={{ xs: "column", md: "row", lg: "row" }}
          margin="10%"
          maxWidth="80%"
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start", lg: "flex-start" }}
          textAlign={{ xs: "center", md: "left", lg: "left" }}
          spacing={2}
        >
          <Grid item xs={12} md={6} lg={6} order={{ xs: 1, md: 1 }}>
            <picture>
              <img
                src="https://static.wixstatic.com/media/nsplsh_bc2f7d1dcade40e18eb4a24f959ae5e4~mv2.jpg/v1/fill/w_1092,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Marcin%20Skalij.jpg"
                alt="Image by Marcin Skalij"
                width="546"
                height="364"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </picture>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            order={{ xs: 2, md: 2 }}
            paddingLeft={{ xs: "0", md: "5%" }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              fontSize="1.5rem"
              color="#01314B"
              marginBottom="2rem"
            >
              We&apos;re all over the GTA, with a local facility in Toronto
              designed to ensure shipping labels are printed and the repackaging
              of items can meet same-day return needs.
            </Typography>
            <Typography
              fontWeight="bold"
              variant="h6"
              fontSize="1.5rem"
              color="#01314B"
            >
              Returning your online shopping purchases has never been easier.
              Unless you get the wrong size, in which case you&apos;ll be
              returning it so many times you&apos;ll know the shipping label by
              heart.
            </Typography>
          </Grid>
        </Stack>
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
