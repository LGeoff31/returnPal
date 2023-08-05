import { Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid marginTop={10} marginLeft="10%" maxWidth="80%">
      <picture>
        <img
          src="https://static.wixstatic.com/media/bf8e2b_c85de989efb94a37b6648bf67621349b~mv2.png/v1/crop/x_0,y_845,w_2403,h_878/fill/w_193,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/returnpalfinal%20logos_WMK_BlackBlue_transparent.png"
          alt="returnpalfinal logos_WMK_BlackBlue_transparent.png"
        />
      </picture>
      <Grid container spacing={2}>
        <Grid item xs={4} container direction="column">
          <Typography
            variant="h5"
            color="#1096de"
            fontWeight={"bold"}
            sx={{
              fontSize: { xs: 15, md: 20, lg: 22 },
            }}
          >
            Company
          </Typography>
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
            }}
          >
            About
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
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Terms &amp; Conditions
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
              "&:hover": { color: "#1E90FF" },
            }}
          >
            How it Works
          </Link>
        </Grid>
        <Grid item xs={4} container direction="column">
          <Typography
            variant="h5"
            color="#1096de"
            fontWeight={"bold"}
            sx={{
              fontSize: { xs: 15, md: 20, lg: 22 },
            }}
          >
            Connections
          </Typography>
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
            }}
          >
            Partners
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
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Blog
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="h5"
            color="#1096de"
            fontWeight={"bold"}
            sx={{
              fontSize: { xs: 15, md: 20, lg: 22 },
            }}
          >
            Contact Us
          </Typography>
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
            }}
          >
            Contact
          </Link>
          <Grid container direction="row">
            <Link
              href="https://www.linkedin.com/company/return-pal/"
              target="_blank"
            >
              <picture>
                <img
                  alt="LinkedIn"
                  src="https://static.wixstatic.com/media/11062b_23e5890c2dfc4a04af80178b43ef66fd~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_23e5890c2dfc4a04af80178b43ef66fd~mv2.png"
                  width="50%"
                />
              </picture>
            </Link>
            <Link
              href="https://www.instagram.com/playforever.ca/"
              target="_blank"
            >
              <picture>
                <img
                  alt="Instagram"
                  src="https://static.wixstatic.com/media/11062b_482d38aa2aaa49a5b45774ebe9a5b544~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_482d38aa2aaa49a5b45774ebe9a5b544~mv2.png"
                  width="50%"
                />
              </picture>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" marginTop="5rem">
        <Typography color="grey" marginRight="10%" maxWidth="90%">
          Copyright © 2023 ReturnPal
        </Typography>
        <Link sx={{ cursor: "pointer" }}>Terms & Conditions</Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
