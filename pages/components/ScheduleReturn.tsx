import { Box, Typography, Button } from "@mui/material";
import React from "react";

const ScheduleReturn = () => {
  return (
    <Box
      paddingTop="3rem"
      marginTop={{ md: "10rem", xs: "5rem" }}
      sx={{
        background: "#e8f7ff",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "center",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      width="80%"
      marginX="auto"
    >
      <Typography
        variant="h2"
        fontSize={{ lg: "60px", md: "50px", sm: "40px", xs: "30px" }}
        textAlign={{ md: "-moz-initial", xs: "center" }}
      >
        <span>Schedule Your Return&nbsp;</span>
        <span style={{ color: "#3da1e3", fontWeight: "600" }}>Now</span>
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: "12rem",
          background: "#128be0",
          borderRadius: "10px",
          fontWeight: "600",
          marginLeft: { md: "4rem", xs: "0rem" },
          padding: "0.5rem",
          marginTop: { md: "0rem", xs: "2rem" },
        }}
      >
        Get started
      </Button>
    </Box>
  );
};

export default ScheduleReturn;
