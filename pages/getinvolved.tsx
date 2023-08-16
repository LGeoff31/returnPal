import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import Layout from "./components/Layout";
import Image from "next/image";
import Founder from "./sub_components/Founder";

const GetInvolved = () => {
  return (
    <Layout>
      <Grid sx={{ background: "black" }}>
        <Typography
          variant="h2"
          textAlign={"center"}
          paddingTop="7rem"
          paddingBottom="6rem"
          color="white"
          fontWeight="500"
        >
          Our Founders
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-evenly"}
          alignItems="center"
        >
          <Founder
            src="/images/returnpal-hasan.png"
            name="Hasan-Ali Abidi"
            description="CEO of Play Forever"
          />
          <Divider orientation="vertical" flexItem color="white" />
          <Founder
            src="/images/returnpal-mo.png"
            name="Mohammed Al-Salem"
            description="Founder of Play Forever"
          />
        </Stack>
      </Grid>
    </Layout>
  );
};

export default GetInvolved;
