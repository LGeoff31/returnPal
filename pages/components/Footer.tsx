import { Button, Grid, Link, Stack, Typography, Divider } from "@mui/material";
import React from "react";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Grid sx={{ background: "#0b0140" }}>
      <Grid marginLeft="10%" maxWidth="80%">
        <Image
          src={"/images/returnpal-logo.png"}
          width={300}
          height={300}
          alt="Picture of the author"
          style={{ opacity: 1, paddingTop: "4%", paddingBottom: "1.5rem" }}
        />
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
              color="white"
              sx={{
                cursor: "pointer",
                transition: "color 0.3s ease",
                fontSize: { xs: 15, md: 20, lg: 22 },
                "&:hover": { color: "#1E90FF" },
                marginTop: ".7rem",
              }}
            >
              About
            </Link>
            <Link
              href="/pricing"
              variant="h5"
              underline="none"
              color="white"
              sx={{
                cursor: "pointer",
                transition: "color 0.3s ease",
                fontSize: { xs: 15, md: 20, lg: 22 },
                "&:hover": { color: "#1E90FF" },
                marginTop: "1rem",
              }}
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/pricing"
              variant="h5"
              underline="none"
              color="white"
              sx={{
                cursor: "pointer",
                transition: "color 0.3s ease",
                fontSize: { xs: 15, md: 20, lg: 22 },
                "&:hover": { color: "#1E90FF" },
                marginTop: "1rem",
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
              color="white"
              sx={{
                cursor: "pointer",
                transition: "color 0.3s ease",
                fontSize: { xs: 15, md: 20, lg: 22 },
                "&:hover": { color: "#1E90FF" },
                marginTop: ".7rem",
              }}
            >
              Partners
            </Link>
            <Link
              href="/pricing"
              variant="h5"
              underline="none"
              color="white"
              sx={{
                cursor: "pointer",
                transition: "color 0.3s ease",
                fontSize: { xs: 15, md: 20, lg: 22 },
                "&:hover": { color: "#1E90FF" },
                marginTop: "1rem",
              }}
            >
              Blog
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
              Contact Us
            </Typography>
            <Link
              href="/pricing"
              variant="h5"
              underline="none"
              color="white"
              sx={{
                cursor: "pointer",
                transition: "color 0.3s ease",
                fontSize: { xs: 15, md: 20, lg: 22 },
                marginTop: ".7rem",
                "&:hover": { color: "#1E90FF" },
              }}
            >
              Contact
            </Link>
          </Grid>
        </Grid>
        <Grid container direction="row" marginTop="1rem">
          <Link
            href="https://www.linkedin.com/company/return-pal/"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: 48 }} />
          </Link>
          <Link
            href="https://www.instagram.com/playforever.ca/"
            target="_blank"
          >
            <InstagramIcon sx={{ fontSize: 48 }} />
          </Link>
        </Grid>
        <Divider color="grey" sx={{ marginTop: "3%" }} />
        <Grid container direction="row" marginTop="1.5%">
          <Typography color="grey" marginRight="2%" maxWidth="90%">
            Copyright © 2023 ReturnPal
          </Typography>
          <Divider orientation="vertical" color="grey" flexItem />

          <Link
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
    </Grid>
  );
};

export default Footer;
