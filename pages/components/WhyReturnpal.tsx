import { Grid, Typography } from "@mui/material";
import React from "react";

const WhyReturnpal = () => {
  return (
    <Grid
      sx={{
        // paddingLeft: { lg: "15rem", md: "10rem", sm: "7rem", xs: "3rem" },
        paddingBottom: "2rem",
        background: "linear-gradient(to bottom, lightblue, white)",
      }}
    >
      <Typography
        variant="h2"
        fontSize={{ md: "4rem", xs: "1.5rem" }}
        paddingTop="2rem"
        paddingBottom="1rem"
        color="black"
        fontWeight="500"
        textAlign={"center"}
      >
        <span style={{ color: "black", fontWeight: "100" }}>
          WHY CHOOSE&nbsp;
        </span>
        <span
          style={{
            backgroundImage: "linear-gradient(to right, #87CEEB, #1E90FF)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "400",
          }}
        >
          RETURNPAL?&nbsp;
        </span>
      </Typography>
      <Typography paddingLeft="5%" paddingRight="5%">
        ReturnPal was born out of a simple realization: the traditional process
        of returning online purchases is far too complicated. Two friends after
        waiting in line at the post office, decided there had to be a better
        way. Thus, ReturnPal was created to streamline returns for both
        consumers and businesses, while also making a positive impact on the
        community.
      </Typography>
      <Typography paddingLeft="5%" paddingRight="5%" paddingTop="2rem">
        Choosing ReturnPal is a win-win for everyone involved. It simplifies the
        return process, promotes a more sustainable way of doing business, and
        ultimately improves the quality of life for our customers. Our focus on
        simplifying returns, fostering sustainability, and improving quality of
        life has resonated with both consumers and businesses, making a real
        difference in the way online shopping returns are handled.
      </Typography>
    </Grid>
  );
};

export default WhyReturnpal;
