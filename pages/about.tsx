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
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="image-wrapper">
          <img
            src="https://static.wixstatic.com/media/nsplsh_71386b525f696536576e49~mv2.jpg/v1/fill/w_1960,h_1166,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/nsplsh_71386b525f696536576e49~mv2.jpg"
            alt="Image by Claudio Schwarz"
            width="100%"
          />
        </div>
        <Grid
          color={"white"}
          sx={{
            position: "absolute",
            top: "15%",
            zIndex: 2,
          }}
        >
          <Grid container alignItems="center" justifyContent="center">
            <Typography variant="h2">
              <span style={{ fontWeight: "bold" }}>Our </span>
              <span style={{ fontWeight: "bold", color: "#279ce6" }}>
                Mission
              </span>
            </Typography>
          </Grid>
          <MissionCard
            description="From the comfort of your home, answer a few quick questions from us so that we can get to know your package a little more."
            src="/images/returnpal-holding-box.png"
          />
          <MissionCard
            description="With the click of a button, ReturnPal automates the time-consuming
            process of returns. That way, you can get back to the important
            things in life, like deciding which snacks to get at the grocery
            store."
            src="/images/returnpal-car.png"
          />
          <MissionCard
            description="With the click of a button, ReturnPal automates the time-consuming
            process of returns. That way, you can get back to the important
            things in life, like deciding which snacks to get at the grocery
            store."
            src="/images/returnpal-getting-box.jpeg"
          />
        </Grid>
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
