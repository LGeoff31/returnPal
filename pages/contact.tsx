import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "./components/Layout";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout>
      <Grid
        container
        direction={{ md: "row", sm: "column" }}
        justifyContent={"center"}
        sx={{ background: "#f5f5f5" }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            paddingTop="10rem"
            color="primary"
          >
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="textSecondary"
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Have any questions?</span>
            <span>
              Email us or submit the form <br /> below. We will respond to your
              inquiry within 24 hrs.
            </span>
          </Typography>
          <Typography paddingTop="1rem" paddingBottom="1rem">
            <EmailIcon /> info.returnpal@gmail.com
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>

        <Image
          src="/images/returnpal-boxing.webp"
          alt="pexels-photo-4247766.jpeg"
          width="385"
          height="100"
          style={{ paddingTop: "12rem", paddingRight: "4rem" }}
        />
      </Grid>
    </Layout>
  );
};

export default Contact;
