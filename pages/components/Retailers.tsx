import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScroller from "./HorizontalScroller";

interface BulletPointProps {
  text: string;
}

const Retailers = () => {
  const BulletPoint = ({ text }: BulletPointProps) => {
    return (
      <>
        <Box display="flex" flexDirection={"row"} marginBottom="2rem">
          <Box
            width={{ md: "20px", sm: "20px", xs: "40px" }}
            height="20px"
            sx={{ backgroundColor: "#0bd956" }}
            borderRadius="50%"
            marginRight="2rem"
          />
          <Typography>{text}</Typography>
        </Box>
      </>
    );
  };
  return (
    <>
      <Stack
        direction={{ md: "row", xs: "column" }}
        paddingLeft={{ lg: "10rem", md: "5rem", sm: "0rem" }}
        paddingTop="3rem"
        sx={{ background: "#e8f7ff" }}
        textAlign={{ md: "start", xs: "center" }}
        gap={{ lg: "200px", md: "0px" }}
        alignItems={{ sm: "center" }}
        paddingBottom={{ md: "10rem", xs: "6rem" }}
      >
        <Grid
          container
          direction="column"
          width={{ lg: "700px", md: "750px", sm: "650px" }}
        >
          <Typography variant="h2" fontSize={{ lg: "60px", md: "50px" }}>
            <span>DROP OFFS MADE&nbsp;</span>
            <span style={{ color: "#3da1e3", fontWeight: "600" }}>EASY</span>
          </Typography>

          <Typography
            marginTop={{ md: "1rem", sm: "0rem" }}
            variant="h6"
            fontSize={"1.25rem"}
            padding={{ md: "0rem", xs: "2rem" }}
            paddingTop="3rem"
            paddingBottom="2rem"
            color="#474747"
            fontWeight="200"
          >
            Your scheduled pickup is retrieved by us right from your door and on
            its way to our assigned courier
          </Typography>
        </Grid>

        <img
          src="../images/back-truck.png"
          alt={"back truck photo"}
          width="160px"
          height="200px"
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            // marginLeft: "5rem",
            // marginRight: "5rem",
          }}
        />
      </Stack>
      <Box
        sx={{
          position: "absolute",
          left: "10%", // Adjust as needed
          top: { lg: "85rem" },
          transform: "translateY(-50%)",
          width: "80%",
          background: "white",
          padding: "0.25rem",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: { md: "0rem", sm: "2rem", xs: "2rem" },
          gap: { md: "2rem", xs: "1rem" },
        }}
      >
        <Box display={{ md: "flex", xs: "-moz-initial  " }} gap="2rem">
          <img
            src="https://static.wixstatic.com/media/bf8e2b_057e9b83e897486ba813c80ac897b5d7~mv2.png/v1/fill/w_344,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FedEx-Logo.png"
            alt="FedEx Logo"
            width="172"
            height="84"
            style={{}}
          />

          <img
            src="https://static.wixstatic.com/media/bf8e2b_0c9381a5706043c6b388f94acbb31a69~mv2.png/v1/fill/w_344,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DHL-Emblem.png"
            alt="DHL Logo"
            width={"172"}
            height="84"
            style={{}}
          />
        </Box>
        <Box
          display={{ md: "flex", xs: "-moz-initial  " }}
          alignItems={"center"}
          gap={{ md: "2rem", xs: "0rem" }}
        >
          <img
            src="https://static.wixstatic.com/media/bf8e2b_4be81e81690c434488e498fa103d75a7~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UPS-Logo_edited.png"
            alt="ups logo"
            width="70"
            height="93"
          />

          <img
            src="https://static.wixstatic.com/media/bf8e2b_45cf2bb5c6c94e6d93f32a2a65d26fb1~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bf8e2b_45cf2bb5c6c94e6d93f32a2a65d26fb1~mv2.png"
            alt="purolator courier logo"
            width="120"
            height="102"
            style={{}}
          />
        </Box>
        <Box
          display={{ md: "flex", xs: "-moz-initial  " }}
          alignItems={"center"}
          gap={{ md: "2rem", xs: "0rem" }}
        >
          <img
            src="/images/canada-post.png"
            alt="purolator courier logo"
            width="120"
            height="140"
          />

          <img
            src="/images/canpar.png"
            alt="purolator courier logo"
            width="102"
            height="102"
            style={{}}
          />
        </Box>
      </Box>
      <Grid sx={{ background: "#098bdb" }}>
        <Typography
          variant="h6"
          paddingTop={{ md: "5rem", sm: "12rem", xs: "10rem" }}
          textAlign="center"
          color="#cfcfcf"
          fontSize={{ md: "1.5rem", sm: "1rem" }}
        >
          <span style={{ fontWeight: "100" }}>
            We're working through customer returns from over&nbsp;
          </span>
          <span style={{ fontWeight: "700", color: "white" }}>+100 Brands</span>
        </Typography>

        <Typography
          variant="h6"
          paddingBottom="3rem"
          textAlign="center"
          color="#cfcfcf"
          fontSize={{ md: "1.5rem", sm: "1rem" }}
        >
          <span style={{ fontWeight: "700", color: "white" }}>Swipe Left</span>
        </Typography>
        <HorizontalScroller />
      </Grid>
      <Grid
        container
        direction="column"
        sx={{ background: "#fefff2" }}
        paddingLeft={{ md: "5rem", xs: "2rem" }}
        paddingRight={{ md: "0rem", xs: "1rem" }}
        paddingTop="5rem"
      >
        <Typography
          variant="h3"
          fontSize={{ md: "2.5rem", sm: "2rem", xs: "2rem" }}
        >
          <span style={{ fontWeight: "100" }}>YOUR&nbsp;</span>
          <span style={{ fontWeight: "600" }}>BENEFITS</span>
        </Typography>
        <Grid container direction="column" marginTop="2rem">
          <BulletPoint
            text={
              "Save time and energy by letting us handle all the repackaging and label printing for you"
            }
          />
          <BulletPoint
            text={
              "No more waiting in long post office lines or dealing with confusing return processes"
            }
          />
          <BulletPoint
            text={
              "Convenient pickup service from your location, no need to leave the house"
            }
          />
          <BulletPoint
            text={
              "Hassle-free returns for online purchases, making the whole process a breeze"
            }
          />
        </Grid>
        <Button
          variant="contained"
          sx={{
            width: "12rem",
            background: "#128be0",
            borderRadius: "10px",
            fontWeight: "600",
            padding: "0.5rem",
          }}
        >
          Get Started
        </Button>
      </Grid>
    </>
  );
};

export default Retailers;
