import React from "react";
import { Box, Stack, Typography, Button, Link } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Homepage = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <video autoPlay muted loop playsInline className="video-element">
          <source
            src="https://video.wixstatic.com/video/11062b_b9abbd9e13a9459db58a6baa340377e7/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <Stack
          color={"white"}
          sx={{
            position: "absolute",
            top: "40%",
            left: "5rem",
          }}
        >
          <Typography variant="h2" fontWeight="bold">
            Return Your Package <br /> The Easy Way.
          </Typography>
          <br />
          <Typography variant="body1" paddingBottom={"4rem"}>
            Seamless Contactless Returns
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Box
            sx={{
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 400, // Set the desired width
              height: 80, // Set the desired height
              border: 2,
              borderRadius: 8,
              textAlign: "center", // Center the text horizontally
              flexDirection: "row", // Align children horizontally
            }}
          >
            <img
              src="https://static.wixstatic.com/media/bf8e2b_68051fb7563f42079a1cd10f2b4b4b22~mv2.png/v1/fill/w_88,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/returnpalfinal%20logos_Transparent_Full%20Bl.png"
              alt="ReturnPal Icon Logo"
              width="88"
              height="98"
            />
            <Link href="get-started">
              <Button
                sx={{
                  borderRadius: "50px", // Adjust the value as needed to get the desired oval shape
                  padding: "0.5rem 36px", // Customize the padding to fit the content
                  fontSize: "1.15rem", // Set the font size to your preference
                  fontWeight: "bold", // Adjust font weight as needed
                  textTransform: "none", // Avoid uppercase transformation
                  background: "#0099ff", // Set the desired background color
                  color: "#fff", // Set the text color to contrast with the background
                  "&:hover": {
                    background: "#005DFF", // Set a darker background color on hover
                  },
                }}
                variant="contained"
                endIcon={<SendIcon />}
              >
                Return
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
      <Stack direction="row">
        <img
          src="https://static.wixstatic.com/media/cfb1f8f03ec948f2a3eb4e46890195a3.jpg/v1/fill/w_1022,h_682,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Box%20Delivery.jpg"
          alt="A girl receiving a box"
          width="33%"
          height="13%"
          className="margin"
        />
        <Stack
          direction="column"
          paddingLeft={"5rem"}
          width={"80%"}
          // height={"30%"}
          paddingTop={"5rem"}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            margin="1rem"
            marginTop={"3rem"}
            fontSize={"2.5rem"}
          >
            Returning has never <br /> been this hassle-free
          </Typography>
          <Link href="/get-started">
            <Button
              sx={{
                borderRadius: "50px", // Adjust the value as needed to get the desired oval shape
                padding: "0.5rem 36px", // Customize the padding to fit the content
                fontSize: "1.15rem", // Set the font size to your preference
                fontWeight: "bold", // Adjust font weight as needed
                textTransform: "none", // Avoid uppercase transformation
                background: "#0099ff", // Set the desired background color
                marginBottom: "2rem",
                color: "#fff", // Set the text color to contrast with the background
                "&:hover": {
                  background: "#005DFF", // Set a darker background color on hover
                },
              }}
            >
              Learn More
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default Homepage;
