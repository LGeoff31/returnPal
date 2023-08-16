import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
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
          <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="text"
                  name="first_name"
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  name="last_name"
                  label="Last Name"
                  placeholder="Enter last name"
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
                  placeholder="Enter email"
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
      </Grid>
    </Layout>
  );
};
export default Contact;
