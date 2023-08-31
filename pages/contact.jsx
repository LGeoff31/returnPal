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
        <Typography  paddingBottom ="5rem"></Typography> 
        {/* will increase once i get a photo to upload */}
          <Typography 
            display = "inline"
            variant="h3"
            color="Black"
            fontSize={55}
          >
            Contact  {" "}
          </Typography>
          <Typography 
            display="inline"
            variant="h3"
            color="primary"
            fontSize={55}
          >
            Us
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="textSecondary"
            gutterBottom
          >
            <span style={{ fontWeight:"bold"}}> Have any questions? </span>
            <span>
              Submit the form below<br/> and we will respond within 24 hours.
            </span>
          </Typography>
          { <Typography paddingTop="1rem" paddingBottom="1rem">
            <EmailIcon /> info.returnpal@gmail.com
          </Typography>} 
           {/* is email needed? */}
          <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="text"
                  name="first_name"
                  label="First Name"
                  placeholder= "First Name"
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
                  variant="contained" // different variants??
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
