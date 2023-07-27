import React from "react";
import { Box, Stack, Typography, Button, Link, Grid } from "@mui/material";
import Image from "next/image";
import NearMeIcon from "@mui/icons-material/NearMe";

const Homepage = () => {
  return (
    <>
      <Grid
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="video-wrapper">
          <video autoPlay muted loop playsInline className="video-element">
            <source
              src="https://video.wixstatic.com/video/11062b_b9abbd9e13a9459db58a6baa340377e7/1080p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <Grid
          color={"white"}
          sx={{
            position: "absolute",
            bottom: "40%",
            left: "10%",
            zIndex: 2,
          }}
        >
          <Typography
            position="relative"
            variant="h2"
            fontWeight="bold"
            zIndex={2}
            sx={{ fontSize: { xs: "2rem", md: "4rem" } }}
          >
            Return Your Package <br /> The Easy Way.
          </Typography>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            display: "flex",
            alignItems: "center",
            background: "white",
            zIndex: 3,
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 30,
          }}
        >
          <picture>
            <img
              src="https://static.wixstatic.com/media/bf8e2b_68051fb7563f42079a1cd10f2b4b4b22~mv2.png/v1/fill/w_88,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/returnpalfinal%20logos_Transparent_Full%20Bl.png"
              alt="ReturnPal Icon Logo"
              width="88"
              height="98"
            />
          </picture>
          <Link href="get-started">
            <Button
              sx={{
                background: "#00bfff",
                borderRadius: 50, // Adjust the value as needed to get the desired oval shape
                padding: "0.5rem 36px", // Customize the padding to fit the content
                fontSize: "1.15rem", // Set the font size to your preference
                fontWeight: "bold", // Adjust font weight as needed
                textTransform: "none", // Avoid uppercase transformation
                color: "primary", // Set the text color to contrast with the background
                "&:hover": {
                  background: "#005DFF", // Set a darker background color on hover
                },
              }}
              variant="contained"
              endIcon={<NearMeIcon />}
            >
              Return
            </Button>
          </Link>
        </Box>
      </Grid>
      <Stack
        direction={{ sm: "column", md: "row" }}
        alignItems="center"
        textAlign={"center"}
        sx={{
          width: "100%", // Make the Stack take the full width of its container
          margin: "0 auto", // Center the Stack itself
          padding: { xs: "0.5rem", sm: "1rem", md: "2rem" }, // Add some padding for better spacing
          marginTop: "2rem",
          marginLeft: { md: "10%" },
        }}
      >
        <picture>
          <img
            src="https://static.wixstatic.com/media/cfb1f8f03ec948f2a3eb4e46890195a3.jpg/v1/fill/w_1022,h_682,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Box%20Delivery.jpg"
            alt="A girl receiving a box"
            width="400px"
            height="auto"
          />
        </picture>

        <Stack direction="column">
          <Typography
            variant="h4"
            fontWeight="bold"
            margin="1rem"
            marginTop={"3rem"}
            fontSize={"2.5rem"}
            color="#01314B"
            sx={{
              paddingLeft: { md: "4rem" },
              alignSelf: "center",
              fontSize: { xs: "30px", md: "40px" },
            }}
          >
            Returning has never <br /> been this hassle-free
          </Typography>
          <Link href="/get-started" underline="none">
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
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default Homepage;
