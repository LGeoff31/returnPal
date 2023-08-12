import React from "react";
import { Box, Typography } from "@mui/material";

const QuoteBox = () => {
  return (
    <Box
      sx={{
        position: "relative",
        top: "10%",
        // backgroundColor: "#f5f5f5",
        // padding: "20px",
        borderRadius: "10px",
        border: "2px solid #333",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        // maxWidth: "50%", // Set maximum width to 40%
        margin: "0 auto", // Center the box horizontally
        textAlign: "center", // Center the text inside the box
      }}
      maxWidth={{ xs: "80%", md: "50%" }}
      padding={{ xs: "10px", md: "20px" }}
    >
      <Typography
        // variant="h5"
        sx={{
          fontSize: "26px",
          fontWeight: "300",
          lineHeight: "160%",
          fontFamily: "inherit",
          marginBottom: "10px",
          color: "#5f57de",
        }}
      >
        "We strive to make returns as seamless as ordering them"
      </Typography>
      {/* You can add more content or components within the Box if needed */}
    </Box>
  );
};

export default QuoteBox;
