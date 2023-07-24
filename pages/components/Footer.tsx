import { Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid marginTop={10}>
      <img
        src="https://static.wixstatic.com/media/bf8e2b_c85de989efb94a37b6648bf67621349b~mv2.png/v1/crop/x_0,y_845,w_2403,h_878/fill/w_193,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/returnpalfinal%20logos_WMK_BlackBlue_transparent.png"
        alt="returnpalfinal logos_WMK_BlackBlue_transparent.png"
        // width="193"
        // height="70"
        style={{
          width: "auto", // The image will take the full width of its container on all screens
          height: "auto", // The height will adjust proportionally based on the width
          display: "block", // This ensures that any extra space around the image is removed
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={4} container direction="column">
          <Link
            href="/pricing"
            variant="h5"
            underline="none"
            color="textPrimary"
            sx={{
              alignSelf: "center",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: { xs: 15, md: 20, lg: 25 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Company
          </Link>
          <Link
            href="/pricing"
            variant="h5"
            underline="none"
            color="textPrimary"
            sx={{
              alignSelf: "center",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: { xs: 15, md: 20, lg: 25 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            About
          </Link>
          <Link
            href="/pricing"
            variant="h5"
            underline="none"
            color="textPrimary"
            sx={{
              alignSelf: "center",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: { xs: 15, md: 20, lg: 25 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Partners
          </Link>
          <Link
            href="/pricing"
            variant="h5"
            underline="none"
            color="textPrimary"
            sx={{
              alignSelf: "center",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: { xs: 15, md: 20, lg: 25 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Contact
          </Link>
        </Grid>
        <Grid item xs={4} container direction="column">
          <Link
            href="/pricing"
            variant="h5"
            underline="none"
            color="textPrimary"
            sx={{
              alignSelf: "center",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: { xs: 15, md: 20, lg: 25 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            About
          </Link>
          <Link
            href="/pricing"
            variant="h5"
            underline="none"
            color="textPrimary"
            sx={{
              alignSelf: "center",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: { xs: 15, md: 20, lg: 25 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Contact
          </Link>
          <Link
            href="/pricing"
            variant="h5"
            underline="none"
            color="textPrimary"
            sx={{
              alignSelf: "center",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: { xs: 15, md: 20, lg: 25 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Contact
          </Link>
          <Link
            href="/pricing"
            variant="h5"
            underline="none"
            color="textPrimary"
            sx={{
              alignSelf: "center",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: { xs: 15, md: 20, lg: 25 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Contact
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">Column 3 Text</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
