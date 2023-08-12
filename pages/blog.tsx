import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Typography } from "@mui/material";
import Layout from "./components/Layout";

const Blog = () => {
  return (
    <Layout>
      <Typography
        variant="h2"
        textAlign={"center"}
        paddingTop="5rem"
        paddingBottom="30rem"
      >
        Blog Currently Unavailable
      </Typography>
    </Layout>
  );
};

export default Blog;
