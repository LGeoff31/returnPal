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
      boxShadow="0px 10px 20px rgba(0, 0, 0, 0.5)"
    >
      {/* <picture>
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
      </picture> */}
      <picture>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "12px",
          }}
        >
          <img
            src={src}
            alt="Typing"
            loading="eager"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "200%",
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent 70%)",
            }}
          />
        </div>
      </picture>
      <Box
        position="absolute"
        top="55%"
        left="0%"
        color="white"
        margin="1.5rem"
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          fontSize="1.7rem"
          marginBottom="3%"
        >
          {title}
        </Typography>
        <Typography
          sx={{ color: "white", fontFamily: "sans-serif" }}
          variant="body1"
          color="textSecondary"
          fontWeight={300}
          fontSize="1.25rem"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
