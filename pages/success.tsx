import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { submitFormData } from "../services/index";

const Success = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    //localhost:3000/success?name=dwa&phoneNumber=4372329238&address=dwa&apt=dwa&city=dwa&zip=dwa&additionalInfo=&labelType=Physical%20Label&pickupType=Direct%20handoff&returnLabelFile=null&description=dwa&labelType=Physical%20Label&date=2023-08-27T19:53:49.774Z&selectedPlan=Non-Member
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    const name = searchParams.get("name");
    const phoneNumber = searchParams.get("phoneNumber");
    const address = searchParams.get("address");
    const apt = searchParams.get("apt");
    const city = searchParams.get("city");
    const zip = searchParams.get("email");
    const labelType = searchParams.get("labelType");
    const pickupType = searchParams.get("pickupType");
    const returnLabel = searchParams.get("additionalInfo");
    const addtionalInfo = searchParams.get("additionalInfo");
    const date = searchParams.get("date");
    const description = searchParams.get("description");

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
    };
    console.log("form data FINAL is", formData);
    console.log("date FINAL is", formData);
    console.log("Selected plan FINAL is", formData);

    // console.log("Email:", email);
    // console.log("All query parameters:", Array.from(searchParams.entries()));
    // console.log("Router object:", router);
    submitFormData(formData, date, selectedPlan);

    // console.log(router);
    // console.log(searchParams.get("email"));
    // console.log("dwdwdawdawdawda", Array.from(searchParams.entries()));
  }, []);
  return (
    <Layout>
      <Typography variant="h1" paddingTop="10rem" textAlign={"center"}>
        Thank you for Placing your Order
      </Typography>
    </Layout>
  );
};

export default Success;
