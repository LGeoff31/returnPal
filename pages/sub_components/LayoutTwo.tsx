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
}: {
  description1: string;
  description2: string;
  src: string;
}) => {
  return (
    <Grid
      container
      direction={{ xs: "column", md: "row", lg: "row" }}
      marginLeft="10%"
      marginRight="10%"
      marginTop="5%"
      maxWidth="80%"
      justifyContent="center"
      alignItems={{ xs: "center", md: "flex-start", lg: "flex-start" }}
      textAlign={{ xs: "center", md: "left", lg: "left" }}
      spacing={2}
    >
      <Grid item xs={12} md={6} lg={6}>
        <Image src={src} alt="Retailers" width={450} height={300} />
      </Grid>

      <Grid item xs={12} md={6} lg={6} paddingLeft="1rem" paddingRight="1rem">
        <Typography
          fontWeight="150"
          variant="h6"
          fontSize="1.5rem"
          color="grey"
          marginBottom="2rem"
          paddingTop={{ md: "0rem", xs: "1rem" }}
        >
          {description1}
        </Typography>
        <Typography
          fontWeight="150"
          variant="h6"
          fontSize="1.5rem"
          color="grey"
        >
          {description2}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LayoutOne;
