import React, { useState } from "react";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import InfoCard from "../sub_components/InfoCard";
import { useScrollTrigger } from "@mui/material";

const HowItWorks = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: hasAnimated ? 0 : 0,
  });
  if (trigger && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <Paper
      style={{
        padding: "2rem",
        borderRadius: "10px",
        color: "#fff",
        background: "linear-gradient(315deg, #ffffff 0%, #5899e2 74%)",
      }}
    >
      <Typography
        variant="h5"
        fontSize="2.5rem"
        justifyContent="center"
        align="center"
        paddingTop="3rem"
        paddingBottom="1rem"
        fontWeight="bold"
      >
        <span style={{ color: "#0244ad" }}>ReturnPal's</span>{" "}
        <span style={{ color: "white" }}>Process</span>
      </Typography>
      {/* <Typography
        variant="h5"
        // fontSize="2.5rem"
        justifyContent="center"
        align="center"
        paddingBottom="1rem"
        fontWeight="bold"
      >
        <span style={{ color: "black" }}>In</span>{" "}
        <span style={{ color: "blue" }}>three</span>
        <span style={{ color: "black" }}>&nbsp; simple steps.</span>
      </Typography> */}
      <Grid
        container
        direction="row"
        justifyContent={"center"}
        style={{
          transform: trigger ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 1.5s ease-in-out",
        }}
      >
        <InfoCard
          title="1. Request A Return"
          description="From the comfort of your home, answer a few quick questions from us so that we can get to know your package a little more."
          src="https://static.wixstatic.com/media/5834c13670304d0b92d43106194caf49.jpg/v1/fill/w_359,h_479,q_90/5834c13670304d0b92d43106194caf49.jpg"
        />
        <InfoCard
          title="2. Payment"
          description="Provide your payment option and Receive an instant quote and Tracking ID to know the status of the delivery."
          src="https://static.wixstatic.com/media/11062b_557ca51cbbbc42c5828701e4c2d2e522~mv2.jpg/v1/fill/w_360,h_479,q_90/11062b_557ca51cbbbc42c5828701e4c2d2e522~mv2.jpg"
        />
        <InfoCard
          title="3. We're On Our Way "
          description="Sit back and relax, our couriers will be at your door ready to retrieve your package within 48 hours of less."
          src="https://static.wixstatic.com/media/cfb1f8f03ec948f2a3eb4e46890195a3.jpg/v1/fill/w_359,h_479,q_90/cfb1f8f03ec948f2a3eb4e46890195a3.jpg"
        />
      </Grid>
    </Paper>
  );
};

export default HowItWorks;
