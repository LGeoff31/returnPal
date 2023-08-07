import React, { useState , useEffect } from "react";
import { useState } from "react";
import { Stack, Typography, Button, Link, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    


  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <Link href="/">
        {/* <a href="/" className="brand-name"> */}
        <picture>
          <img
            src="https://static.wixstatic.com/media/bf8e2b_c85de989efb94a37b6648bf67621349b~mv2.png/v1/crop/x_0,y_845,w_2403,h_878/fill/w_193,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/returnpalfinal%20logos_WMK_BlackBlue_transparent.png"
            alt="returnpalfinal logos_WMK_BlackBlue_transparent.png"
            width="100%"
          />
        </picture>
        {/* </a> */}
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <div className="navigation-links">
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/video">Video</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="navigation-buttons">
            <a href="/signUp">
              <Button
                sx={{
                  variant: "outlined",
                  color: "grey",
                  textTransform: "none",
                  borderRadius: "2rem",
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  fontSize: "15px",
                  textAlign: "center",
                  marginRight: "1rem",
                }}
              >
                <AccountCircleIcon /> &nbsp; Sign in
              </Button>
            </a>

            <a href="/getstarted">
              <Button
                sx={{
                  color: "primary",
                  variant: "contained",
                  textTransform: "none",
                  borderRadius: "2rem",
                  fontWeight: "bold",
                  backgroundColor: "#00bfff",

                  fontSize: "15px",

                  "&:hover": {
                    backgroundColor: "#0099ff", // Set the background color on hover
                  },
                }}
                className="text-[#0099ff] hover:text-white"
              >
                Get Started &nbsp; <NearMeIcon />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>

    // <Grid
    //   container
    //   sx={{
    //     zIndex: 100,
    //     top: 0,
    //     justifyContent: "space-between",
    //     background: "white",
    //     maxWidth: "100%",
    //     direction: "row",
    //     alignItems: "center",
    //     spacing: 3,
    //     position: "fixed",
    //     overflow: "hidden",
    //   }}
    // >
    //   <Link
    //     href="/"
    //     style={{
    //       cursor: "pointer",
    //     }}
    //   >
    //     <picture>
    //       <img
    //         src="https://static.wixstatic.com/media/bf8e2b_c85de989efb94a37b6648bf67621349b~mv2.png/v1/crop/x_0,y_845,w_2403,h_878/fill/w_193,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/returnpalfinal%20logos_WMK_BlackBlue_transparent.png"
    //         alt="returnpalfinal logos_WMK_BlackBlue_transparent.png"
    //         width="100%"
    //       />
    //     </picture>
    //   </Link>
    //   <button
    //     className="hamburger"
    //     onClick={() => {
    //       setIsNavExpanded(!isNavExpanded);
    //     }}
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-5 w-5"
    //       viewBox="0 0 20 20"
    //       fill="white"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </button>

    //   <div
    //     className={
    //       isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
    //     }
    //   >
    //     <Grid container>
    //       <Link
    //         href="/about"
    //         sx={{
    //           listStyleType: "none",
    //           margin: "0 1rem",
    //           color: "#666d73",
    //           textDecoration: "none",
    //           "&:hover": { color: "#1E90FF" },
    //         }}
    //       >
    //         About
    //       </Link>

    //       <Link
    //         href="/pricing"
    //         sx={{
    //           color: "#666d73",
    //           textDecoration: "none",
    //           "&:hover": { color: "#1E90FF" },
    //         }}
    //       >
    //         Pricing
    //       </Link>
    //       <Link
    //         href="/blog"
    //         sx={{
    //           color: "#666d73",
    //           textDecoration: "none",
    //           "&:hover": { color: "#1E90FF" },
    //         }}
    //       >
    //         Blog
    //       </Link>

    //       <Link
    //         href="/demo"
    //         sx={{
    //           color: "#666d73",
    //           textDecoration: "none",
    //           "&:hover": { color: "#1E90FF" },
    //         }}
    //       >
    //         Demo
    //       </Link>
    //       <Link
    //         href="/contact"
    //         sx={{
    //           color: "#666d73",
    //           textDecoration: "none",
    //           "&:hover": { color: "#1E90FF" },
    //         }}
    //       >
    //         Contact
    //       </Link>
    //       <Link href="/signUp">
    //         <Button
    //           sx={{
    //             variant: "outlined",
    //             color: "black",
    //             textTransform: "none",
    //             borderRadius: "2rem",
    //             backgroundColor: "#f5f5f5",
    //             border: "none",
    //             paddingLeft: "1.5rem",
    //             fontSize: "15px",
    //             textAlign: "center",
    //             margin: 0,
    //           }}
    //         >
    //           <AccountCircleIcon /> &nbsp; Sign in
    //         </Button>
    //       </Link>
    //       <Link href="/get-started">
    //         <Button
    //           sx={{
    //             color: "primary",
    //             variant: "contained",
    //             textTransform: "none",
    //             borderRadius: "2rem",
    //             fontWeight: "bold",
    //             backgroundColor: "#00bfff",
    //             marginRight: "1.5rem",
    //             paddingLeft: "1.5rem",
    //             paddingRight: "1rem",
    //             fontSize: "15px",

    //             "&:hover": {
    //               backgroundColor: "#0099ff", // Set the background color on hover
    //             },
    //           }}
    //           className="text-[#0099ff] hover:text-white"
    //         >
    //           Get Started &nbsp; <NearMeIcon />
    //         </Button>
    //       </Link>
    //     </Grid>
    //   </div>
    // </Grid>
  );
};

export default Navbar;
