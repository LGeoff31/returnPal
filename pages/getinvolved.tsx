import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import Layout from "./components/Layout";
import Image from "next/image";
import Founder from "./sub_components/Founder";
import LayoutTwo from "./sub_components/LayoutTwo";

const GetInvolved = () => {
  return (
    <Layout>
      <Grid
        sx={{ background: "#f0f0f0" }}
        paddingLeft={{ sm: "2rem", md: "4rem" }}
      >
        <Typography gutterBottom fontSize="40px" paddingTop="10rem">
          <span style={{ color: "black", fontWeight: "100" }}>
            MISSION&nbsp;
          </span>
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #87CEEB, #1E90FF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            STATEMENT
          </span>
        </Typography>
        <Typography
          width={{ sm: "80%", md: "60%" }}
          color="grey"
          lineHeight="2"
        >
          Our mission at ReturnPal is to revolutionize the way returns are done
          by providing a hassle-free and convenient solution for online
          shoppers.
        </Typography>
        <br />
        <Typography
          width={{ sm: "80%", md: "60%" }}
          color="grey"
          lineHeight="2"
        >
          We aim to take the stress out of the return process by handling the
          entire repackaging and delivery process, allowing customers to sit
          back and relax.
        </Typography>
      </Grid>
      <Grid
        style={{ background: "#e0f9ff" }}
        paddingLeft="4rem"
        paddingTop="2rem"
        paddingBottom="4rem"
      >
        <Typography gutterBottom fontSize="40px">
          <span style={{ color: "black", fontWeight: "100" }}>
            SOCIAL&nbsp;
          </span>
          <span
            style={{
              fontWeight: "500",
            }}
          >
            IMPACT
          </span>
        </Typography>
        <Typography color="black" maxWidth="70%">
          ReturnPal focuses on sustainability and community empowerment, that is
          why we’re minimizing waste by partnering with companies and agencies
          like Play Forever to redistribute unsold or unused returns. The
          returns are sorted, refurbished if needed, and redistributed to
          various communities in need.
        </Typography>
        <Button
          variant="contained"
          sx={{ background: "blue", marginTop: "2rem" }}
        >
          Learn More
        </Button>
      </Grid>
      <LayoutTwo
        src="/images/returnpal-fedex.webp"
        description1="As a convenient one-stop service, We're bringing couriers
          to your location, repackaging, and delivering your return to a
          predefined location."
        description2="Our goal is to save you from having to repackage items, print
          shipping labels, and take that long drive to the not so local
          post office."
        imagePosition={true}
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
        imagePosition={false}
      />
      <Grid
        container
        style={{ background: "#e0f9ff" }}
        paddingLeft="2rem"
        paddingTop="2rem"
        paddingBottom="2rem"
        width="88%"
        margin="0 auto"
        flexDirection={"row"}
        alignItems="center" // Center content vertically
        justifyContent="center" // Center content horizontally
      >
        <Typography gutterBottom fontSize="40px">
          <span style={{ color: "black", fontWeight: "100" }}>
            SCHEDULE YOUR RETURN&nbsp;
          </span>
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #87CEEB, #1E90FF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            NOW
          </span>
        </Typography>
        <Button
          variant="contained"
          sx={{ background: "blue", marginLeft: "2rem" }}
        >
          GET STARTED
        </Button>
      </Grid>
      <Grid sx={{ background: "black" }}>
        <Typography
          variant="h2"
          textAlign={"center"}
          paddingTop="7rem"
          paddingBottom="6rem"
          color="white"
          fontWeight="500"
        >
          Our Founders
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-evenly"}
          alignItems="center"
        >
          <Founder
            src="/images/returnpal-hasan.png"
            name="Hasan-Ali Abidi"
            description="CEO of Play Forever"
          />
          <Divider orientation="vertical" flexItem color="white" />
          <Founder
            src="/images/returnpal-mo.png"
            name="Mohammed Al-Salem"
            description="Founder of Play Forever"
          />
        </Stack>
      </Grid>
    </Layout>
  );
};

export default GetInvolved;
