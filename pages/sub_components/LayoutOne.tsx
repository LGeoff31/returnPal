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
  imagePosition,
  src,
  buttonDescription,
}: {
  description1: string;
  description2: string;
  description3: string;
  imagePosition: boolean;
  src: string;
  buttonDescription: string;
}) => {
  return (
    <Grid
      container
      alignItems="center"
      paddingTop="3rem"
      justifyContent={"center"}
      // marginLeft="10%"
      direction={{ sm: "column", md: "row" }}
    >
      {imagePosition ? (
        <Image
          src={src}
          alt="Retailers"
          width={600}
          height={300}
          // style={{ paddingRight: "5rem" }}
        />
      ) : null}
      <Stack
        direction="column"
        paddingLeft={{ md: "5rem" }}
        textAlign={{ xs: "center", md: "start" }}
      >
        <Typography variant="h2">
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
            padding: "5px",
            width: "40%",
            fontSize: "15px",
            margin: { xs: "0 auto", md: "0" },
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
      {imagePosition ? null : (
        <Image
          src={src}
          alt="Retailers"
          width={600}
          height={300}
          // style={{ paddingRight: "5rem" }}
        />
      )}
    </Grid>
  );
};

export default LayoutOne;
