import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Box,
} from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";

const Pricing = () => {
  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        align={"center"}
        marginBottom="6%"
        color="#01314B"
        fontWeight="bold"
      >
        Choose Your Pricing Plans
      </Typography>
      <Grid container spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "1.5rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                height: "100%",
                marginLeft: { md: "20%" },
              }}
            >
              <Typography variant="h5">Pay as you go</Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                CAD $9.99
              </Typography>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "100px",
                  backgroundColor: "#00bfff",
                  "&:hover": {
                    backgroundColor: "#0099ff", // Set the background color on hover
                  },
                }}
              >
                Get Started &nbsp; {<NearMeIcon />}
              </Button>
              <Typography variant="body2">- Add-On Packages</Typography>
              <Typography variant="body2">- Extra Pickups</Typography>
              <Typography variant="body2">- Free Packaging</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "1.5rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                height: "100%",
                marginRight: { md: "20%" },
              }}
            >
              <Typography variant="h5">Pal membership</Typography>

              <Typography variant="h6" color="textSecondary" gutterBottom>
                CAD $19
              </Typography>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "100px",
                  backgroundColor: "#00bfff",
                  "&:hover": {
                    backgroundColor: "#0099ff", // Set the background color on hover
                  },
                }}
              >
                Get Started &nbsp; {<NearMeIcon />}
              </Button>
              <Typography variant="body2">- Unlimited Pickups</Typography>
              <Typography variant="body2">- Unlimited Packaging</Typography>
              <Typography variant="body2">- 24/7 Online Support</Typography>
              <Typography variant="body2">- Free Boxes</Typography>
              <Typography variant="body2">- Free Label Prints</Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
