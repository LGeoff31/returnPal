import { Stack, Typography, Button, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Link from "next/link";
const Navbar = () => {
type YourType = {
  displayName: string;
  email: string;
  photoURL: string;
};

  const [userData, setUserData] = useState<YourType | null>();
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo")!)
    console.log(data)
    setUserData(data)
    },[])


  return (
    <Grid
      container
      justifyContent={{ xs: "center", md: "space-between" }}
      sx={{
        width: "100%",
        position: "fixed",
        zIndex: 100,
        background: "white",
        paddingLeft: { md: "5%" },
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 1.5, md: 3, lg: 5 }}
        alignItems={"center"}
      >
        <ScrollLink
          to="section1"
          spy={true}
          smooth={true}
          offset={-100}
          href="/"
          style={{
            marginTop: "0.5rem",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
        >
          <picture>
            <img
              src="https://static.wixstatic.com/media/bf8e2b_c85de989efb94a37b6648bf67621349b~mv2.png/v1/crop/x_0,y_845,w_2403,h_878/fill/w_193,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/returnpalfinal%20logos_WMK_BlackBlue_transparent.png"
              alt="returnpalfinal logos_WMK_BlackBlue_transparent.png"
              width="100%"
              style={{
                height: "auto", // The height will adjust proportionally based on the width
                display: "block", // This ensures that any extra space around the image is removed
              }}
            />
          </picture>
        </ScrollLink>
        <ScrollLink
          to="section2"
          spy={true}
          smooth={true}
          offset={-100}
          style={{
            marginTop: "0.5rem",
            cursor: "pointer",
            transition: "color 0.3s ease",
            color: "#666d73",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 13, md: 18, lg: 20 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Process
          </Typography>
        </ScrollLink>

        <ScrollLink
          to="section3"
          spy={true}
          smooth={true}
          offset={-100}
          style={{
            marginTop: "0.5rem",
            cursor: "pointer",
            transition: "color 0.3s ease",
            color: "#666d73",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 13, md: 18, lg: 20 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            About
          </Typography>
        </ScrollLink>

        <ScrollLink
          to="section4"
          spy={true}
          smooth={true}
          offset={-100}
          style={{
            marginTop: "0.5rem",
            cursor: "pointer",
            transition: "color 0.3s ease",
            color: "#666d73",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 13, md: 20, lg: 22 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Pricing
          </Typography>
        </ScrollLink>

        <ScrollLink
          to="section5"
          spy={true}
          smooth={true}
          offset={-100}
          style={{
            marginTop: "0.5rem",
            cursor: "pointer",
            transition: "color 0.3s ease",
            color: "#666d73",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 13, md: 18, lg: 20 },
              "&:hover": { color: "#1E90FF" },
            }}
          >
            Contact
          </Typography>
        </ScrollLink>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent={{ xs: "center", md: "flex-start" }} // Center on mobile and align to the left on larger screens
      >
        <Link href="/signUp">
          <Button
            sx={{
              textTransform: "none",
              borderRadius: "1rem",
              color: "black",
              backgroundColor: "#f5f5f5",
              border: "none",
              paddingLeft: "1.5rem",
              fontSize: { xs: "10px", md: "12px", lg: "15px" },
            }}
            variant="outlined"
            color="primary"
          >
            <AccountCircleIcon /> &nbsp; {userData? userData.displayName : "Sign up"}
          </Button>
        </Link>
        <Link href="/get-started">
          <Button
            sx={{
              borderRadius: "2em",
              fontWeight: "bold",
              backgroundColor: "#00bfff",
              textTransform: "none",
              marginRight: "1.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1rem",
              fontSize: { xs: "10px", md: "10px", lg: "15px" },

              "&:hover": {
                backgroundColor: "#0099ff", // Set the background color on hover
              },
            }}
            variant="contained"
            color="primary"
            className="text-[#0099ff] hover:text-white"
          >
            Get Started &nbsp; <NearMeIcon />
          </Button>
        </Link>
      </Stack>
    </Grid>
  );
};

export default Navbar;
