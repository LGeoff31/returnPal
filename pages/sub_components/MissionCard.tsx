import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";

const MissionCard = ({
  description,
  src,
}: {
  description: string;
  src: string;
}) => {
  return (
    <Grid container alignItems="center" justifyContent="center" direction="row">
      <Typography
        variant="body1"
        fontSize={{ xs: "1rem", md: "1.5rem" }}
        marginTop="2.5%"
        marginBottom="5%"
        textAlign={{ xs: "center", sm: "left" }}
        width="50%"
      >
        {description}
      </Typography>
      <Image
        src={src}
        width={300}
        height={300}
        alt="Picture of the author"
        style={{ opacity: 1, paddingTop: "4%", paddingBottom: "1.5rem" }}
      />
    </Grid>
  );
};

export default MissionCard;
