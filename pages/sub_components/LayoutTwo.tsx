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
  src,
  imagePosition,
}: {
  description1: string;
  description2: string;
  src: string;
  imagePosition: boolean;
}) => {
  return (
    <Grid
      container
      direction={{ xs: "column", md: "row", lg: "row" }}
      margin="10%"
      maxWidth="80%"
      justifyContent="center"
      alignItems={{ xs: "center", md: "flex-start", lg: "flex-start" }}
      textAlign={{ xs: "center", md: "left", lg: "left" }}
      spacing={2}
    >
      {imagePosition && (
        <Grid item xs={12} md={6} lg={6}>
          <Image src={src} alt="Retailers" width={600} height={300} />
        </Grid>
      )}

      <Grid item xs={12} md={6} lg={6} paddingLeft={{ xs: "0", md: "5%" }}>
        <Typography
          fontWeight="bold"
          variant="h6"
          fontSize="1.5rem"
          color="#01314B"
          marginBottom="2rem"
        >
          {description1}
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h6"
          fontSize="1.5rem"
          color="#01314B"
        >
          {description2}

        </Typography>
      </Grid>
      {!imagePosition && (
        <Grid item xs={12} md={6} lg={6}>
          <Image src={src} alt="Retailers" width={600} height={300} />
        </Grid>
      )}
   
    </Grid>
  );
};

export default LayoutOne;
