import { Stack, Typography, Button, Link, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import Image from "next/image";
const Navbar = () => {
  return (
    <Grid
      container
      direction={{ xs: "column", md: "row", lg: "row" }}
      justifyContent={{ xs: "center", md: "space-between" }}
      alignItems="center"
      // paddingLeft="5%"
      sx={{
        width: "100%",
        position: "fixed",
        zIndex: 100,
        background: "white",
        paddingLeft: { md: "5%" },
      }}
    >
      <Stack direction="row" spacing={{ xs: 1.5, md: 3, lg: 5 }}>
        <Link
          href="/"
          variant="h5"
          underline="none"
          color="textPrimary"
          sx={{
            marginTop: "0.5rem",
            cursor: "pointer",
            transition: "color 0.3s ease",

            "&:hover": { color: "#1E90FF" },
          }}
        >
          <picture>
            <img
              src="https://static.wixstatic.com/media/bf8e2b_c85de989efb94a37b6648bf67621349b~mv2.png/v1/crop/x_0,y_845,w_2403,h_878/fill/w_193,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/returnpalfinal%20logos_WMK_BlackBlue_transparent.png"
              alt="returnpalfinal logos_WMK_BlackBlue_transparent.png"
              width="100%"
              style={{
                // width: "auto", // The image will take the full width of its container on all screens
                height: "auto", // The height will adjust proportionally based on the width
                display: "block", // This ensures that any extra space around the image is removed
              }}
            />
          </picture>
        </Link>

        <Stack alignSelf="center">
          <Link
            href="/how-it-works"
            variant="h5"
            underline="none"
            color="#666d73"
            sx={{
              alignSelf: "center",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: { xs: 13, md: 20, lg: 22 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Process
          </Link>
        </Stack>
        <Link
          href="/about"
          variant="h5"
          underline="none"
          color="#666d73"
          sx={{
            alignSelf: "center",
            cursor: "pointer",
            transition: "color 0.3s ease",
            fontSize: { xs: 13, md: 20, lg: 22 },
            "&:hover": { color: "#1E90FF" },
          }}
        >
          About
        </Link>
        <Link
          href="/pricing"
          alignItems="center"
          variant="h5"
          underline="none"
          color="#666d73"
          sx={{
            alignSelf: "center",
            cursor: "pointer",
            transition: "color 0.3s ease",
            // fontSize: "1.2rem",
            fontSize: { xs: 13, md: 20, lg: 22 },
            "&:hover": { color: "#1E90FF" },
          }}
        >
          Pricing
        </Link>
        <Link
          href="/blog"
          variant="h5"
          underline="none"
          color="#666d73"
          sx={{
            alignSelf: "center",
            cursor: "pointer",
            transition: "color 0.3s ease",
            fontSize: { xs: 13, md: 20, lg: 22 },
            "&:hover": { color: "#1E90FF" },
          }}
        >
          Partners
        </Link>
        <Link
          href="/contact"
          variant="h5"
          underline="none"
          color="#666d73"
          sx={{
            alignSelf: "center",
            cursor: "pointer",
            transition: "color 0.3s ease",
            fontSize: { xs: 13, md: 20, lg: 22 },
            "&:hover": { color: "#1E90FF" },
          }}
        >
          Contact
        </Link>
      </Stack>
      <Stack direction="row" spacing={2} marginRight={"4em"}>
        <Link href="/sign-in" underline="none">
          <Button
            sx={{
              borderRadius: "1em",
              color: "black",
              backgroundColor: "#f5f5f5",
              border: "none",
              paddingLeft: "1.5rem",
              fontSize: { xs: "10px", md: "12px", lg: "15px" },
            }}
            variant="outlined"
            color="primary"
          >
            <AccountCircleIcon /> &nbsp; Sign in
          </Button>
        </Link>
        <Link href="/get-started" underline="none">
          <Button
            sx={{
              borderRadius: "2em",
              fontWeight: "bold",
              backgroundColor: "#00bfff",
              marginRight: "1.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              fontSize: { xs: "10px", md: "10px", lg: "15px" },

              "&:hover": {
                backgroundColor: "#0099ff", // Set the background color on hover
              },
            }}
            variant="contained"
            color="primary"
          >
            Get Started &nbsp; <NearMeIcon />
          </Button>
        </Link>
      </Stack>
    </Grid>
  );
};

export default Navbar;
