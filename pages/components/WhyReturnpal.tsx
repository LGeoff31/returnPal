import { Grid, Typography } from "@mui/material";
import React from "react";

const WhyReturnpal = () => {
  return (
    <Grid
      sx={{
        paddingBottom: "2rem",
        background: "linear-gradient(to bottom, lightblue, white)",
      }}
    >
      <Typography
        variant="h2"
        fontSize={{ md: "3rem", xs: "1.5rem" }}
        paddingTop="2rem"
        paddingBottom="1.5rem"
        color="black"
        fontWeight="500"
        textAlign={"center"}
      >
        <span style={{ color: "black", fontWeight: "100" }}>
          WHY CHOOSE&nbsp;
        </span>
        <span style={{ color: "#3da1e3", fontWeight: "600" }}>RETURNPAL?</span>
      </Typography>
      <Typography
        variant="h6"
        fontSize={{ md: "1.25rem", xs: "1rem" }}
        paddingLeft="10%"
        paddingRight="10%"
        marginBottom={{ md: "2rem", xs: "1rem" }}
        fontWeight="300"
      >
        Our service allows everyday shoppers to return items with just a click
        of a button, all without leaving home. We also integrate seamlessly with
        existing business operations, making it easier for companies to offer
        hassle-free returns while maintaining customer satisfaction. What sets
        ReturnPal apart is our collaboration with brands to repurpose unsold or
        returned goods. We achieve this by partnering with various nonprofits
        and charities.
      </Typography>
      <Typography
        variant="h6"
        fontSize={{ md: "1.25rem", xs: "1rem" }}
        paddingLeft="10%"
        paddingRight="10%"
        paddingTop="3rem"
        marginBottom={{ md: "2rem", xs: "1rem" }}
        fontWeight="300"
      >
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
