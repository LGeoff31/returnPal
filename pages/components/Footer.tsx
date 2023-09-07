import {
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Grid
      container
      direction="row"
      paddingLeft={"2rem"}
      display="flex"
      alignItems="center"
      paddingTop="1rem"
      justifyContent={"space-between"}
      sx={{
        background: "linear-gradient(to bottom, lightblue, white)",
      }}
    >
      <img
        src="/images/navbar-logo-transparent.png"
        alt="returnpalfinal logos_WMK_BlackBlue_transparent.png"
        width="200px"
      />
      <Grid display="flex" justifyContent={"end"} gap="1rem">
        {/* <Link
          href="https://www.linkedin.com/company/return-pal/"
          target="_blank"
        >
          <LinkedInIcon sx={{ fontSize: 48 }} />
        </Link>
        <Link href="https://www.instagram.com/playforever.ca/" target="_blank">
          <InstagramIcon sx={{ fontSize: 48 }} />
        </Link> */}
        <Link
          href="/contact"
          variant="h5"
          underline="none"
          color="black"
          sx={{
            cursor: "pointer",
            transition: "color 0.3s ease",
            fontSize: { xs: 15, md: 20, lg: 22 },
            "&:hover": { color: "#1E90FF" },
            marginTop: ".7rem",
          }}
        >
          Contact
        </Link>
        <Link
          href="/about"
          variant="h5"
          color="black"
          underline="none"
          sx={{
            cursor: "pointer",
            transition: "color 0.3s ease",
            fontSize: { xs: 15, md: 20, lg: 22 },
            marginTop: ".7rem",
            "&:hover": { color: "#1E90FF" },
            // paddingRight: { md: "5rem", xs: "2rem" },
          }}
        >
          About
        </Link>
        <Link
          href="https://www.linkedin.com/company/return-pal/"
          target="_blank"
          display="flex"
          marginTop="0.2rem"
        >
          <LinkedInIcon sx={{ fontSize: { md: 48, xs: 30 } }} />
        </Link>
        <Link
          marginTop="0.2rem"
          href="https://www.instagram.com/playforever.ca/"
          target="_blank"
          sx={{ paddingRight: { md: "5rem", xs: "2rem" } }}
          marginBottom="1.5rem"
        >
          <InstagramIcon sx={{ fontSize: { md: 48, xs: 30 } }} />
        </Link>
      </Grid>

      <Grid container direction="row">
        <Typography
          color="grey"
          marginRight="2%"
          maxWidth="90%"
          fontSize={{ xs: "13px", md: "15px" }}
        >
          Copyright © 2023 ReturnPal
        </Typography>
        <Divider orientation="vertical" color="grey" flexItem />

        <Link
          fontSize={{ xs: "13px", md: "15px" }}
          sx={{
            marginLeft: "2%",
            cursor: "pointer",
            color: "grey",
            textDecoration: "none",
            "&:hover": { color: "blue" },
          }}
        >
          Terms & Conditions
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
