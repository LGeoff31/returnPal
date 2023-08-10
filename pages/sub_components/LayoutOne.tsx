import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";

const LayoutOne = ({
  description1,
  description2,
  description3,

  src,
  buttonDescription,
}: {
  description1: string;
  description2: string;
  description3: string;

  src: string;
  buttonDescription: string;
}) => {
  return (
    <Grid
      container
      alignItems="center"
      paddingTop="6rem"
      marginLeft="10%"
      direction={{ sm: "column", md: "row" }}
    >
      <Image
        src={src}
        alt="Retailers"
        width={600}
        height={300}
        style={{ paddingRight: "5rem" }}
      />
      <Stack direction="column">
        <Typography variant="h2" paddingRight="2rem">
          <span style={{ fontWeight: "bold" }}>
            {description1} <br /> {description2} <br />
          </span>
          <span style={{ fontWeight: "bold", color: "#279ce6" }}>
            {description3}
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
          {buttonDescription}
          {/* Get Started &nbsp; <NearMeIcon /> */}
        </Button>
      </Stack>
    </Grid>
  );
};

export default LayoutOne;
