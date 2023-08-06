import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Grid } from "@mui/material";

interface LayoutProps {
  children: ReactNode; // Define the type for children prop
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <Grid>{children}</Grid>
      <Footer />
    </div>
  );
};

export default Layout;
