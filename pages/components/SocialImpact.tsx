import { Stack, Grid, Typography, Button } from "@mui/material";
import React from "react";

const SocialImpact = () => {
  return (
    <Stack
      direction={{ md: "row", xs: "column" }}
      paddingLeft={{ lg: "10rem", md: "5rem", sm: "0rem" }}
      paddingTop="3rem"
      sx={{ background: "#e8f7ff" }}
      textAlign={{ md: "start", xs: "center" }}
      gap={{ lg: "200px", md: "0px" }}
      alignItems={{ sm: "center" }}
      paddingBottom={{ md: "4rem", xs: "4rem" }}
    >
      <Grid
        container
        direction="column"
        width={{ lg: "700px", md: "750px", sm: "650px" }}
      >
        <Typography variant="h2" fontSize={{ lg: "60px", md: "50px" }}>
          <span style={{ fontWeight: "100" }}>Social&nbsp;</span>
          <span style={{ fontWeight: "600" }}>Impact</span>
        </Typography>

        <Typography
          marginTop={{ md: "1rem", sm: "0rem" }}
          variant="h6"
          fontSize={"1.25rem"}
          padding={{ md: "0rem", xs: "2rem" }}
          paddingTop="3rem"
          marginBottom={{ md: "2rem", xs: "1rem" }}
          fontWeight="300"
        >
          ReturnPal focuses on sustainability and community empowerment, that is
          why we’re minimizing waste by partnering with companies and agencies
          like Play Forever to redistribute unsold or unused returns. The
          returns are sorted, refurbished if needed, and redistributed to
          various communities in need.
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "12rem",
            background: "#128be0",
            borderRadius: "10px",
            fontWeight: "600",
            padding: "0.5rem",
            margin: { md: "0", sm: "0 auto", xs: "0 auto" },
          }}
        >
          Learn More
        </Button>
      </Grid>
    </Stack>
  );
};

export default SocialImpact;
