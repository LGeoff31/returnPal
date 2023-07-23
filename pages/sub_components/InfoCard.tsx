import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const InfoCard = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) => {
  return (
    <Box
      position="relative"
      maxWidth="100%"
      height="auto"
      margin="2rem"
      borderRadius="12px"
      overflow="hidden"
    >
      <img
        src={src}
        alt="Typing"
        loading="eager"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          filter: "brightness(40%)", // Adjust the brightness value to make the image darker
        }}
      />
      <Box
        position="absolute"
        top="50%"
        left="0%"
        color="white"
        margin="1.5rem"
      >
        <Typography variant="h6" fontWeight="bold" fontSize="1.7rem">
          {title}
        </Typography>
        <Typography
          sx={{ color: "white" }}
          variant="body1"
          color="textSecondary"
          className="font"
          fontWeight={300}
          fontSize="1rem"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
