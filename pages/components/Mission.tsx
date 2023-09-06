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
      <Box textAlign={{ lg: "start", md: "center" }}>
        <Typography
          variant="h2"
          fontSize={{ lg: "60px", md: "50px", sm: "40px", xs: "30px" }}
          //   textAlign="center"
          paddingLeft={{ md: "0rem", xs: "2rem" }}
        >
          <span>MISSION&nbsp;</span>
          <span style={{ color: "#3da1e3", fontWeight: "600" }}>STATEMENT</span>
        </Typography>
        <Typography
          marginTop={{ md: "1rem", sm: "0rem" }}
          variant="h6"
          fontSize={"1.25rem"}
          padding={{ md: "0rem", xs: "2rem" }}
          paddingTop="3rem"
          marginBottom={{ md: "2rem", xs: "1rem" }}
          fontWeight="300"
        >
          Our mission at ReturnPal is to revolutionize the way returns are done
          by providing a hassle-free and convenient solution for online
          shoppers.
        </Typography>
        <Typography
          marginTop={{ md: "1rem", sm: "0rem" }}
          variant="h6"
          fontSize={"1.25rem"}
          padding={{ md: "0rem", xs: "2rem" }}
          paddingTop="3rem"
          marginBottom={{ md: "2rem", xs: "1rem" }}
          fontWeight="300"
        >
          We aim to take the stress out of the return process by handling the
          entire repackaging and delivery process, allowing customers to sit
          back and relax.
        </Typography>
        {/* <Typography
          margin={{ md: "0", sm: "0 auto", xs: "0 auto" }}
          //   color="grey"
          paddingTop="2rem"
          paddingLeft={{ md: "0rem", xs: "2rem" }}
          paddingRight={{ md: "0rem", xs: "2rem" }}
          marginRight="0rem"
        >
          We aim to take the stress out of the return process by handling the
          entire repackaging and delivery process, allowing customers to sit
          back and relax.
        </Typography> */}
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
