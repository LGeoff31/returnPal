import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import Layout from "./components/Layout";
import Image from "next/image";
import LayoutOne from "./sub_components/LayoutOne";
import QuoteBox from "./sub_components/QuoteBox";
import LayoutTwo from "./sub_components/LayoutTwo";
import Mission from "./components/Mission";
import SocialImpact from "./components/SocialImpact";
import ScheduleReturn from "./components/ScheduleReturn";
import Founders from "./components/Founders";
import WhyReturnpal from "./components/WhyReturnpal";

const About = () => {
  return (
    <Layout>
      <Mission />
      <SocialImpact />
      <LayoutTwo
        src="/images/duplicate.png"
        description1="As a convenient one-stop service, We're bringing couriers
          to your location, repackaging, and delivering your return to a
          predefined location."
        description2="Our goal is to save you from having to repackage items, print
          shipping labels, and take that long drive to the not so local
          post office."
      />
      <LayoutTwo
        src="/images/returnpal-gta.webp"
        description1="We are all over the GTA, with a local facility in Toronto designed to ensure shipping labels are printed and the repackaging of items can meet same-day return needs."
        description2="Returning your online shopping purchases has never been easier."
      />

      <ScheduleReturn />
      <Founders />
      <WhyReturnpal />
    </Layout>
  );
};

export default About;
