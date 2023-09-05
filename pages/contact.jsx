import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
// import React, {useRef} from "react";
import Layout from "./components/Layout";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3o5mcdb",
        "template_xwxfc8f",
        form.current,
        "moDPWbTnW1z7oYc1i"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Layout>
      <Grid
        container
        direction={{ md: "row", sm: "column" }}
        // paddingLeft="4rem"
        display="flex"
        justifyContent={"center"}
        sx={{ background: "#f5f5f5" }}
      >
        <CardContent>
          <Typography fontSize="40px" paddingTop="10rem">
            <span style={{ color: "black", fontWeight: "100" }}>
              CONTACT&nbsp;
            </span>
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #87CEEB, #1E90FF)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              US
            </span>
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="textSecondary"
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Have any questions? </span>
            <span>
              Email us or submit the form <br /> below. We will respond to your
              inquiry within 24 hrs.
            </span>
          </Typography>
          <Typography paddingTop="1rem" paddingBottom="1rem">
            <EmailIcon /> info.returnpal@gmail.com
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="text"
                  name="first_name"
                  label="First Name"
                  placeholder="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  name="last_name"
                  label="Last Name"
                  placeholder="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name="user_email"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type Your Message"
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
        <Box sx={{ paddingTop: { md: "18rem", xs: "0rem" } }}>
          <img
            src="/images/robot.png"
            alt={"back truck photo"}
            width="200px"
            // height="20px"
            style={{
              margin: "0 auto",
              maxHeight: "700px",
              paddingBottom: "2rem",
            }}
          />
        </Box>
      </Grid>
    </Layout>
  );
};
export default Contact;
