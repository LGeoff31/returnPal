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
      margin="10%"
      maxWidth="80%"
      justifyContent="center"
      alignItems={{ xs: "center", md: "flex-start", lg: "flex-start" }}
      textAlign={{ xs: "center", md: "left", lg: "left" }}
      spacing={2}
    >
      <Grid item xs={12} md={6} lg={6} order={{ xs: 1, md: 1 }}>
        <Image
          src={src}
          alt="Retailers"
          width={600}
          height={300}
          style={{ paddingRight: "5rem" }}
        />
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
          {description1}
          {/* We&apos;re all over the GTA, with a local facility in Toronto
            designed to ensure shipping labels are printed and the
            repackaging of items can meet same-day return needs. */}
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h6"
          fontSize="1.5rem"
          color="#01314B"
        >
          {description2}
          {/* Returning your online shopping purchases has never been easier.
            Unless you get the wrong size, in which case you&apos;ll be
            returning it so many times you&apos;ll know the shipping label
            by heart. */}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LayoutOne;
