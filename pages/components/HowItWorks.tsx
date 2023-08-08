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
        background: "linear-gradient(261deg, #3DAFC5 24.21875%, #3C53F4 100%)",
        padding: "2rem",
        borderRadius: "10px",
        color: "#fff",
      }}
    >
      <Typography
        variant="h5"
        fontSize="2.5rem"
        fontWeight="bold"
        justifyContent={"center"}
        align="center"
        paddingTop={"3rem"}
        paddingBottom={"1rem"}
      >
        {" "}
        Process in 3 Simple Steps
      </Typography>
      {/* <Typography variant="body1" align="center" fontSize="1.5rem">
        3 Simple steps to get you started
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
      {/* <Typography
          // maxWidth="20rem"
          className="font"
          // width="60%"
          fontSize={"1.4rem"}
          marginLeft="10%"
          maxWidth="80%"
          sx={{ paddingTop: "3rem" }}
          textAlign={"center"}
          align="center"
        >
          At ReturnPal, we are passionate about offering our customers the
          highest quality returns service. We understand that returning items
          can be a hassle, so we strive to make the process as hassle-free as
          possible. Our team works with trusted couriers to make sure your
          package is dropped off straight to them, eliminating extra steps and
          making it easier for you.
        </Typography> */}
    </Paper>
  );
};

export default HowItWorks;
