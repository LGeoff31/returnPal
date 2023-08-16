import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/auth";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { startOfWeek, addDays, format } from "date-fns";
import {submitFormData} from "../services/index"


const GetStarted = () => {
  type YourType = {
    displayName: string;
    email: string;
    photoURL: string;
  };

  const [userData, setUserData] = useState<YourType | null>();
  const router = useRouter();
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("userInfo")!));
    setUserData(JSON.parse(localStorage.getItem("userInfo")!));
  }, []);
  const firebaseConfig = {
    apiKey: "AIzaSyAfq9xlsoCWH68Ck2OvhWy-zROSEJXuRlg",
    authDomain: "returnpal-42590.firebaseapp.com",
    projectId: "returnpal-42590",
    storageBucket: "returnpal-42590.appspot.com",
    messagingSenderId: "91603158011",
    appId: "1:91603158011:web:8fcea6f62d55b4dafa415e",
    measurementId: "G-62XZP8TQ85",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const [multiStepForm, setMultiStepForm] = useState(1);
  const [date, setDate] = useState<Date>()
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPlan, setSelectedPlan] = useState("")
  const weekStart = startOfWeek(selectedDate);


  const renderWeek = () => {
    const days = [];

    for (let i = 0; i < 8; i++) {
      const currentDate = addDays(selectedDate, i);
      const dayLabel = format(currentDate, "iii"); // Format: Mon, Tue, etc.
      const dayNumber = format(currentDate, "d"); // Format: 1, 2, etc.
      const isSunday = format(currentDate, "iii") === "Sun";
      const dayClasses = isSunday
        ? "day w-24 h-36 cursor-disabled text-gray-500 font-bold tracking-wider text-2xl  shadow-lg flex justify-center shadow-lg shadow-red-400 sunday animate-pulse"
        :  date?.getTime()==currentDate.getTime()
        ? "day w-24 h-36  hover:cursor-pointer ease-in duration-500  scale-110 text-white font-bold tracking-wider text-2xl bg-gradient-to-b via-blue-400 from-blue-500 to-blue-500 shadow-lg flex justify-center"
        : "day w-24 h-36 hover:cursor-pointer ease-in duration-500  hover:scale-110  font-bold tracking-wider text-2xl border-blue-500 border-1 bg-gray-200  text-black shadow-lg shadow-blue-500 flex justify-center";
      
      days.push(
        <div onClick={() =>( isSunday? null: setDate(currentDate))} key={i} className={dayClasses}>
          <div className="day-label">{dayLabel}</div>
          <div className="day-number">{dayNumber}</div>
        </div>
      );
    }

    return days;
  };

   const [formData, setFormData] = useState({
     name: "",
     phoneNumber: "",
     address: "",
     apt: "",
     city: "",
     zip: "",
     additionalInfo: "",
     labelType: "", 
     returnLabelFile: null,
     description: "",
   });

  const handleInputChange = (fieldName: any, value: any) => {
     console.log(formData)
     setFormData((prevFormData) => ({
       ...prevFormData,
       [fieldName]: value,
     }));
  };
  const [formSubmited,setFormSubmitted] = useState(false)

  const formSubmit = async () => {
    console.log(formData)
    console.log(date)
    console.log(selectedPlan)
    const data = await submitFormData(formData, date, selectedPlan);
    console.log(data)
    if (data) {
        setFormSubmitted(true)
    }
  }

  console.log(date)

  return (
    <div className="flex h-screen w-full justify-center">
      <Navbar />
      <ToastContainer
        position="top-center"
        className={"mt-20 z-50"}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="mt-24 w-full">
        <ol className="flex items-center bg-blue-100  shadow-gray-400  justify-center w-full p-3 space-x-2 text-sm font-medium text-center rounded-lg shadow-lg border-r-2 text-gray-400 sm:text-base border-b-2  sm:p-4 sm:space-x-4">
          <li
            onClick={() => setMultiStepForm(1)}
            className={
              multiStepForm >= 1
                ? "flex items-center cursor-pointer  text-blue-500"
                : "flex items-center cursor-pointer"
            }
          >
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border  rounded-full shrink-0 border-blue-500">
              1
            </span>
            <span className="hidden sm:inline-flex sm:ml-2">Pickup Date</span>
            <svg
              className="w-3 h-3 ml-2 sm:ml-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li
            onClick={() => setMultiStepForm(2)}
            className={
              multiStepForm >= 2
                ? "flex items-center cursor-pointer text-blue-500"
                : "flex items-center cursor-pointer"
            }
          >
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border  rounded-full shrink-0 border-gray-400">
              2
            </span>{" "}
            <span className="hidden sm:inline-flex sm:ml-2">
              Pickup Details
            </span>
            <svg
              className="w-3 h-3 ml-2 sm:ml-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li
            onClick={() => setMultiStepForm(3)}
            className={
              multiStepForm >= 3
                ? "flex items-center cursor-pointer  text-blue-500"
                : "flex items-center cursor-pointer"
            }
          >
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border  rounded-full shrink-0 border-gray-400">
              3
            </span>
            <span className="hidden sm:inline-flex sm:ml-2">Choose Plan</span>
            <svg
              className="w-3 h-3 ml-2 sm:ml-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li
            onClick={() => setMultiStepForm(4)}
            className={
              multiStepForm >= 4
                ? "flex items-center cursor-pointer  text-blue-500"
                : "flex items-center cursor-pointer"
            }
          >
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border  rounded-full shrink-0 border-gray-400">
              4
            </span>
            <span className="hidden sm:inline-flex sm:ml-2">Package Plan</span>
            <svg
              className="w-3 h-3 ml-2 sm:ml-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li
            onClick={() => setMultiStepForm(5)}
            className={
              multiStepForm >= 5
                ? "flex items-center cursor-pointer text-blue-500"
                : "flex items-center cursor-pointer"
            }
          >
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border  rounded-full shrink-0 border-gray-400">
              5
            </span>
            <span className="hidden sm:inline-flex sm:ml-2">Checkout</span>
          </li>
        </ol>

        <div className="mt-20">
          {multiStepForm == 1 ? (
            <div className="flex justify-around">
              <div>
                <div className="date-picker">
                  <div className="flex flex-col lg:items-start lg:justify-start mb-10">
                    <div className="text-black lg:text-5xl md:text-2xl text-2xl mb-2">
                      Select a pickup{" "}
                      <span className="text-blue-600"> date</span>
                    </div>
                    <div className="text-gray-500 md:text-start text-center">
                      We pick up Monday-Saturday. We'll text you the morning of
                      your pickup with an <br /> estimated arrival time.
                    </div>
                  </div>
                  <div className="header tracking-widest text-7xl">
                    {/* <button
                    className="text-xl"
                    onClick={() => setSelectedDate(addDays(selectedDate, -8))}
                  >
                    &lt;
                  </button> */}
                    <h2 className="text-2xl font-bold animate-bounce">
                      {format(weekStart, "LLLL yyyy")}
                    </h2>
                    {/* <button
                    className="text-xl"
                    onClick={() => setSelectedDate(addDays(selectedDate, 8))}
                  >
                    &gt;
                  </button> */}
                  </div>
                  <div className="week md:flex grid gap-y-5 grid-cols-3 md:ml-0 ml-5 lg:justify-between   mt-5">
                    {renderWeek()}
                  </div>
                </div>
                <div className="mt-10 mb-10 flex md:justify-end justify-center">
                  {/* <div className="bg-gray-200  py-2 px-4 text-xl shadow-sm shadow-black rounded-lg">
                    Back
                  </div> */}
                  <div></div>
                  <div
                    onClick={() =>
                      date ? setMultiStepForm(multiStepForm + 1) : null
                    }
                    className={
                      date
                        ? "bg-blue-500 py-2 px-4 cursor-pointer text-xl text-white shadow-sm shadow-black rounded-lg"
                        : "bg-blue-300 py-2 px-4 cursor-not-allowed text-xl text-white shadow-sm shadow-black rounded-lg"
                    }
                  >
                    Next
                  </div>
                </div>
              </div>
              <div className="hidden md:block bg-blue-100 w-[20%] h-fit border-blue-500 border text-gray-900 rounded-xl p-5">
                <div className="text-xl font-bold">
                  How Much is your time Worth?
                </div>
                <div className="mt-4">
                  The average online shopper spends <br />{" "}
                  <span className="text-blue-500 font-bold text-lg">
                    {" "}
                    5 hours/month{" "}
                  </span>{" "}
                  dealing with returns
                </div>
                <div className="text-xl mt-10 font-bold">
                  Get your money back!
                </div>
                <div className="mt-4">
                  The average online shopper wastes <br />{" "}
                  <span className="text-blue-500 font-bold text-lg">
                    $300/year
                  </span>{" "}
                  on unwanted purchases
                </div>
              </div>
            </div>
          ) : null}
          {multiStepForm == 2 ? (
            <div className="flex justify-around">
              <div className="md:w-[50%] w-full md:mb-32 mb-10">
                <div>
                  <div className="flex flex-col md:items-start items-center justify-center md:justify-start mb-10">
                    <div className="text-black md:text-5xl text-3xl mb-2">
                      Pickup details
                    </div>
                    <div className="text-gray-500 text-center md:text-start">
                      Tell us more about yourself and your pickup address
                    </div>
                  </div>
                  <div>
                    <div className="px-5 md:px-0">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-black md:text-xl text-lg"
                      >
                        What are your contact details?
                      </label>
                      <div className="flex  md:flex-row md:space-y-0 space-y-5 space-x-0 flex-col md:w-[50vw] w-full md:space-x-10">
                        <input
                          type="name"
                          id="name"
                          aria-describedby="helper-text-explanation"
                          className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[70%] w-full p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={userData?.displayName}
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          // value={userData?.displayName}
                        />
                        <div className="flex md:w-96 w-full justify-center items-center">
                          <div className="border border-gray-300 rounded-r-none text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500rounded-lg p-2.5">
                            +1
                          </div>
                          <input
                            type="text"
                            id=""
                            aria-describedby="helper-text-explanation"
                            className="border-l-0 rounded-l-none border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 w-[100%] focus:border-blue-500 block p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="(987) 654-3211"
                            value={formData.phoneNumber}
                            onChange={(e) =>
                              handleInputChange("phoneNumber", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <p
                        id="helper-text-explanation"
                        className="mt-2 md:text-sm text-xs text-gray-500 "
                      >
                        You will receive text/email notifications from
                        Returnmates. Standard messaging rates apply.
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        ></a>
                      </p>

                      <label
                        htmlFor="address"
                        className="block mt-5 mb-2 font-medium text-black text-xl"
                      >
                        What is your pickup address?
                      </label>
                      <div className="flex md:flex-row flex-col md:w-[72vw] w-full space-x-0 md:space-x-10">
                        <input
                          type="address"
                          id="address"
                          aria-describedby="helper-text-explanation"
                          className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[70%] w-full p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={userData?.displayName}
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                          // value={userData?.displayName}
                        />
                      </div>
                      <div className="flex md:flex-row flex-col w-full md:w-[70%] mt-5 space-y-5 md:space-y-0 space-x-0 md:space-x-10">
                        <input
                          type="apt"
                          id="apt"
                          aria-describedby="helper-text-explanation"
                          className=" border w-1/3 border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Office, Suite, Apt."
                          value={formData.apt}
                          onChange={(e) =>
                            handleInputChange("apt", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          id="city"
                          aria-describedby="helper-text-explanation"
                          className=" border  w-1/3 border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          id="zip"
                          aria-describedby="helper-text-explanation"
                          className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 w-1/3 focus:border-blue-500 block p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Zip"
                          value={formData.zip}
                          onChange={(e) =>
                            handleInputChange("zip", e.target.value)
                          }
                        />
                      </div>
                      <label
                        htmlFor="name"
                        className="block mt-5 mb-2 font-medium text-black text-xl"
                      >
                        Additional Information?
                      </label>
                      <div className="flex w-full md:w-[72vw] space-x-10">
                        <textarea
                          rows={5}
                          id="additionalInfo"
                          aria-describedby="helper-text-explanation"
                          className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[70%] p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black "
                          placeholder="i.e. building access code, location of door, etc."
                          value={formData.additionalInfo}
                          onChange={(e) =>
                            handleInputChange("additionalInfo", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-evenly">
                  <div
                    onClick={() => setMultiStepForm(multiStepForm - 1)}
                    className="bg-gray-200 cursor-pointer  py-2 px-4 text-xl shadow-sm shadow-black rounded-lg"
                  >
                    Back
                  </div>

                  <div
                    onClick={() =>
                      formData.name &&
                      formData.phoneNumber &&
                      formData.address &&
                      formData.apt &&
                      formData.city &&
                      formData.zip
                        ? setMultiStepForm(multiStepForm + 1)
                        : null
                    }
                    className={
                      formData.name &&
                      formData.phoneNumber &&
                      formData.address &&
                      formData.apt &&
                      formData.city &&
                      formData.zip
                        ? "bg-blue-500 py-2 px-4 text-xl text-white shadow-sm cursor-pointer shadow-black rounded-lg"
                        : "bg-blue-300 py-2 cursor-not-allowed px-4 text-xl text-white shadow-sm shadow-black rounded-lg"
                    }
                  >
                    Next
                  </div>
                </div>
              </div>
              <div className="hidden sm:block bg-blue-100 w-[20%] h-fit border-blue-500 border text-gray-900 rounded-xl p-5">
                <div className="text-xl font-bold">
                  How Much is your time Worth?
                </div>
                <div className="mt-4">
                  The average online shopper spends <br />{" "}
                  <span className="text-blue-500 font-bold text-lg">
                    {" "}
                    5 hours/month{" "}
                  </span>{" "}
                  dealing with returns
                </div>
                <div className="text-xl mt-10 font-bold">
                  Get your money back!
                </div>
                <div className="mt-4">
                  The average online shopper wastes <br />{" "}
                  <span className="text-blue-500 font-bold text-lg">
                    $300/year
                  </span>{" "}
                  on unwanted purchases
                </div>
              </div>
            </div>
          ) : null}
          {multiStepForm == 3 ? (
            <div className="flex justify-around md:mt-0 -mt-10">
              <div className="md:mb-32 mb-10">
                <div>
                  <div className="flex flex-col md:items-start items-center justify-center md:justify-start mb-10">
                    <div className="text-black md:text-5xl text-3xl mb-2">
                      Choose plan
                    </div>
                    <div className="text-gray-500 text-start">
                      Say "Goodbye" to the Post Office
                    </div>
                  </div>
                  <div className="container md:my-24 my-5 mx-auto ">
                    {/* Section: Design Block */}
                    <section className="md:mb-32 mb-10">
                      <div
                        className="grid gap-0  grid-col-1
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
                                  onClick={() => {
                                    setSelectedPlan("Non-Member");
                                    setMultiStepForm(multiStepForm + 1);
                                  }}
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
                                <strong className="text-5xl w-full">$19</strong>
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
                                  onClick={() => {
                                    setSelectedPlan("Monthly Package");
                                    setMultiStepForm(multiStepForm + 1);
                                  }}
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
                                <strong className="text-5xl w-full">
                                  $48.85
                                </strong>
                                <small className=" text-sm text-black w-full font-semibold text-start mt-2">
                                  for 3 Months
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
                                  onClick={() => {
                                    setSelectedPlan("3 Months Package");
                                    setMultiStepForm(multiStepForm + 1);
                                  }}
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
                                <strong className="text-5xl w-full">
                                  $159.6
                                </strong>
                                <small className=" text-sm text-black w-full font-semibold text-start mt-2">
                                  12 Months
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
                                  onClick={() => {
                                    setSelectedPlan("Yearly");
                                    setMultiStepForm(multiStepForm + 1);
                                  }}
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
                </div>
                <div className=" flex justify-start">
                  <div
                    onClick={() => setMultiStepForm(multiStepForm - 1)}
                    className="bg-gray-200 cursor-pointer  py-2 px-4 text-xl shadow-sm shadow-black rounded-lg"
                  >
                    Back
                  </div>
                </div>
              </div>
              <div className="hidden sm:block bg-blue-100 w-[20%] h-fit border-blue-500 border text-gray-900 rounded-xl p-5">
                <div className="text-xl font-bold">
                  How Much is your time Worth?
                </div>
                <div className="mt-4">
                  The average online shopper spends <br />{" "}
                  <span className="text-blue-500 font-bold text-lg">
                    {" "}
                    5 hours/month{" "}
                  </span>{" "}
                  dealing with returns
                </div>
                <div className="text-xl mt-10 font-bold">
                  Get your money back!
                </div>
                <div className="mt-4">
                  The average online shopper wastes <br />{" "}
                  <span className="text-blue-500 font-bold text-lg">
                    $300/year
                  </span>{" "}
                  on unwanted purchases
                </div>
              </div>
            </div>
          ) : null}
          {multiStepForm == 4 ? (
            <div className="flex justify-around">
              <div className="md:w-[50%] w-full">
                <div>
                  <div className="flex flex-col md:items-start items-center md:justify-start justify-center mb-10">
                    <div className="text-black md:text-5xl text-3xl mb-2">
                      Package info
                    </div>
                    <div className="text-gray-500 md:text-start text-center">
                      Describe your returns and we'll handle the label printing
                      and repackaging
                    </div>
                  </div>

                  <div className="md:block flex flex-col justify-center items-center md:space-y-0">
                    <h3 className="mb-5 md:text-lg text-xl font-medium text-gray-900 ">
                      Select label type
                    </h3>
                    <ul className="md:grid flex flex-col md:space-y-0 space-y-5  justify-center items-center w-full   md:grid-cols-3">
                      <li className="flex justify-center items-center">
                        <input
                          type="radio"
                          id="hosting-small"
                          name="hosting"
                          defaultValue="hosting-small"
                          className="hidden peer"
                          onChange={(e) =>
                            handleInputChange("labelType", "Physical Label")
                          }
                          required
                        />
                        <label
                          htmlFor="hosting-small"
                          className="inline-flex items-center justify-between w-[80%] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
                        >
                          <div className="block">
                            <div className="w-full text-lg font-semibold">
                              Physical Label
                            </div>
                            <div className="w-full">
                              My package came with a printed return label{" "}
                            </div>
                          </div>
                          <svg
                            className="w-5 h-5 ml-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </label>
                      </li>
                      <li className="flex justify-center items-center">
                        <input
                          type="radio"
                          id="hosting-big"
                          name="hosting"
                          defaultValue="hosting-big"
                          className="hidden peer"
                          onChange={(e) =>
                            handleInputChange("labelType", "Digital label")
                          }
                        />
                        <label
                          htmlFor="hosting-big"
                          className="inline-flex items-center justify-between w-[80%] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  "
                        >
                          <div className="block">
                            <div className="w-full text-lg font-semibold">
                              Digital label
                            </div>
                            <div className="w-full">
                              I have a digital label on my computer or phone
                            </div>
                          </div>
                          <svg
                            className="w-5 h-5 ml-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </label>
                      </li>
                      <li className="flex justify-center items-center">
                        <input
                          type="radio"
                          id="hosting-medium"
                          name="hosting"
                          defaultValue="hosting-medium"
                          className="hidden peer"
                          onChange={(e) =>
                            handleInputChange("labelType", "Amazon QR code")
                          }
                        />
                        <label
                          htmlFor="hosting-medium"
                          className="inline-flex items-center justify-between w-[80%] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  "
                        >
                          <div className="block">
                            <div className="w-full text-lg font-semibold">
                              Amazon QR code
                            </div>
                            <div className="">
                              I have an Amazon QR code on my computer or phone
                            </div>
                          </div>
                          <svg
                            className="w-5 h-5 ml-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </label>
                      </li>
                    </ul>
                    <div className="mb-3">
                      <label
                        htmlFor="formFile"
                        className="mb-2 mt-5 inline-block text-black font-semibold"
                      >
                        Upload Return Label
                      </label>
                      <input
                        className="relative m-0 block w-fit min-w-0 flex-auto rounded border border-solid border-blue-500 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                        type="file"
                        id="formFile"
                        onChange={(e) =>
                          handleInputChange("returnLabelFile", e.target.files)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:px-0 px-9 justify-center items-center">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-lg font-semibold text-black mt-5 "
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5  md:w-[60%] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-500 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                  />
                </div>

                <div className="mt-10 md:mb-0 mb-5 flex justify-evenly">
                  <div
                    onClick={() => setMultiStepForm(multiStepForm - 1)}
                    className="bg-gray-200 cursor-pointer  py-2 px-4 text-xl shadow-sm shadow-black rounded-lg"
                  >
                    Back
                  </div>

                  <div
                    onClick={() =>
                      formData.labelType &&
                      formData.returnLabelFile &&
                      formData.description
                        ? setMultiStepForm(multiStepForm + 1)
                        : null
                    }
                    className={
                      formData.labelType &&
                      formData.returnLabelFile &&
                      formData.description
                        ? "bg-blue-500 py-2 px-4 text-xl text-white shadow-sm cursor-pointer shadow-black rounded-lg"
                        : "bg-blue-300 py-2 px-4 text-xl text-white shadow-sm cursor-not-allowed shadow-black rounded-lg"
                    }
                  >
                    Next
                  </div>
                </div>
              </div>
              <div className="hidden sm:block bg-blue-100 w-[20%] h-fit border-blue-500 border text-gray-900 rounded-xl p-5">
                <div className="text-xl font-bold">
                  How Much is your time Worth?
                </div>
                <div className="mt-4">
                  The average online shopper spends <br />{" "}
                  <span className="text-blue-500 font-bold text-lg">
                    {" "}
                    5 hours/month{" "}
                  </span>{" "}
                  dealing with returns
                </div>
                <div className="text-xl mt-10 font-bold">
                  Get your money back!
                </div>
                <div className="mt-4">
                  The average online shopper wastes <br />{" "}
                  <span className="text-blue-500 font-bold text-lg">
                    $300/year
                  </span>{" "}
                  on unwanted purchases
                </div>
              </div>
            </div>
          ) : null}
          {multiStepForm == 5 ? (
            <div className="md:w-fit w-full md:ml-20 ml-0 flex md:flex-row flex-col justify-between">
              <div className="md:w-[50vw] w-full px-5 md:px-0 ">
                <div className="text-2xl font-bold mb-2">Checkout</div>

                <div className="flex flex-col justify-around items-start">
                  <h1 className="font-semibold text-lg mb-5 ">
                    Pickup Information
                  </h1>
                  <div className="flex justify-center items-center space-x-5">
                    <div>
                      <div className="font-semibold">
                        {formData.phoneNumber}
                      </div>
                      <div className="truncate md:w-fit w-[75vw]"> {formData.address}</div>
                    </div>

                    <div className="self-end text-blue-500 cursor-pointer font-semibold text-xl">
                      Edit
                    </div>
                  </div>
                  <hr className="border-1 border-black w-full my-5" />
                  <div className="flex justify-center items-center space-x-5">
                    <div>
                      <div>
                        {" "}
                        <span className="font-semibold">
                          {" "}
                          Pickup date:
                        </span>{" "}
                        {date?.toLocaleDateString()}
                      </div>
                    </div>

                    <div className="self-end text-blue-500 cursor-pointer font-semibold text-xl">
                      Edit
                    </div>
                  </div>
                  <hr className="border-1 border-black w-full my-5" />
                  <div className="flex justify-center items-center space-x-5">
                    <div>
                      <div>
                        {" "}
                        <span className="font-semibold">
                          {" "}
                          Pickup method:
                        </span>{" "}
                        {formData.labelType}
                      </div>
                    </div>

                    <div className="self-end text-blue-500 cursor-pointer font-semibold text-xl">
                      Edit
                    </div>
                  </div>
                  <hr className="border-1 border-black w-full my-5" />
                </div>

                <div className="flex flex-col justify-around items-start">
                  <h1 className="font-semibold text-lg mb-5 ">
                    Payment Method
                  </h1>
                  <div className="flex justify-center items-center space-x-5">
                    <label className="relative w-full flex flex-col">
                      <span className="font-bold mb-3">Card number</span>
                      <input
                        className="rounded-md peer pl-12 pr-2 py-2 border-2 border-blue-500 placeholder-gray-500"
                        type="text"
                        name="card_number"
                        placeholder="0000 0000 0000"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </label>
                  </div>
                  <button
                    onClick={() =>
                      date &&
                      formData.name &&
                      formData.phoneNumber &&
                      formData.address &&
                      formData.apt &&
                      formData.city &&
                      formData.zip &&
                      formData.labelType &&
                      formData.returnLabelFile &&
                      formData.description &&
                      selectedPlan &&
                      !formSubmited
                        ? formSubmit()
                        : null
                    }
                    className={
                      date &&
                      formData.name &&
                      formData.phoneNumber &&
                      formData.address &&
                      formData.apt &&
                      formData.city &&
                      formData.zip &&
                      formData.labelType &&
                      formData.returnLabelFile &&
                      formData.description &&
                      selectedPlan
                        ? formSubmited==false
                          ? "w-full my-5 border-blue-500 bg-blue-500 text-white text-2xl font-semibold py-2 rounded-lg border hover:text-blue-500 hover:bg-white ease-in duration-300"
                          : "w-full my-5  bg-green-500 cursor-not-allowed text-white text-2xl font-semibold py-2 rounded-lg border hover:text-blue-500 hover:bg-white ease-in duration-300"
                        : "w-full my-5 cursor-not-allowed border-blue-500 bg-blue-300 text-white text-2xl font-semibold py-2 rounded-lg border hover:text-blue-500 hover:bg-white ease-in duration-300"
                    }
                  >
                    {formSubmited==true ? "Success" : " Confirm Pickup"}
                  </button>
                </div>
              </div>
              <div className="md:w-[50vw] md:mb-0 mb-10 w-full md:px-0 px-5   flex justify-center items-center">
                <div className="border-blue-500 border-2 rounded-lg bg-blue-200 px-5 py-20">
                  <div className="text-3xl font-bold tracking-wide">
                    {" "}
                    Order summary{" "}
                  </div>
                  <hr className="border-gray-500 my-5 border" />
                  <form>
                    <h1 className="text-xl mb-1 ml-1">Enter Promo Code</h1>
                    <label
                      htmlFor="search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only "
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="search"
                        className="block w-full py-4 px-20 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Promo Code"
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                      >
                        Apply
                      </button>
                    </div>
                  </form>
                  <div className="mt-5">
                    Upgrade to unlimited pickups for $14.99 /month.{" "}
                    <span className="text-blue-500 font-bold text-lg underline">
                      {" "}
                      Upgrade now{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
