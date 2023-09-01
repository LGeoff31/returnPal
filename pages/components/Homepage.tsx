import React, { useState } from "react";
import { Box, Stack, Typography, Button, Link, Grid } from "@mui/material";
import Image from "next/image";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useScrollTrigger } from "@mui/material";
import Layout from "./Layout";

const Homepage = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: hasAnimated ? 0 : 0,
  });
  if (trigger && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <>
      <Grid
        sx={{
          paddingLeft: { lg: "15rem", md: "10rem", sm: "7rem", xs: "3rem" },
          background: "linear-gradient(to bottom, lightblue, white)",
        }}
      >
        <Typography
          variant="h4"
          zIndex={2}
          sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
          paddingTop="10rem"
          fontWeight="100"
        >
          Return Your Package <br /> The{" "}
          <span style={{ fontWeight: "bold" }}> Easy Way</span>
        </Typography>
        <Stack
          direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
          marginTop="2rem"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#2594d9",
                borderRadius: 2, // Adjust the value as needed to get the desired oval shape
                padding: { lg: "0.5rem 3rem", xs: "0.5rem 3rem" }, // Customize the padding to fit the content
                fontSize: {
                  lg: "1.15rem",
                  md: "1rem",
                  sm: "0.8rem",
                  xs: "1.1rem",
                }, // Set the font size to your preference
                width: { lg: "290px", md: "280px", sm: "250px", xs: "280px" },
                marginRight: "2rem",
                marginBottom: { sm: "0rem", xs: "1rem" },
                fontWeight: "bold", // Adjust font weight as needed
                textTransform: "none", // Avoid uppercase transformation
                color: "primary", // Set the text color to contrast with the background
                "&:hover": {
                  background: "#005DFF", // Set a darker background color on hover
                },
              }}
              endIcon={<NearMeIcon />}
              variant="contained"
            >
              SCHEDULE NOW
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                // backgroundColor: "#00bfff",
                backgroundColor: "transparent",
                width: { lg: "290px", md: "280px", sm: "250px", xs: "280px" },
                borderRadius: 2, // Adjust the value as needed to get the desired oval shape
                padding: { lg: "0.5rem 3rem", xs: "0.5rem 3rem" },
                fontSize: {
                  lg: "1.15rem",
                  md: "1rem",
                  sm: "0.8rem",
                  xs: "1.1rem",
                },
                marginRight: "2rem",
                border: "2px solid black", // Add black border
                fontWeight: "bold", // Adjust font weight as needed
                color: "black", // Set the text color to contrast with the background
                "&:hover": {
                  background: "#005DFF", // Set a darker background color on hover
                },
              }}
            >
              HOW IT WORKS?
            </Button>
          </div>
        </Stack>
      </Grid>
    </>
  );
};

export default Homepage;
