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
      paddingLeft="2rem"
      display="flex"
      alignItems="center"
      justifyContent={"space-between"}
      sx={{
        background: "linear-gradient(to bottom, lightblue, white)",
      }}
    >
      <img
        src="https://static.wixstatic.com/media/bf8e2b_c85de989efb94a37b6648bf67621349b~mv2.png/v1/crop/x_0,y_845,w_2403,h_878/fill/w_193,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/returnpalfinal%20logos_WMK_BlackBlue_transparent.png"
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
          href="/pricing"
          variant="h5"
          underline="none"
          color="grey"
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
          href="/pricing"
          variant="h5"
          underline="none"
          color="grey"
          sx={{
            cursor: "pointer",
            transition: "color 0.3s ease",
            fontSize: { xs: 15, md: 20, lg: 22 },
            marginTop: ".7rem",
            "&:hover": { color: "#1E90FF" },
            paddingRight: "5rem",
          }}
        >
          About
        </Link>
      </Grid>

      <Grid container direction="row" paddingLeft="1rem">
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
