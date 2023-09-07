import { Typography } from "@mui/material";
import React from "react";
import Layout from "./components/Layout";

const Video = () => {
  return (
    <Layout>
      <Typography
        variant="h2"
        textAlign={"center"}
        paddingTop="8rem"
        paddingBottom="5rem"
      >
        Video Currently Unavailable
      </Typography>

      {/* Video Placeholder */}
      <video
        width="640"
        height="360"
        controls
        poster="placeholder-image.jpg"
        style={{ margin: "0 auto", marginTop: "10rem", marginBottom: "2rem" }}
      >
        <source src="coming-soon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/gdNwv__U2Xs"
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        />
      </div> */}
      {/* <video
        controls
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          margin: "0 auto",
        }}
      >
        <source
          src="https://www.youtube.com/watch?v=gdNwv__U2Xs&ab_channel=SheaWhitney"
          type="video"
        />
        Your browser does not support the video tag.
      </video> */}
    </Layout>
  );
};

export default Video;
