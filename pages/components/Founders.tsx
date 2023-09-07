import { Typography, Divider, Grid, Box } from "@mui/material";
import React from "react";

const Founders = () => {
  return (
    <>
      <Typography
        variant="h2"
        fontSize={{ md: "4rem", sm: "3rem", xs: "2rem" }}
        paddingTop="7rem"
        color="black"
        fontWeight="500"
        textAlign={"center"}
      >
        <span style={{ color: "black", fontWeight: "150" }}>How&nbsp;</span>
        <span style={{ color: "#3da1e3", fontWeight: "600" }}>WE&nbsp;</span>
        <span style={{ color: "black", fontWeight: "150" }}>STARTED&nbsp;</span>
      </Typography>
      <Typography
        // marginTop={{ md: "1rem", sm: "0rem" }}
        variant="h6"
        fontSize={{ md: "1.25rem", xs: "1rem" }}
        // padding={{ md: "0rem", xs: "2rem" }}
        paddingLeft="10%"
        paddingRight="10%"
        paddingTop="3rem"
        marginBottom={{ md: "2rem", xs: "1rem" }}
        fontWeight="300"
      >
        ReturnPal was born out of a simple realization: the traditional process
        of returning online purchases is far too complicated. Two friends after
        waiting in line at the post office, decided there had to be a better
        way. Thus, ReturnPal was created to streamline returns for both
        consumers and businesses, while also making a positive impact on the
        community.
      </Typography>
      <Typography
        variant="h2"
        fontSize={{ md: "4rem", xs: "2rem" }}
        paddingTop="7rem"
        paddingBottom="3rem"
        color="black"
        fontWeight="500"
        textAlign={"center"}
      >
        <span style={{ color: "black", fontWeight: "150" }}>OUR&nbsp;</span>
        <span style={{ color: "#3da1e3", fontWeight: "600" }}>RETURNPAL</span>
      </Typography>
      <Grid
        container
        direction="row"
        alignItems="center" // Center the items vertically
        justifyContent="center"
        paddingBottom="2rem"
        gap="7rem"
      >
        <Box flexDirection="column">
          <img src="/images/returnpals-hasan.png" alt="hasan" width="300px" />
          <Typography
            color="black"
            fontWeight="500"
            textAlign={"center"}
            marginTop="2rem"
          >
            <span style={{ color: "black", fontWeight: "600" }}>
              HASAN-ALI ABIDI&nbsp;
              <br />
            </span>
            <span
              style={{
                fontWeight: "150",
              }}
            >
              CEO of ReturnPal&nbsp;
            </span>
          </Typography>
        </Box>
        {/* <Divider
          style={{
            backgroundColor: "black",
            // height: "310px",
          }}
          color="blue"
        /> */}
        <Box flexDirection="column">
          <img src="/images/returnpal-moe.png" alt="mo" width="300px" />
          <Typography
            color="black"
            fontWeight="500"
            textAlign={"center"}
            marginTop="2rem"
          >
            <span style={{ color: "black", fontWeight: "600" }}>
              Masood Abeid&nbsp;
              <br />
            </span>
            <span
              style={{
                fontWeight: "150",
              }}
            >
              Co-Founder of ReturnPal&nbsp;
            </span>
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Founders;
