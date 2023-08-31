import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const InfoCard = ({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: string;
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        paddingLeft: "2rem",
        boxShadow: "0px 10px 6px rgba(0, 0, 0, 0.1)",
        // display: "flex",
        // flexDirection: "column",
        width: "300px",
        margin: "2rem",
      }}
    >
      <Box
        sx={{
          width: "40px",
          height: "40px",
          backgroundColor: "#e0f3ff",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "black",
        }}
      >
        {number}
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "500",
          marginBottom: "0.5rem",
          color: "black",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "black",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default InfoCard;
