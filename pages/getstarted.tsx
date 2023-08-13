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

// mutation{
// createPickupRequests(
//   data:{
//     name:"Muzammil"
//   }
// ) {
//   id
// }  
// }


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
  const [date, setDate] = useState(new Date())
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
        :  date.getTime()==currentDate.getTime()
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

  const formSubmit = async () => {
    console.log(formData)
    console.log(date)
    console.log(selectedPlan)
    const data = await submitFormData(formData, date, selectedPlan);
    console.log(data)
  }
  return (
    <div className="flex justify-center">
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
      <div className="mt-32">
        <ol className="flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center rounded-lg shadow-lg border-r-2 text-gray-400 sm:text-base bg-transparent border-b-2 border-0  sm:p-4 sm:space-x-4">
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
            Pickup <span className="hidden sm:inline-flex sm:ml-2">Date</span>
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
            </span>
            Pickup{" "}
            <span className="hidden sm:inline-flex sm:ml-2">Details</span>
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
            Choose <span className="hidden sm:inline-flex sm:ml-2">Plan</span>
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
            Package <span className="hidden sm:inline-flex sm:ml-2">Plan</span>
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
            Checkout
          </li>
        </ol>

        <div className="mt-20">
          {multiStepForm == 1 ? (
            <div className="flex justify-around">
              <div>
                <div className="date-picker">
                  <div className="flex flex-col items-start justify-start mb-10">
                    <div className="text-black text-5xl mb-2">
                      Select a pickup{" "}
                      <span className="text-blue-600"> date</span>
                    </div>
                    <div className="text-gray-500 text-start">
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
                  <div className="week flex justify-between mt-5">
                    {renderWeek()}
                  </div>
                </div>
                <div className="mt-10 flex justify-around">
                  {/* <div className="bg-gray-200  py-2 px-4 text-xl shadow-sm shadow-black rounded-lg">
                    Back
                  </div> */}
                  <div></div>
                  <div
                    onClick={() => setMultiStepForm(multiStepForm + 1)}
                    className="bg-blue-500 py-2 px-4 cursor-pointer text-xl text-white shadow-sm shadow-black rounded-lg"
                  >
                    Next
                  </div>
                </div>
              </div>
              <div>SideBar Section</div>
            </div>
          ) : null}
          {multiStepForm == 2 ? (
            <div className="flex justify-around">
              <div>
                <div>
                  <div className="flex flex-col items-start justify-start mb-10">
                    <div className="text-black text-5xl mb-2">
                      Pickup details
                    </div>
                    <div className="text-gray-500 text-start">
                      Tell us more about yourself and your pickup address
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-black text-xl"
                      >
                        What are your contact details?
                      </label>
                      <div className="flex w-[50vw] space-x-10">
                        <input
                          type="name"
                          id="name"
                          aria-describedby="helper-text-explanation"
                          className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={userData?.displayName}
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          // value={userData?.displayName}
                        />
                        <div className="flex w-96 justify-center items-center">
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
                        className="mt-2 text-sm text-gray-500 "
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
                      <div className="flex w-[72vw] space-x-10">
                        <input
                          type="address"
                          id="address"
                          aria-describedby="helper-text-explanation"
                          className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={userData?.displayName}
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                          // value={userData?.displayName}
                        />
                      </div>
                      <div className="flex w-[70%] mt-5 space-x-10">
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
                        What is your pickup address?
                      </label>
                      <div className="flex w-[72vw] space-x-10">
                        <textarea
                          rows={5}
                          id="additionalInfo"
                          aria-describedby="helper-text-explanation"
                          className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black "
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
                <div className="mt-10 flex justify-around">
                  <div
                    onClick={() => setMultiStepForm(multiStepForm - 1)}
                    className="bg-gray-200 cursor-pointer  py-2 px-4 text-xl shadow-sm shadow-black rounded-lg"
                  >
                    Back
                  </div>

                  <div
                    onClick={() => setMultiStepForm(multiStepForm + 1)}
                    className="bg-blue-500 py-2 px-4 text-xl text-white shadow-sm cursor-pointer shadow-black rounded-lg"
                  >
                    Next
                  </div>
                </div>
              </div>
              <div>SideBar Section</div>
            </div>
          ) : null}
          {multiStepForm == 3 ? (
            <div className="flex justify-around">
              <div>
                <div>
                  <div className="flex flex-col items-start justify-start mb-10">
                    <div className="text-black text-5xl mb-2">Choose plan</div>
                    <div className="text-gray-500 text-start">
                      Say "Goodbye" to the Post Office
                    </div>
                  </div>
                  <div className="container my-24 mx-auto ">
                    {/* Section: Design Block */}
                    <section className="mb-32">
                      <div
                        className="grid gap-0 grid-col-1
                       lg:grid-cols-2 lg:gap-x-0"
                      >
                        <div className="mb-6 lg:mb-0">
                          <div className="block h-[105%] w-[80%] text-black rounded-lg bg-gray-100 shadow-xl border-blue-600 border-2 ">
                            <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                              <p className="mb-4 text-xl text-black uppercase">
                                <strong>Pay as you go</strong>
                              </p>
                              <h3 className="mb-6 text-3xl flex justify-start items-center  ">
                                <strong className="text-5xl ">$6</strong>
                                <small className=" text-sm ml-5 text-black font-semibold text-start mt-2">
                                  per pickup (incl. first package) +$2 each
                                  addt’l package
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
                        <div className="mb-6 lg:mb-0">
                          <div className="block h-[105%] w-[80%] text-black rounded-lg bg-gray-100 shadow-xl border-blue-600 border-2 ">
                            <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                              <p className="mb-4 text-xl text-blue-600 uppercase">
                                <strong>Membership</strong>
                              </p>
                              <h3 className="mb-6 text-3xl flex justify-start items-center ">
                                <strong className="text-5xl w-full">$14</strong>
                                <small className=" text-sm text-black w-full font-semibold text-start mt-2">
                                  Per Month
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
                                    setSelectedPlan("Member");
                                    setMultiStepForm(multiStepForm + 1);
                                  }}
                                  type="button"
                                  className="bg-blue-500 text-xl self-center align-middle justify-center border-blue-500 ease-in duration-300 text-white font-semibold hover:text-blue-500 hover:bg-white  border-2 w-full py-3 rounded-xl"
                                >
                                  Become a member
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
              <div>SideBar Section</div>
            </div>
          ) : null}
          {multiStepForm == 4 ? (
            <div className="flex justify-around">
              <div>
                <div>
                  <div className="flex flex-col items-start justify-start mb-10">
                    <div className="text-black text-5xl mb-2">Package info</div>
                    <div className="text-gray-500 text-start">
                      Describe your returns and we'll handle the label printing
                      and repackaging
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-5 text-lg font-medium text-gray-900 ">
                      Select label type
                    </h3>
                    <ul className="grid w-full md:grid-cols-3">
                      <li>
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
                      <li>
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
                      <li>
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
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-lg font-semibold text-black mt-5 "
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-[60%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-500 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                  />
                </div>

                <div className="mt-10 flex justify-around">
                  <div
                    onClick={() => setMultiStepForm(multiStepForm - 1)}
                    className="bg-gray-200 cursor-pointer  py-2 px-4 text-xl shadow-sm shadow-black rounded-lg"
                  >
                    Back
                  </div>

                  <div
                    onClick={() => setMultiStepForm(multiStepForm + 1)}
                    className="bg-blue-500 py-2 px-4 text-xl text-white shadow-sm cursor-pointer shadow-black rounded-lg"
                  >
                    Next
                  </div>
                </div>
              </div>
              <div>SideBar Section</div>
            </div>
          ) : null}
          {multiStepForm == 5 ? (
            <div>
              <div className="text-2xl font-bold mb-2">Checkout</div>

              <div className="flex flex-col justify-around items-start">
                <h1 className="font-semibold text-lg mb-5 ">
                  Pickup Information
                </h1>
                <div className="flex justify-center items-center space-x-5">
                  <div>
                    <div className="font-semibold">{formData.phoneNumber}</div>
                    <div className="truncate w-fit"> {formData.address}</div>
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
                      <span className="font-semibold"> Pickup date:</span>{" "}
                      {date.toLocaleDateString()}
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
                <h1 className="font-semibold text-lg mb-5 ">Payment Method</h1>
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
                <button onClick={formSubmit} className="w-full my-5 border-blue-500 bg-blue-500 text-white text-2xl font-semibold py-2 rounded-lg border hover:text-blue-500 hover:bg-white ease-in duration-300">
                  Confirm Pickup
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
