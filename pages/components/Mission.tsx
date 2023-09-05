import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Mission = () => {
  return (
    <Stack
      direction={{ md: "row", sm: "column" }}
      paddingTop="8rem"
      paddingLeft={{ lg: "10rem", md: "5rem", sm: "0rem" }}
      paddingRight={{ lg: "10rem", md: "5rem", sm: "0rem" }}
    >
      <Box textAlign="start">
        <Typography
          textAlign={{ md: "start", xs: "center" }}
          fontSize={{ md: "4rem", xs: "2rem" }}
        >
          <span style={{ color: "black", fontWeight: "150" }}>
            MISSION&nbsp;
          </span>
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #87CEEB, #1E90FF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: "600",
            }}
          >
            STATEMENT
          </span>
        </Typography>
        <Typography
          color="grey"
          paddingTop="1rem"
          paddingLeft={{ md: "0rem", xs: "2rem" }}
        >
          Our mission at ReturnPal is to revolutionize the way returns are done
          by providing a hassle-free and convenient solution for online
          shoppers.
        </Typography>
        <Typography
          margin={{ md: "0", sm: "0 auto", xs: "0 auto" }}
          color="grey"
          paddingTop="2rem"
          paddingLeft={{ md: "0rem", xs: "2rem" }}
          paddingRight={{ md: "0rem", xs: "2rem" }}
          marginRight="0rem"
        >
          We aim to take the stress out of the return process by handling the
          entire repackaging and delivery process, allowing customers to sit
          back and relax.
        </Typography>
      </Box>
      <img
        src="/images/loading.png"
        width="300px"
        style={{
          margin: "0 auto",
          paddingTop: "1rem",
        }}
      />
    </Stack>
  );
};

export default Mission;
