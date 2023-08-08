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

const Contact = () => {
  return (
    <Layout>
      <Grid
        container
        direction={{ md: "row", sm: "column" }}
        // sx={{ background: "red" }}
      >
        <Card
          style={{
            maxWidth: 450,
            padding: "20px 5px",
            paddingTop: "5rem",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              align={"center"}
              paddingTop="2rem"
              color="#01314B"
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              component="p"
              color="textSecondary"
              gutterBottom
            >
              Fill the form and our team will get back to you within 24 hours.
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
        </Card>

        <img
          src="https://static.wixstatic.com/media/bf8e2b_af19e87800ef4a098c855cd6d7e2147c~mv2.jpeg/v1/crop/x_0,y_188,w_1000,h_1312/fill/w_770,h_992,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-photo-4247766.jpeg"
          alt="pexels-photo-4247766.jpeg"
          width="385"
          height="200"
        />
      </Grid>
    </Layout>
  );
};

export default Contact;
