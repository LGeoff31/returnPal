import React, { useState, useEffect } from "react";
import { Stack, Typography, Button, Link, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import Popover from "@mui/material/Popover";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  type YourType = {
    displayName: string;
    email: string;
    photoURL: string;
  };

  const [userData, setUserData] = useState<YourType | null>();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo")!);
    console.log(data);
    setUserData(data);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logoutUser = () => {
    localStorage.removeItem("userInfo");
    setUserData(null);
    toggleDropdown();
  };

  return (
    <nav className="navigation">
      <Link href="/">
        <picture>
          <img
            src="https://static.wixstatic.com/media/bf8e2b_c85de989efb94a37b6648bf67621349b~mv2.png/v1/crop/x_0,y_845,w_2403,h_878/fill/w_193,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/returnpalfinal%20logos_WMK_BlackBlue_transparent.png"
            alt="returnpalfinal logos_WMK_BlackBlue_transparent.png"
            width="100%"
          />
        </picture>
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
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
              <a href="/getinvolved">Get Involved</a>
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
                variant="contained"
                sx={{
                  variant: "outlined",
                  textTransform: "none",
                  borderRadius: "2rem",
                  backgroundColor: "#20aae6",
                  border: "none",
                  fontSize: "15px",
                  textAlign: "center",
                  marginRight: "1rem",
                  // border: "1px solid #0099ff",
                }}
              >
                Get Started &nbsp; <NearMeIcon />
              </Button>
            </a>
            <div className="relative ">
              {!userData ? (
                <Link className="no-underline" href="/signUp">
                  <div className="flex justify-center items-center">
                    <Button
                      variant="contained"
                      sx={{
                        variant: "outlined",
                        textTransform: "none",
                        borderRadius: "2rem",
                        backgroundColor: "#20aae6",
                        border: "none",
                        fontSize: "15px",
                        textAlign: "center",
                        marginRight: "1rem",
                        // border: "1px solid #0099ff",
                      }}
                    >
                      <AccountCircleIcon /> &nbsp; Sign in
                    </Button>
                    {/* <button className="text-lg  bg-white text-blue-500 border-blue-500 border hover:bg-blue-500 hover:text-white ease-in duration-300 px-4 py-2 rounded-lg">
                      Sign up
                    </button> */}
                  </div>
                </Link>
              ) : (
                <div className="lg:mt-1 mt-0">
                  <button
                    id="dropdownUserAvatarButton"
                    data-dropdown-toggle="dropdownAvatar"
                    className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={userData?.photoURL}
                      alt="user photo"
                    />
                  </button>
                </div>
              )}
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  id="dropdownAvatar"
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-0 mt-2"
                >
                  <div className="px-4 text-center py-3 text-sm text-gray-900 dark:text-white">
                    <div>{userData?.displayName}</div>
                    {userData?.email && (
                      <div className="font-medium truncate">
                        {userData?.email}
                      </div>
                    )}
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUserAvatarButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block w-full text-center px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                  </ul>
                  <div onClick={logoutUser} className="py-2">
                    <a
                      href="#"
                      className="block text-red-500 text-center px-4 py-2 text-sm  hover:bg-gray-100 w-full dark:hover:bg-gray-600  dark:hover:text-white"
                    >
                      Log Out
                    </a>
                  </div>
                </div>
              )}
            </div>
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
