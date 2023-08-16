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
  };
  // e.target.reset()
  return (
    // <Layout>
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};
export default Contact;

// Styles

{
  /* <Grid
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
        </CardContent> */
}
{
  /* <Image
          src={"/images/returnpal-unload-box.png"}
          alt="Retailers"
          width={400}
          height={300}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            margin: "0 auto",
          }}
        /> */
}
{
  /* <Image
          src="/images/returnpal-boxing.webp"
          alt="pexels-photo-4247766.jpeg"
          width="300"
          height="100"
          // style={{ padding: 0 }}
        /> */
}
{
  /* </Grid> */
}
// </Layout>
