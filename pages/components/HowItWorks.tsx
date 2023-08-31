import React, { useState } from "react";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import InfoCard from "../sub_components/InfoCard";

const HowItWorks = () => {
  return (
    <Paper
      style={{
        padding: "2rem",
        borderRadius: "10px",
        color: "#fff",
      }}
    >
      <Typography
        fontSize="2rem"
        justifyContent="center"
        align="center"
        paddingTop={{ lg: "8rem", xs: "5rem" }}
        paddingBottom="1rem"
      >
        <span style={{ color: "black", fontWeight: "100" }}>OUR</span>{" "}
        <span style={{ fontWeight: "800", color: "black" }}>PROCESS</span>
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent={"center"}
        style={{
          transition: "transform 1.5s ease-in-out",
        }}
      >
        <InfoCard
          title="Schedule A Return"
          description="Step-by-step guide to entering pickup details."
          number="1"
        />
        <InfoCard
          title="Select your pickup method"
          description="Leave your package on your doorsteps or hand it off to one our specialists"
          number="2"
        />
        <InfoCard
          title="We're On Our Way"
          description="We'll send you an email with your tracking number once it ships."
          number="3"
        />
      </Grid>
    </Paper>
  );
};

export default HowItWorks;
