import { Button, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { submitFormData } from "../services/index";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Success = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const sendSuccessEmail = async () => {
    const response = await fetch("/api/success-email", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataResponse = await response.json();
    console.log("Sent email, response was", dataResponse);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
    //localhost:3000/success?name=dwa&phoneNumber=4372329238&address=dwa&apt=dwa&city=dwa&zip=dwa&additionalInfo=&labelType=Physical%20Label&pickupType=Direct%20handoff&returnLabelFile=null&description=dwa&labelType=Physical%20Label&date=2023-08-27T19:53:49.774Z&selectedPlan=Non-Member
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    const name = searchParams.get("name");
    const phoneNumber = searchParams.get("phoneNumber");
    const address = searchParams.get("address");
    const apt = searchParams.get("apt");
    const city = searchParams.get("city");
    const zip = searchParams.get("zip");
    const labelType = searchParams.get("labelType");
    const pickupType = searchParams.get("pickupType");
    const returnLabel = searchParams.get("additionalInfo");
    const addtionalInfo = searchParams.get("additionalInfo");
    const date = searchParams.get("date");
    const description = searchParams.get("description");
    const fileURI = searchParams.get("fileURI");
    const selectedPlan = searchParams.get("selectedPlan");

    const formData = {
      name: name,
      phoneNumber: phoneNumber,
      address: address,
      apt: apt,
      city: city,
      zip: zip,
      additionalInfo: addtionalInfo,
      labelType: labelType,
      pickupType: pickupType,
      returnLabel: returnLabel,
      description: description,
      fileURI: fileURI,
    };

    console.log("form data FINAL is", formData);
    console.log("date FINAL is", formData);
    console.log("Selected plan FINAL is", formData);

    // console.log("Email:", email);
    // console.log("All query parameters:", Array.from(searchParams.entries()));
    // console.log("Router object:", router);
    submitFormData(formData, date, selectedPlan);
    sendSuccessEmail();
    console.log("im doing toast now");

    // console.log(router);
    // console.log(searchParams.get("email"));
    // console.log("dwdwdawdawdawda", Array.from(searchParams.entries()));
  }, []);
  return (
    <Layout>
      <Typography variant="h1" paddingTop="10rem" textAlign={"center"}>
        Thank you for Placing your Order
      </Typography>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default Success;
