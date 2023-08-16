import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Box,
} from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import Layout from "./components/Layout";

const Pricing = () => {
  return (
    <Layout>
      <div className="pt-20 flex flex-col md:items-start items-center justify-center md:justify-start ">
        <Typography
          variant="h3"
          margin="0 auto"
          paddingTop="2rem"
          textAlign={"center"}
        >
          Pricing Plans
        </Typography>
      </div>
      <div className=" md:my-16 my-5 flex justify-center ">
        {/* Section: Design Block */}
        <section className="md:mb-2 mb-10 ">
          <div
            className="grid gap-  grid-col-1
                       lg:grid-cols-2 lg:gap-x-0 lg:gap-y-20"
          >
            <div className="mb-6 md:block flex justify-center items-center lg:mb-0">
              <div className="block h-[105%] w-[80%] text-black rounded-lg bg-gray-100 shadow-xl border-blue-600 border-2 ">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-blue-600 text-xl  uppercase">
                    <strong>Pay as you go</strong>
                  </p>
                  <h3 className="mb-6 text-3xl flex justify-start items-center  ">
                    <strong className="text-5xl ">$9.99</strong>
                    <small className=" text-sm ml-5 text-black font-semibold text-start mt-2">
                      + $3.99 additional boxes
                    </small>
                  </h3>
                  <hr className="border-2 border-blue-500 mt-10" />
                </div>
                <div className="px-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Free label printing
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Free boxes
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-xl font-bold text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Email and phone support
                    </li>
                  </ol>
                  <div className="flex justify-center items-center mt-[4.5rem]">
                    <button
                      type="button"
                      className="bg-blue-500 text-xl self-center align-middle justify-center border-blue-500 ease-in duration-300 text-white font-semibold hover:text-blue-500 hover:bg-white  border-2 w-full py-3 rounded-xl"
                    >
                      Pay as you go
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 md:mt-0 mt-5  md:block flex justify-center items-center lg:mb-0">
              <div className="block h-[105%] w-[80%] text-black rounded-lg bg-gray-100 shadow-xl border-blue-600 border-2 ">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-xl text-blue-600 uppercase">
                    <strong>Membership</strong>
                  </p>
                  <h3 className="mb-6 text-3xl flex justify-start items-center ">
                    <strong className="text-5xl w-full">$19.99</strong>
                    <small className=" text-sm text-black w-full font-semibold text-start mt-2">
                      Unlimited pickup for a Month
                    </small>
                  </h3>
                  <hr className="border-2 border-blue-500 mt-10" />
                </div>
                <div className="px-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited pickups and packages
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Free label printing
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-xl font-bold text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Free boxes
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{2}"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-xl font-bold text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Email and phone support
                    </li>
                  </ol>
                  <div className="flex justify-center items-center mt-8">
                    <button
                      type="button"
                      className="bg-blue-500 text-xl self-center align-middle justify-center border-blue-500 ease-in duration-300 text-white font-semibold hover:text-blue-500 hover:bg-white  border-2 w-full py-3 rounded-xl"
                    >
                      Monthly Package
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 md:mt-0 mt-5  md:block flex justify-center items-center lg:mb-0">
              <div className="block h-[105%] w-[80%] text-black rounded-lg bg-gray-100 shadow-xl border-blue-600 border-2 ">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-xl text-blue-600 uppercase">
                    <strong>3 Months Package</strong>
                  </p>
                  <h3 className="mb-6 text-3xl flex justify-start items-center ">
                    <strong className="text-5xl w-full">$49.99</strong>
                    <small className=" text-sm text-black w-full font-semibold text-start mt-2">
                      Unlimited pickups for 3 Months
                    </small>
                  </h3>
                  <hr className="border-2 border-blue-500 mt-10" />
                </div>
                <div className="px-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited pickups and packages
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Free label printing
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-xl font-bold text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Free boxes
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{2}"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-xl font-bold text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Email and phone support
                    </li>
                  </ol>
                  <div className="flex justify-center items-center mt-8">
                    <button
                      type="button"
                      className="bg-blue-500 text-xl self-center align-middle justify-center border-blue-500 ease-in duration-300 text-white font-semibold hover:text-blue-500 hover:bg-white  border-2 w-full py-3 rounded-xl"
                    >
                      3 Month Subscription
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 md:mt-0 mt-5  md:block flex justify-center items-center lg:mb-0">
              <div className="block h-[105%] w-[80%] text-black rounded-lg bg-gray-100 shadow-xl border-blue-600 border-2 ">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-xl text-blue-600 uppercase">
                    <strong>Yearly</strong>
                  </p>
                  <h3 className="mb-6 text-3xl flex justify-start items-center ">
                    <strong className="text-5xl w-full">$159.9</strong>
                    <small className=" text-sm text-black w-full font-semibold text-start mt-2">
                      Unlimited pickups 12 Months
                    </small>
                  </h3>
                  <hr className="border-2 border-blue-500 mt-10" />
                </div>
                <div className="px-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited pickups and packages
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Free label printing
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-xl font-bold text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Free boxes
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{2}"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-xl font-bold text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Email and phone support
                    </li>
                  </ol>
                  <div className="flex justify-center items-center mt-8">
                    <button
                      type="button"
                      className="bg-blue-500 text-xl self-center align-middle justify-center border-blue-500 ease-in duration-300 text-white font-semibold hover:text-blue-500 hover:bg-white  border-2 w-full py-3 rounded-xl"
                    >
                      1 Year Subscription
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* <Typography
        variant="h2"
        gutterBottom
        align="center"
        marginBottom="6%"
        color="#071048"
        fontWeight="bold"
        sx={{ fontSize: { xs: "3rem" } }}
        paddingTop="7rem"
      >
        Choose Your Pricing Plans
      </Typography>
      <Grid container spacing={2} paddingBottom="2rem">
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              padding: "1.5rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              height: "100%",
              marginLeft: { md: "20%" },
            }}
          >
            <Typography variant="h4" color="#071048" fontWeight="bold">
              Pay As You Go
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginBottom: "8px",
              }}
            >
              <Typography
                variant="h6"
                color="#071048"
                sx={{ fontSize: "1.25rem", marginRight: "5px" }}
              >
                CA$
              </Typography>
              <Typography variant="h3" color="#071048" fontWeight="bold">
                9.99
              </Typography>
            </Box>
            <Typography variant="body2" marginBottom="5%">
              Over Pay? Never.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "50%",
                padding: "3%",
                backgroundColor: "#00bfff",
                marginBottom: "5%",

                "&:hover": {
                  backgroundColor: "#0099ff", // Set the background color on hover
                },
              }}
            >
              Select
            </Button>
            <Typography variant="body2">- Add-On Packages ($3.99)</Typography>
            <Typography variant="body2">- Extra Pickups</Typography>
            <Typography variant="body2">- Free Packaging</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              padding: "1.5rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              height: "100%",
              marginRight: { md: "20%" },
            }}
          >
            <Typography variant="h4" fontWeight="bold" color="#071048">
              Pal Membership
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginBottom: "8px",
              }}
            >
              <Typography
                variant="h6"
                color="#071048"
                sx={{ fontSize: "1.25rem", marginRight: "5px" }}
              >
                CA$
              </Typography>
              <Typography variant="h3" color="#071048" fontWeight="bold">
                19
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Every month
              </Typography>
            </Box>
            <Typography variant="body2" marginBottom="5%">
              We&apos;ve Got You Handled
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "50%",
                padding: "3%",
                backgroundColor: "#4f5ee8",
                "&:hover": {
                  backgroundColor: "#0099ff", // Set the background color on hover
                },
                marginBottom: "5%",
              }}
            >
              Select
            </Button>
            <Typography variant="body2">- Unlimited Pickups</Typography>
            <Typography variant="body2">- Unlimited Packaging</Typography>
            <Typography variant="body2">- 24/7 Online Support</Typography>
            <Typography variant="body2">- Free Boxes</Typography>
            <Typography variant="body2">- Free Label Prints</Typography>
          </Card>
        </Grid>
      </Grid> */}
    </Layout>
  );
};

export default Pricing;
