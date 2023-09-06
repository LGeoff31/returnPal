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
import PricingCard from "./components/PricingCard";

const Pricing = () => {
  return (
    <Layout>
      <Typography
        variant="h3"
        margin="0 auto"
        paddingTop="7rem"
        textAlign={"center"}
      >
        <span style={{ color: "black", fontWeight: "150" }}>PRICING&nbsp;</span>
        <span
          style={{
            backgroundImage: "linear-gradient(to right, #87CEEB, #1E90FF)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "600",
          }}
        >
          PLANS
        </span>
      </Typography>
      <PricingCard
        title={"Pay as you go"}
        info={"dwad"}
        description={[
          "Get access to advanced features and premium support.",
          "Priority customer support.",
          "Monthly webinars and tutorials.",
        ]}
        price={"dawd"}
      />

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
                    <a href="/getstarted" style={{ width: "100%" }}>
                      <button
                        type="button"
                        className="bg-blue-500 text-xl self-center align-middle justify-center border-blue-500 ease-in duration-300 text-white font-semibold hover:text-blue-500 hover:bg-white  border-2 w-full py-3 rounded-xl"
                      >
                        Pay as you go
                      </button>
                    </a>
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
                    <a href="/getstarted" style={{ width: "100%" }}>
                      <button
                        type="button"
                        className="bg-blue-500 text-xl self-center align-middle justify-center border-blue-500 ease-in duration-300 text-white font-semibold hover:text-blue-500 hover:bg-white  border-2 w-full py-3 rounded-xl"
                      >
                        Monthly Package
                      </button>
                    </a>
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
                    <a href="/getstarted" style={{ width: "100%" }}>
                      <button
                        type="button"
                        className="bg-blue-500 text-xl self-center align-middle justify-center border-blue-500 ease-in duration-300 text-white font-semibold hover:text-blue-500 hover:bg-white  border-2 w-full py-3 rounded-xl"
                      >
                        3 Month Subscription
                      </button>
                    </a>
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
                    <a href="/getstarted" style={{ width: "100%" }}>
                      <button
                        type="button"
                        className="bg-blue-500 text-xl self-center align-middle justify-center border-blue-500 ease-in duration-300 text-white font-semibold hover:text-blue-500 hover:bg-white  border-2 w-full py-3 rounded-xl"
                      >
                        1 Year Subscription
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
    </Layout>
  );
};

export default Pricing;
