import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";

const About = () => {
  return (
    <>
      <Grid
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="image-wrapper">
          <picture>
            <img
              src="https://static.wixstatic.com/media/nsplsh_71386b525f696536576e49~mv2.jpg/v1/fill/w_1960,h_1166,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/nsplsh_71386b525f696536576e49~mv2.jpg"
              alt="Image by Claudio Schwarz"
              width="100%"
              height="600vh"
            />
          </picture>
        </div>
        <Grid
          color={"white"}
          sx={{
            position: "absolute",
            top: "15%",
            left: "10%",
            zIndex: 2,
          }}
        >
          <Grid>
            <Typography variant="h2" fontWeight="bold">
              Our
            </Typography>
            <Typography variant="h2" fontWeight="bold" color="#279ce6">
              Mission
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="body1"
              color="white"
              fontSize="1.25rem"
              marginTop="2.5%"
              marginBottom="2.5%"
              textAlign={{ xs: "center", sm: "left" }}
              width="90%"
            >
              At ReturnPal, we strive to simplify every day returns, simplifying
              your efforts to simplify your life.
            </Typography>
            <Typography
              variant="body1"
              color="white"
              fontSize="1.25rem"
              textAlign={{ xs: "center", sm: "left" }}
              width="90%"
            >
              With the click of a button, ReturnPal automates the time-consuming
              process of returns. That way, you can get back to the important
              things in life, like deciding which snacks to get at the grocery
              store.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Stack
          direction={{ xs: "column", md: "row", lg: "row" }}
          marginLeft="10%"
          marginTop="5%"
          maxWidth="80%"
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start", lg: "flex-start" }}
          textAlign={{ xs: "center", md: "left", lg: "left" }}
          spacing={2}
        >
          <Grid item xs={12} md={6} lg={6} marginRight={{ xs: 0, md: "5%" }}>
            <Typography
              fontWeight="bold"
              variant="h6"
              fontSize="1.5rem"
              color="#01314B"
              marginBottom="2rem"
            >
              As a convenient one-stop service, We&apos;re bringing couriers to
              your location, repackaging, and delivering your return to a
              predefined location.
            </Typography>
            <Typography
              fontWeight="bold"
              variant="h6"
              fontSize="1.5rem"
              color="#01314B"
            >
              Our goal is to save you from having to repackage items, print
              shipping labels, and take that long drive to the not so local post
              office.
            </Typography>
          </Grid>
          <picture>
            <img
              src="https://static.wixstatic.com/media/nsplsh_dd2487edc88745488809acd16dde4375~mv2.jpg/v1/fill/w_1090,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Bannon%20Morrissy.jpg"
              alt="Image by Bannon Morrissy"
              width="545"
              height="364"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </picture>
        </Stack>
      </Grid>

      <Grid container>
        <Stack
          direction={{ xs: "column", md: "row", lg: "row" }}
          margin="10%"
          maxWidth="80%"
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start", lg: "flex-start" }}
          textAlign={{ xs: "center", md: "left", lg: "left" }}
          spacing={2}
        >
          <Grid item xs={12} md={6} lg={6} order={{ xs: 1, md: 1 }}>
            <picture>
              <img
                src="https://static.wixstatic.com/media/nsplsh_bc2f7d1dcade40e18eb4a24f959ae5e4~mv2.jpg/v1/fill/w_1092,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Marcin%20Skalij.jpg"
                alt="Image by Marcin Skalij"
                width="546"
                height="364"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </picture>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            order={{ xs: 2, md: 2 }}
            paddingLeft={{ xs: "0", md: "5%" }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              fontSize="1.5rem"
              color="#01314B"
              marginBottom="2rem"
            >
              As a convenient one-stop service, We&apos;re bringing couriers to
              your location, repackaging, and delivering your return to a
              predefined location.
            </Typography>
            <Typography
              fontWeight="bold"
              variant="h6"
              fontSize="1.5rem"
              color="#01314B"
            >
              Our goal is to save you from having to repackage items, print
              shipping labels, and take that long drive to the not so local post
              office.
            </Typography>
          </Grid>
        </Stack>
        <Box
          sx={{
            backgroundColor: "#def8ff", // Light blue background color
            padding: "2rem",
            textAlign: "center",
            width: "100%",
            mx: "auto", // Center the box horizontally
            marginBottom: "5%",
          }}
        >
          <Typography
            marginBottom="2rem"
            variant="h5"
            fontWeight="bold"
            color="#01314B"
          >
            Learn more about our process step by step.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: "bold",
              borderRadius: "50px",
              background: "#00bfff",
              padding: "1.5%",
            }}
          >
            Our Process &nbsp; {<NearMeIcon />}
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default About;
