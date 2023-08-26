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
import { submitFormData } from "../services/index";
import { Button } from "@mui/material";

const GetStarted = () => {
  type YourType = {
    displayName: string;
    email: string;
    photoURL: string;
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
    pickupType: "",
    returnLabelFile: null,
    description: "",
    fileURI: "",
  });

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
  const [date, setDate] = useState<Date>();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPlan, setSelectedPlan] = useState("");
  const weekStart = startOfWeek(selectedDate);
  const [today, settoday] = useState<Date>(new Date());

  const handleCheckout = async () => {
    const form = new FormData();
    if (formData.returnLabelFile) {
      form.append("fileUpload", formData.returnLabelFile[0]);
      fetch(
        `https://api-ca-central-1.hygraph.com/v2/cll80jvds0u6w01uj7a3odxe3/master/upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTE5MzYwNjcsImF1ZCI6WyJodHRwczovL2FwaS1jYS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2xsODBqdmRzMHU2dzAxdWo3YTNvZHhlMy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjM4OTFhM2UtZGZmNC00OGNjLTg0MDMtNzc0MzdmMGE5YTFkIiwianRpIjoiY2xsOWoxdGFoMThiazAxdGNoOXA5YTlvbiJ9.p23Lj-8hGKq6xRpdqIVE5QbCZGQrZO3RXdmH86wRJ2u2hrgti1T97_2XhnQiU-kinKj55MFSmSeX300C2fsXXVXK-ncrqctsTX2dRlcbmZPudWrGo2XuT_RAw39bECl4LR2-sb-MoqvC0kPna-CKgRdBYY-OjOSL1FICpXof_GH72IZ4A_EfGsQHRGAu66RnuDBLByDLYLttaZLDLMeF9dAKJ6TxeBxDQS50EPLlLG1LyAAb5Z4b3aEmi6TblOY2GVVdFNavPy8fWkoi7xEMr-M7MBXO695A3CvPm5T7JHFCOEi2-u4VwkR4zDQZ5-97nmfDcw1QQy12f4FR0jk0E4dR3Kl9mW58BkYQ0sThly3sO3nad4-7Ml9rpHEwNvQ6q_yFpOqfE9tr2A6FScA7rg-4eYnm1i3xM4rbeuTeze61y_v5kkwGsG8Xfx-DeZkV4GnUWFdT7y-coMfD38pAYcURAGVyuwhoQAbGSVsLKzPI0JSiHeBbSmeOk-THpQkKfO2hVaUVZwkZ4ZWLjXBIEswbAzRCDKhN0tPX-IlKcOiFPikGQs9-XywSuVwZyXMimAnRgSsT-QgQMIC1wGt09f6e8qaff60Eipli1lRnETXNT9yS6Ek4BUJyb09hCqaTgH-G1XjviOKCeIUCU4Ip7yzRq3zdzxRsyLa7dFGruO0`,
          },
          body: form,
        }
      )
        .then((res) => res.json())
        .then(async (res: any) => {
          formData.returnLabelFile = null;
          console.log(res);
          formData.fileURI = res.url;
          const response = await fetch("/api/checkout", {
            method: "POST",
            body: JSON.stringify({
              formData,
              date,
              selectedPlan,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await submitFormData(formData, date, selectedPlan);
          console.log(data);
          const dataResponse = await response.json();
          window.location.href = dataResponse.UrlToRedirect;
        });
    } else {
      formData.returnLabelFile = null;
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          formData,
          date,
          selectedPlan,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await submitFormData(formData, date, selectedPlan);
      console.log(data);
      const dataResponse = await response.json();
      window.location.href = dataResponse.UrlToRedirect;
    }
  };

  const renderWeek = () => {
    const days = [];

    for (let i = 0; i < 8; i++) {
      const currentDate = addDays(selectedDate, i);
      const dayLabel = format(currentDate, "iii"); // Format: Mon, Tue, etc.
      const dayNumber = format(currentDate, "d"); // Format: 1, 2, etc.
      const isSunday = format(currentDate, "iii") === "Sun";

      const dayClasses =
        date?.getTime() == currentDate.getTime()
          ? "day w-24 h-36 hover:text-black hover:bg-blue-100  hover:cursor-pointer ease-in duration-500  scale-110 text-white font-bold tracking-wider text-2xl bg-blue-500 shadow-lg flex justify-center"
          : currentDate?.getDate() == today?.getDate()
          ? "day w-24 h-36  bg-white hover:cursor-not-allowed ease-in duration-500  rounded-5xl text-gray-700 font-bold tracking-wider text-2xl  shadow-lg flex justify-center shadow-lg"
          : "day w-24 h-36 bg-blue-100 hover:text-white ease-in duration-500 hover:bg-blue-500 rounded-5xl text-gray-700 font-bold tracking-wider text-2xl  shadow-lg flex justify-center shadow-lg";

      days.push(
        <div
          onClick={() =>
            currentDate?.getDate() == today?.getDate()
              ? null
              : setDate(currentDate)
          }
          key={i}
          className={dayClasses}
        >
          <div className="day-label">{dayLabel}</div>
          <div className="day-number">{dayNumber}</div>
        </div>
      );
    }

    return days;
  };

  const [labelfilerequires, setlaberlfilerequires] = useState(false);
  useEffect(() => {
    if (formData.labelType == "Physical Label" || formData.returnLabelFile) {
      setlaberlfilerequires(true);
    } else {
      setlaberlfilerequires(false);
    }
  }, [formData]);

  const handleInputChange = (fieldName: any, value: any) => {
    console.log(formData);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };
  const [formSubmited, setFormSubmitted] = useState(false);

  const formSubmit = async () => {};
  const [validatePhNumber, setValidatePHNumber] = useState(false);

  const validatePhoneNumber = (phoneNumber: any) => {
    // Define a regular expression pattern for valid phone numbers
    const phonePattern = /^\d{10}$/;
    console.log(phonePattern.test(phoneNumber));
    return phonePattern.test(phoneNumber);
  };
  const handlePhoneNumberChange = (e: any) => {
    const newPhoneNumber = e.target.value;
    console.log(newPhoneNumber);
    setValidatePHNumber(false);
    handleInputChange("phoneNumber", newPhoneNumber);
    if (validatePhoneNumber(newPhoneNumber)) {
      console.log(e.target.value);
      setValidatePHNumber(true);
    }
  };

  console.log(date);

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
            onClick={() => (date ? setMultiStepForm(2) : null)}
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
            onClick={() =>
              date &&
              formData.name &&
              formData.phoneNumber &&
              validatePhNumber &&
              formData.address &&
              formData.zip &&
              formData.apt &&
              formData.pickupType
                ? setMultiStepForm(3)
                : null
            }
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
            onClick={() =>
              date &&
              formData.name &&
              formData.phoneNumber &&
              validatePhNumber &&
              formData.address &&
              formData.zip &&
              formData.apt &&
              formData.pickupType &&
              selectedPlan
                ? setMultiStepForm(4)
                : null
            }
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
            onClick={() =>
              formData.name &&
              formData.phoneNumber &&
              validatePhNumber &&
              formData.address &&
              formData.zip &&
              formData.apt &&
              formData.pickupType &&
              selectedPlan &&
              formData.labelType &&
              formData.description &&
              labelfilerequires
                ? setMultiStepForm(5)
                : null
            }
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
                    <div className="text-gray-500 lg:text-start text-center">
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
              <div className="hidden lg:block bg-blue-100 w-[20%] h-fit border-blue-500 border text-gray-900 rounded-xl p-5">
                <svg
                  width={103}
                  height={101}
                  className="jss112"
                  viewBox="0 0 103 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.1728 66.2977C12.0989 60.3423 11.9932 52.4757 13.2903 45.3984C14.5176 38.7021 18.6625 33.2212 23.1653 28.1445C27.6926 23.0401 32.806 18.6765 39.1684 16.2219C46.5052 13.3915 54.3799 11.1105 61.9973 13.1635C70.3481 15.4142 78.2625 20.4296 82.6218 27.9333C86.9864 35.4462 86.9852 44.708 85.2541 53.1962C83.6433 61.0945 78.7049 67.5197 73.33 73.4932C67.964 79.4569 62.4624 86.9086 54.4514 87.4294C46.5712 87.9417 41.186 79.8642 34.2476 76.0339C28.1058 72.6433 20.1409 72.0982 16.1728 66.2977Z"
                    fill="#F9F7F4"
                  />
                  <circle
                    cx="26.878"
                    cy="39.195"
                    r="9.37805"
                    fill="white"
                    stroke="#071048"
                  />
                  <circle
                    cx="61.1222"
                    cy="39.195"
                    r="9.37805"
                    fill="white"
                    stroke="#071048"
                  />
                  <circle
                    cx="44.0002"
                    cy="31.2926"
                    r="2.79268"
                    fill="white"
                    stroke="#071048"
                  />
                  <circle
                    cx="28.8537"
                    cy="75.4146"
                    r="2.79268"
                    fill="white"
                    stroke="#071048"
                  />
                  <circle
                    cx="58.488"
                    cy="75.4146"
                    r="2.79268"
                    fill="white"
                    stroke="#071048"
                  />
                  <circle
                    cx="43.9998"
                    cy="54.9999"
                    r="23.2073"
                    fill="white"
                    stroke="#071048"
                  />
                  <circle
                    cx="44.0001"
                    cy="55.0001"
                    r="17.939"
                    fill="#635DF6"
                    stroke="#071048"
                  />
                  <rect
                    x="43.3413"
                    y="36.561"
                    width="1.31707"
                    height="3.29268"
                    rx="0.658537"
                    fill="#071048"
                  />
                  <rect
                    x="43.3413"
                    y="41.8294"
                    width="1.31707"
                    height="13.8293"
                    rx="0.658537"
                    fill="#071048"
                  />
                  <rect
                    x="51.9023"
                    y="54.3415"
                    width="1.31707"
                    height="8.56098"
                    rx="0.658537"
                    transform="rotate(90 51.9023 54.3415)"
                    fill="#071048"
                  />
                  <rect
                    x="43.3413"
                    y="70.1464"
                    width="1.31707"
                    height="3.29268"
                    rx="0.658537"
                    fill="#071048"
                  />
                  <rect
                    x="25.561"
                    y="55.6585"
                    width="1.31707"
                    height="3.29268"
                    rx="0.658536"
                    transform="rotate(-90 25.561 55.6585)"
                    fill="#071048"
                  />
                  <rect
                    x="59.1465"
                    y="55.6585"
                    width="1.31707"
                    height="3.29268"
                    rx="0.658536"
                    transform="rotate(-90 59.1465 55.6585)"
                    fill="#071048"
                  />
                </svg>

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
                <svg
                  width="78"
                  height="76"
                  className="jss113 mt-5"
                  viewBox="0 0 78 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.799078 43.6028L12.4857 52.4903L24.8639 34.6634L14.1532 26.7188L0.799078 43.6028Z"
                    fill="#4BD1A0"
                    stroke="#263238"
                    stroke-width="0.343839"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M4.43587 42.4017L12.5394 48.6733L21.2123 36.1084L13.6757 30.5361L4.43587 42.4017Z"
                    fill="#B8E9D7"
                    stroke="#263238"
                    stroke-width="0.343839"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12.2923 36.3785C13.9873 36.4429 15.445 37.6693 15.6602 39.2203C15.9243 40.6819 14.6403 41.8112 13.0456 41.8067C11.3506 41.7423 9.89291 40.5158 9.6777 38.9649C9.46248 37.414 10.7466 36.2847 12.2923 36.3785Z"
                    fill="#4BD1A0"
                    stroke="#263238"
                    stroke-width="0.343839"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M50.6909 69.8001L59.754 62.6813L47.0441 48.1991L38.9672 54.7084L50.6909 69.8001Z"
                    fill="#4BD1A0"
                    stroke="#263238"
                    stroke-width="0.343839"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M50.2066 66.62L56.5764 61.5847L47.6595 51.3768L42.0136 56.0693L50.2066 66.62Z"
                    fill="#B8E9D7"
                    stroke="#263238"
                    stroke-width="0.343839"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M46.4635 58.632C46.7828 57.2617 48.0274 56.3889 49.3458 56.6177C50.6641 56.8465 51.3317 58.1289 51.0778 59.4328C50.7585 60.8031 49.5138 61.6758 48.1955 61.447C46.8771 61.2182 46.1441 60.0023 46.4635 58.632Z"
                    fill="#4BD1A0"
                    stroke="#263238"
                    stroke-width="0.343839"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M40 8.35867L44.5043 27.6629L76.9997 18.4934L72.4954 0.95874L40 8.35867Z"
                    fill="#4BD1A0"
                    stroke="#263238"
                    stroke-width="0.343839"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M45.3086 10.1283L48.526 23.6412L71.3693 17.0456L68.3128 4.8196L45.3086 10.1283Z"
                    fill="#B8E9D7"
                    stroke="#263238"
                    stroke-width="0.343839"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M60.7522 9.96738C62.6826 11.4152 63.1652 14.15 61.8783 15.9195C60.5913 17.6891 58.0174 18.0108 56.087 16.563C54.1566 15.1152 53.674 12.3804 54.9609 10.6109C56.2479 8.68045 58.8218 8.51956 60.7522 9.96738Z"
                    fill="#4BD1A0"
                    stroke="#263238"
                    stroke-width="0.343839"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
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
                          placeholder={userData?.displayName || "First Name"}
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          // value={userData?.displayName}
                        />
                        <div className="flex md:w-96 w-full justify-center items-center">
                          <div className="border border-gray-300 rounded-r-none text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500  p-2.5">
                            +1
                          </div>
                          <input
                            type="text"
                            id=""
                            aria-describedby="helper-text-explanation"
                            className={
                              validatePhNumber
                                ? "border-l-0 rounded-l-none border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 w-[100%] focus:border-blue-500 block p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                : "border-2 rounded-l-none  border-red-600 text-black text-sm rounded-lg focus:ring-red-500 w-[100%] focus:border-red-500 block p-2.5 bg-white dark:border-red-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500"
                            }
                            placeholder="(987) 654-3211"
                            value={formData.phoneNumber}
                            onChange={handlePhoneNumberChange}
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
                          placeholder={
                            userData?.displayName || "Street Address"
                          }
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                          // value={userData?.displayName}
                        />
                      </div>
                      <div className="flex md:flex-row flex-col w-full md:w-[100%] mt-5 space-y-5 md:space-y-0 space-x-0 md:space-x-10">
                        <input
                          type="apt"
                          id="apt"
                          aria-describedby="helper-text-explanation"
                          className=" border md:w-1/3 w-full border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                          className=" border  md:w-1/3 w-full border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                          className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 md:w-1/3 w-full focus:border-blue-500 block p-2.5 bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Postal Code"
                          value={formData.zip}
                          onChange={(e) =>
                            handleInputChange("zip", e.target.value)
                          }
                        />
                      </div>
                      <div className="md:block mt-5 flex flex-col justify-start items-start md:space-y-0">
                        <h3 className="mb-5 md:text-lg text-xl font-medium text-gray-900 ">
                          Select Pickup Method
                        </h3>
                        <ul className="lg:grid flex flex-col lg:space-y-0 space-y-5 justify-start  items-start w-full    md:grid-cols-3">
                          <li className="flex justify-start lg:w-fit md:w-[40vw] w-[100vw] items-start">
                            <input
                              type="radio"
                              id="hosting-small1"
                              name="hosting1"
                              defaultValue="hosting-small1"
                              className="hidden peer"
                              onChange={(e) =>
                                handleInputChange(
                                  "pickupType",
                                  "Direct handoff"
                                )
                              }
                              required
                            />
                            <label
                              htmlFor="hosting-small1"
                              className="inline-flex items-center justify-between w-[80%] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
                            >
                              <div className="block">
                                <div className="w-full text-lg font-bold">
                                  Direct handoff
                                </div>
                                <div className="w-full">
                                  Meet your Returnmate at the door to ensure a
                                  secure handoff
                                </div>
                              </div>
                            </label>
                          </li>
                          <li className="flex  lg:w-fit md:w-[40vw] w-[100vw] justify-start items-start ">
                            <input
                              type="radio"
                              id="hosting-medium1"
                              name="hosting1"
                              defaultValue="hosting-medium1"
                              className="hidden peer"
                              onChange={(e) =>
                                handleInputChange(
                                  "pickupType",
                                  "Leave on doorstep"
                                )
                              }
                            />
                            <label
                              htmlFor="hosting-medium1"
                              className="inline-flex items-center justify-between w-[80%] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  "
                            >
                              <div className="block">
                                <div className="w-full text-lg font-bold">
                                  Leave on doorstep
                                </div>
                                <div className="">
                                  Place items outside your door in advance of
                                  your pickup window
                                </div>
                              </div>
                            </label>
                          </li>
                        </ul>
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
                      formData.zip &&
                      formData.pickupType &&
                      validatePhNumber
                        ? setMultiStepForm(multiStepForm + 1)
                        : null
                    }
                    className={
                      formData.name &&
                      formData.phoneNumber &&
                      formData.address &&
                      formData.apt &&
                      formData.city &&
                      formData.zip &&
                      formData.pickupType &&
                      validatePhNumber
                        ? "bg-blue-500 py-2 px-4 text-xl text-white shadow-sm cursor-pointer shadow-black rounded-lg"
                        : "bg-blue-300 py-2 cursor-not-allowed px-4 text-xl text-white shadow-sm shadow-black rounded-lg"
                    }
                  >
                    Next
                  </div>
                </div>
              </div>
              <div className="hidden md:block bg-blue-100 w-[20%] h-fit border-blue-500 border text-gray-900 rounded-xl p-5">
                <svg
                  width="46"
                  height="54"
                  className="jss115"
                  viewBox="0 0 46 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.9994 42.7498H16.9994C18.1993 42.1497 15.9994 37.4999 14.7494 35.25C14.2494 35 12.7994 33.9 10.9994 31.5C8.74936 28.5 10.9994 19.4998 13.2494 17.2498C15.4994 14.9998 19.2494 11.9998 26.7494 13.4998C32.7494 14.6998 35.2494 20.9998 35.7494 23.9998L34.9994 29.9998L32.7494 33.7498L29.7494 37.4998L28.9994 42.7498Z"
                    fill="#635DF6"
                  ></path>
                  <path
                    d="M23.0405 11.6393C15.3975 11.6393 9.15332 17.8835 9.15332 25.5264C9.15332 29.5227 10.9017 33.3692 13.849 35.9668C16.0469 38.1647 15.8471 42.8604 15.7972 42.9103C15.7972 43.1601 15.8471 43.3599 16.0469 43.5597C16.1968 43.7096 16.4466 43.8095 16.6464 43.8095H29.3846C29.6344 43.8095 29.8342 43.7096 29.984 43.5597C30.1339 43.4099 30.2338 43.1601 30.2338 42.9103C30.2338 42.8604 29.984 38.1647 32.182 35.9668C32.2319 35.9168 32.2819 35.8668 32.3319 35.8169C35.2292 33.1693 36.9276 29.4228 36.9276 25.5264C36.9276 17.8835 30.6834 11.6393 23.0405 11.6393ZM31.0331 34.668C30.9831 34.7179 30.8832 34.8178 30.8832 34.8678C28.935 36.9658 28.5853 40.4126 28.5354 42.0611H17.4956C17.4456 40.4126 17.096 36.816 14.9979 34.668C12.3504 32.3701 10.8018 29.0232 10.8018 25.4765C10.8018 18.7327 16.2468 13.2878 22.9905 13.2878C29.7343 13.2878 35.1792 18.7327 35.1792 25.4765C35.1792 29.0232 33.6806 32.3701 31.0331 34.668Z"
                    fill="#071048"
                  ></path>
                  <path
                    d="M22.9908 15.1858C22.5412 15.1858 22.1416 15.5854 22.1416 16.035C22.1416 16.4846 22.5412 16.8842 22.9908 16.8842C28.0361 16.8842 32.0824 20.9804 32.0824 25.9758C32.0824 26.4254 32.482 26.825 32.9316 26.825C33.3812 26.825 33.7808 26.4254 33.7808 25.9758C33.8308 20.0313 28.9853 15.1858 22.9908 15.1858Z"
                    fill="white"
                  ></path>
                  <path
                    d="M28.5354 44.7587H17.4457C16.2968 44.7587 15.3477 45.7078 15.3477 46.8567C15.3477 48.0057 16.2968 48.9548 17.4457 48.9548H28.4855C29.6844 48.9048 30.6335 48.0057 30.6335 46.8567C30.6335 45.7078 29.6844 44.7587 28.5354 44.7587ZM28.5354 47.2064H17.4457C17.2459 47.2064 17.0461 47.0566 17.0461 46.8068C17.0461 46.557 17.1959 46.4072 17.4457 46.4072H28.4855C28.6853 46.4072 28.8851 46.557 28.8851 46.8068C28.8851 47.0566 28.7352 47.2064 28.5354 47.2064Z"
                    fill="#071048"
                  ></path>
                  <path
                    d="M26.8869 49.8038H19.0942C17.9452 49.8038 16.9961 50.7529 16.9961 51.9019C16.9961 53.0508 17.9452 53.9999 19.0942 53.9999H26.8869C28.0359 53.9999 28.985 53.0508 28.985 51.9019C28.985 50.703 28.0359 49.8038 26.8869 49.8038ZM26.8869 52.2515H19.0942C18.8943 52.2515 18.6945 52.1017 18.6945 51.8519C18.6945 51.6021 18.8444 51.4523 19.0942 51.4523H26.8869C27.0868 51.4523 27.2866 51.6021 27.2866 51.8519C27.2866 52.1017 27.0868 52.2515 26.8869 52.2515Z"
                    fill="#071048"
                  ></path>
                  <path
                    d="M22.9908 7.49307C23.4904 7.49307 23.84 7.09344 23.84 6.64385V0.849214C23.84 0.39963 23.4404 0 22.9908 0C22.5412 0 22.1416 0.39963 22.1416 0.849214V6.64385C22.1416 7.09344 22.5412 7.49307 22.9908 7.49307Z"
                    fill="#071048"
                  ></path>
                  <path
                    d="M37.1277 4.2959C36.728 3.99617 36.2285 4.14603 35.9787 4.49571L32.7817 9.29127C32.482 9.6909 32.5819 10.2404 32.9815 10.4902C33.1314 10.5901 33.2812 10.64 33.4311 10.64C33.7308 10.64 33.9806 10.4902 34.1304 10.2404L37.3275 5.44483C37.6272 5.09516 37.5273 4.54566 37.1277 4.2959Z"
                    fill="#071048"
                  ></path>
                  <path
                    d="M12.8498 10.4403C12.9997 10.4403 13.1495 10.3903 13.2994 10.2904C13.699 10.0406 13.7989 9.49115 13.5492 9.09152L10.452 4.246C10.2022 3.84637 9.65276 3.74646 9.25313 3.99623C8.8535 4.246 8.75359 4.79549 9.00336 5.19512L12.1005 10.0406C12.3003 10.3404 12.5501 10.4403 12.8498 10.4403Z"
                    fill="#071048"
                  ></path>
                  <path
                    d="M6.8058 15.7354L1.76047 12.9879C1.36084 12.7881 0.811348 12.9379 0.611533 13.3376C0.361764 13.7372 0.511625 14.2867 0.96121 14.4865L6.00654 17.234C6.1564 17.2839 6.25631 17.3339 6.40617 17.3339C6.7059 17.3339 7.00562 17.184 7.15548 16.8843C7.3553 16.4847 7.20543 15.9352 6.8058 15.7354Z"
                    fill="#071048"
                  ></path>
                  <path
                    d="M45.4203 13.3376C45.2205 12.9379 44.671 12.7881 44.2714 12.9879L39.1761 15.7354C38.7765 15.9352 38.6266 16.4847 38.8264 16.8843C38.9763 17.184 39.276 17.3339 39.5757 17.3339C39.7256 17.3339 39.8754 17.2839 39.9753 17.234L45.0706 14.4865C45.4703 14.2867 45.6201 13.7372 45.4203 13.3376Z"
                    fill="#071048"
                  ></path>
                </svg>
                <div className="text-xl font-bold">Pro Tips</div>
                <div className="mt-4">
                  You only need to enter your pickup details once. We'll save it
                  for next time
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
                  <div className="container md:mb-24 md:mt-5  my-5 mx-auto ">
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
              <div className="hidden lg:block bg-blue-100 w-[20%] h-fit border-blue-500 border text-gray-900 rounded-xl p-5">
                <div className="flex space-x-5">
                  <img
                    className="h-14 w-14 mb-2"
                    src={"https://www.returnmates.com/assets/images/monica.png"}
                  />
                  <div>
                    <h1 className=" font-bold text-xl">Monica H.</h1>
                    <h1 className="">Santa Monica, CA</h1>
                  </div>
                </div>
                <div className="text-xl font-bold">
                  Wow, what a seamless service!
                </div>
                <div className="mt-4">
                  “Revolutionizing online shopping, seriously never have to
                  worry about wrong/ broken/ disliked purchases again!”
                </div>
                <div className="flex mt-5 space-x-1">
                  <svg
                    width="14"
                    height="14"
                    className="jss316"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6285 5.00826L9.32467 4.35084L7.39559 0.241844C7.2515 -0.0649896 6.74809 -0.0649896 6.604 0.241844L4.6755 4.35084L0.37167 5.00826C0.0181704 5.06251 -0.122996 5.49243 0.12492 5.74618L3.25159 8.95101L2.5125 13.4818C2.45359 13.8417 2.838 14.1118 3.15592 13.935L7.00009 11.8105L10.8443 13.9356C11.1593 14.1106 11.5472 13.8458 11.4877 13.4823L10.7486 8.95159L13.8753 5.74676C14.1232 5.49243 13.9814 5.06251 13.6285 5.00826Z"
                      fill="#4BD1A0"
                    ></path>
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="jss316"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6285 5.00826L9.32467 4.35084L7.39559 0.241844C7.2515 -0.0649896 6.74809 -0.0649896 6.604 0.241844L4.6755 4.35084L0.37167 5.00826C0.0181704 5.06251 -0.122996 5.49243 0.12492 5.74618L3.25159 8.95101L2.5125 13.4818C2.45359 13.8417 2.838 14.1118 3.15592 13.935L7.00009 11.8105L10.8443 13.9356C11.1593 14.1106 11.5472 13.8458 11.4877 13.4823L10.7486 8.95159L13.8753 5.74676C14.1232 5.49243 13.9814 5.06251 13.6285 5.00826Z"
                      fill="#4BD1A0"
                    ></path>
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="jss316"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6285 5.00826L9.32467 4.35084L7.39559 0.241844C7.2515 -0.0649896 6.74809 -0.0649896 6.604 0.241844L4.6755 4.35084L0.37167 5.00826C0.0181704 5.06251 -0.122996 5.49243 0.12492 5.74618L3.25159 8.95101L2.5125 13.4818C2.45359 13.8417 2.838 14.1118 3.15592 13.935L7.00009 11.8105L10.8443 13.9356C11.1593 14.1106 11.5472 13.8458 11.4877 13.4823L10.7486 8.95159L13.8753 5.74676C14.1232 5.49243 13.9814 5.06251 13.6285 5.00826Z"
                      fill="#4BD1A0"
                    ></path>
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="jss316"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6285 5.00826L9.32467 4.35084L7.39559 0.241844C7.2515 -0.0649896 6.74809 -0.0649896 6.604 0.241844L4.6755 4.35084L0.37167 5.00826C0.0181704 5.06251 -0.122996 5.49243 0.12492 5.74618L3.25159 8.95101L2.5125 13.4818C2.45359 13.8417 2.838 14.1118 3.15592 13.935L7.00009 11.8105L10.8443 13.9356C11.1593 14.1106 11.5472 13.8458 11.4877 13.4823L10.7486 8.95159L13.8753 5.74676C14.1232 5.49243 13.9814 5.06251 13.6285 5.00826Z"
                      fill="#4BD1A0"
                    ></path>
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="jss316"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6285 5.00826L9.32467 4.35084L7.39559 0.241844C7.2515 -0.0649896 6.74809 -0.0649896 6.604 0.241844L4.6755 4.35084L0.37167 5.00826C0.0181704 5.06251 -0.122996 5.49243 0.12492 5.74618L3.25159 8.95101L2.5125 13.4818C2.45359 13.8417 2.838 14.1118 3.15592 13.935L7.00009 11.8105L10.8443 13.9356C11.1593 14.1106 11.5472 13.8458 11.4877 13.4823L10.7486 8.95159L13.8753 5.74676C14.1232 5.49243 13.9814 5.06251 13.6285 5.00826Z"
                      fill="#4BD1A0"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ) : null}
          {multiStepForm == 4 ? (
            <div className="flex justify-around">
              <div className="lg:w-[50%] w-full">
                <div>
                  <div className="flex flex-col lg:items-start items-center lg:justify-start justify-center mb-10">
                    <div className="text-black md:text-5xl text-3xl mb-2">
                      Package info
                    </div>
                    <div className="text-gray-500 md:text-start text-center">
                      Describe your returns and we'll handle the label printing
                      and repackaging
                    </div>
                  </div>

                  <div className="lg:block flex flex-col justify-center items-center md:space-y-0">
                    <h3 className="mb-5 lg:text-lg text-xl font-medium text-gray-900 ">
                      Select label type
                    </h3>
                    <ul className="md:grid flex flex-col md:space-y-0 space-y-5  justify-center items-center md:w-full w-[40vh]   md:grid-cols-3">
                      <li className="flex lg:justify-start justify-center items-center lg:items-start">
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
                      <li className="flex lg:justify-start justify-center items-center lg:items-start">
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
                  </div>
                </div>
                {formData.labelType == "Amazon QR code" ||
                formData.labelType == "Digital label" ? (
                  <div className="mb-3 flex flex-col justify-start items-start">
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
                ) : null}
                <div className="flex flex-col md:px-0 px-9 lg:justify-start justify-center items-center lg:items-start">
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
                      formData.description &&
                      labelfilerequires
                        ? setMultiStepForm(multiStepForm + 1)
                        : null
                    }
                    className={
                      formData.labelType &&
                      formData.description &&
                      labelfilerequires
                        ? "bg-blue-500 py-2 px-4 text-xl text-white shadow-sm cursor-pointer shadow-black rounded-lg"
                        : "bg-blue-300 py-2 px-4 text-xl text-white shadow-sm cursor-not-allowed shadow-black rounded-lg"
                    }
                  >
                    Next
                  </div>
                </div>
              </div>
              <div className="hidden lg:block bg-blue-100 w-[20%] h-fit border-blue-500 border text-gray-900 rounded-xl p-5">
                <svg
                  width="72"
                  height="93"
                  className="jss122"
                  viewBox="0 0 72 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.6103 3.49858C48.8719 5.45994 52.653 12.9411 58.1515 18.1019C62.7875 22.4532 69.2593 25.2652 71.2534 31.3212C73.2518 37.39 69.6477 43.5345 68.6024 49.8408C67.3093 57.6414 69.0253 66.1963 64.4112 72.5978C58.9793 80.1339 50.8596 87.115 41.6103 87.2889C32.3325 87.4634 25.4803 79.2346 18.1819 73.4671C11.1912 67.9426 0.996344 63.4666 0.192102 54.5581C-0.625781 45.4985 11.4122 40.7009 14.4504 32.1332C17.3339 24.0017 11.1322 13.2472 17.0558 7.00196C22.907 0.833069 33.4259 1.28798 41.6103 3.49858Z"
                    fill="#F9F7F4"
                  ></path>
                  <path
                    d="M35.9997 87.2916C40.0958 87.2916 43.4163 84.2478 43.4163 80.493C43.4163 76.7382 40.0958 73.6944 35.9997 73.6944C31.9036 73.6944 28.583 76.7382 28.583 80.493C28.583 84.2478 31.9036 87.2916 35.9997 87.2916Z"
                    fill="#4BD1A0"
                  ></path>
                  <path
                    d="M11.2772 58.8611C14.6907 58.8611 17.4578 56.3707 17.4578 53.2986C17.4578 50.2265 14.6907 47.7361 11.2772 47.7361C7.86381 47.7361 5.09668 50.2265 5.09668 53.2986C5.09668 56.3707 7.86381 58.8611 11.2772 58.8611Z"
                    fill="#635DF6"
                  ></path>
                  <path
                    d="M47.7424 30.4305C50.1318 30.4305 52.0688 28.7703 52.0688 26.7222C52.0688 24.6741 50.1318 23.0139 47.7424 23.0139C45.353 23.0139 43.416 24.6741 43.416 26.7222C43.416 28.7703 45.353 30.4305 47.7424 30.4305Z"
                    fill="#4BD1A0"
                  ></path>
                  <path
                    d="M55.8438 66.6465L55.8444 66.6462C59.0751 65.0742 61.2108 62.2719 62.2715 58.3132C63.4181 54.0339 62.9742 50.2979 60.8736 47.1629C58.8256 44.057 55.5706 41.9311 51.1729 40.7528C48.0102 39.9053 45.1076 39.7755 42.4776 40.3898C39.9088 40.9717 37.7479 42.1479 36.0112 43.9226L36.0059 43.9282C34.3144 45.7108 33.169 47.9069 32.5629 50.501L32.4528 50.9724L32.9204 51.0977L42.6502 53.7048L43.1332 53.8342L43.2626 53.3512C43.6209 52.0139 44.2601 51.1232 45.1454 50.6032L45.1455 50.6033L45.1559 50.5969C46.0481 50.0432 47.1421 49.912 48.4922 50.2737C49.7604 50.6136 50.5878 51.2368 51.0549 52.1113C51.5262 52.9938 51.6173 54.0837 51.2572 55.4277C51.0006 56.3855 50.5997 57.1085 50.0749 57.627C49.5531 58.1426 48.8825 58.4819 48.0399 58.6334L48.0352 58.6343C46.3249 58.9587 43.9503 58.7375 40.8748 57.9134L37.2488 56.9418L36.7528 56.8089L36.6331 57.3082L33.8783 68.7982L33.7647 69.2717L34.2351 69.3977L43.3001 71.8267L43.7524 71.9479L43.9029 71.5045L45.2901 67.4198C49.2705 68.3634 52.7994 68.1226 55.8438 66.6465ZM30.2696 83.5712L30.2742 83.5791L30.2791 83.5867C31.2397 85.0832 32.701 86.0797 34.6152 86.5926C36.492 87.0955 38.2188 86.9511 39.7602 86.121L39.7608 86.1207C41.3449 85.2649 42.3802 83.9603 42.8434 82.2314C43.3162 80.467 43.0813 78.7998 42.1371 77.2643C41.2298 75.7333 39.8116 74.7216 37.931 74.2177C36.0117 73.7034 34.2394 73.859 32.6481 74.7186L32.6405 74.7229C31.0947 75.5933 30.0812 76.9251 29.6095 78.6854C29.1478 80.4086 29.368 82.0478 30.2696 83.5712Z"
                    fill="white"
                    stroke="#071048"
                  ></path>
                  <path
                    d="M27.6892 41.8944L27.6898 41.8941C30.4113 40.5794 32.2057 38.2309 33.0923 34.9222C34.0499 31.3484 33.6743 28.2168 31.9004 25.5853C30.1728 22.9814 27.4331 21.2019 23.7457 20.2138C21.094 19.5033 18.6564 19.3903 16.4452 19.9012C14.2869 20.3848 12.469 21.367 11.0086 22.8521L11.0033 22.8576C9.58128 24.3491 8.62052 26.1868 8.11431 28.3554L8.00428 28.8268L8.47181 28.9521L16.6001 31.13L17.083 31.2594L17.2124 30.7765C17.5056 29.6822 18.027 28.9644 18.742 28.5472L18.7421 28.5473L18.7525 28.5409C19.4731 28.0966 20.3623 27.9878 21.4746 28.2858C22.5181 28.5655 23.1885 29.073 23.5663 29.7757C23.9482 30.4858 24.027 31.3679 23.7321 32.4688C23.5219 33.253 23.1945 33.8385 22.7702 34.2557C22.3487 34.67 21.8052 34.9445 21.1157 35.0669L21.111 35.0677C19.7008 35.3319 17.7313 35.1489 15.1663 34.4616L12.1371 33.6499L11.6411 33.517L11.5215 34.0164L9.23455 43.5609L9.1211 44.0343L9.59137 44.1604L17.1643 46.1895L17.6164 46.3106L17.7671 45.8675L18.8959 42.5476C22.2047 43.3196 25.1464 43.1185 27.6892 41.8944ZM6.24803 55.8964L6.25268 55.9042L6.25761 55.9118C7.07439 57.1763 8.31413 58.0165 9.92919 58.4492C11.5135 58.8737 12.9769 58.7558 14.2844 58.0564L14.285 58.0561C15.6269 57.3361 16.5055 56.2342 16.8967 54.7745C17.2955 53.2861 17.0939 51.8763 16.2917 50.5794C15.5196 49.2855 14.3153 48.4319 12.7274 48.0064C11.1073 47.5723 9.60576 47.6997 8.25696 48.4234H8.25692L8.24927 48.4277C6.93902 49.1606 6.07978 50.2854 5.68209 51.7696C5.29249 53.2236 5.48173 54.6098 6.24803 55.8964Z"
                    fill="white"
                    stroke="#071048"
                  ></path>
                  <path
                    d="M59.0766 19.1067L59.0773 19.1064C61.0139 18.1708 62.2853 16.4996 62.9105 14.1662C63.5845 11.6508 63.3234 9.4285 62.0622 7.55713C60.8369 5.7106 58.8984 4.45708 56.311 3.76381C54.451 3.26542 52.7323 3.18376 51.1673 3.54527C49.6419 3.88717 48.3527 4.58276 47.3164 5.6366V5.63656L47.311 5.64215C46.3029 6.69952 45.6236 8.00104 45.2664 9.53117L45.1564 10.0025L45.6239 10.1278L51.2692 11.6404L51.7521 11.7698L51.8815 11.2869C52.0774 10.5558 52.4195 10.0958 52.8733 9.83097L52.8734 9.8311L52.8838 9.8247C53.3403 9.54317 53.9126 9.46625 54.6546 9.66509C55.3486 9.85104 55.7743 10.1819 56.0124 10.6246C56.2545 11.0749 56.3122 11.6454 56.1145 12.3832C55.9739 12.908 55.7579 13.2884 55.487 13.5548C55.2188 13.8184 54.8705 13.9965 54.4182 14.0768V14.0767L54.4135 14.0776C53.4674 14.2549 52.1258 14.1344 50.3524 13.6592L48.2486 13.0955L47.7526 12.9626L47.633 13.4619L46.0447 20.0909L45.9312 20.5643L46.4015 20.6903L51.661 22.0996L52.1132 22.2208L52.2638 21.7776L53.0035 19.6022C55.2728 20.1079 57.3073 19.9584 59.0766 19.1067ZM43.9878 28.7719L43.9924 28.7797L43.9973 28.7873C44.5882 29.7021 45.4837 30.3055 46.6361 30.6143C47.768 30.9176 48.8251 30.8354 49.7725 30.3287L49.773 30.3283C50.7417 29.8086 51.3796 29.0091 51.6622 27.9541C51.9498 26.8808 51.8042 25.8585 51.2251 24.9217C50.6658 23.9851 49.7941 23.3707 48.6586 23.0665C47.5011 22.7563 46.4176 22.8456 45.442 23.369L45.4343 23.3732C44.487 23.9031 43.8649 24.7189 43.5784 25.788C43.2972 26.8374 43.4343 27.8426 43.9878 28.7719Z"
                    fill="white"
                    stroke="#071048"
                  ></path>
                  <path
                    d="M35.9997 87.2916C40.0958 87.2916 43.4163 84.2478 43.4163 80.493C43.4163 76.7382 40.0958 73.6944 35.9997 73.6944C31.9036 73.6944 28.583 76.7382 28.583 80.493C28.583 84.2478 31.9036 87.2916 35.9997 87.2916Z"
                    fill="#4BD1A0"
                  ></path>
                  <path
                    d="M11.2772 58.8611C14.6907 58.8611 17.4578 56.3707 17.4578 53.2986C17.4578 50.2265 14.6907 47.7361 11.2772 47.7361C7.86381 47.7361 5.09668 50.2265 5.09668 53.2986C5.09668 56.3707 7.86381 58.8611 11.2772 58.8611Z"
                    fill="#635DF6"
                  ></path>
                  <path
                    d="M47.7424 30.4305C50.1318 30.4305 52.0688 28.7703 52.0688 26.7222C52.0688 24.6741 50.1318 23.0139 47.7424 23.0139C45.353 23.0139 43.416 24.6741 43.416 26.7222C43.416 28.7703 45.353 30.4305 47.7424 30.4305Z"
                    fill="#4BD1A0"
                  ></path>
                  <path
                    d="M55.8438 66.6465L55.8444 66.6462C59.0751 65.0742 61.2108 62.2719 62.2715 58.3132C63.4181 54.0339 62.9742 50.2979 60.8736 47.1629C58.8256 44.057 55.5706 41.9311 51.1729 40.7528C48.0102 39.9053 45.1076 39.7755 42.4776 40.3898C39.9088 40.9717 37.7479 42.1479 36.0112 43.9226L36.0059 43.9282C34.3144 45.7108 33.169 47.9069 32.5629 50.501L32.4528 50.9724L32.9204 51.0977L42.6502 53.7048L43.1332 53.8342L43.2626 53.3512C43.6209 52.0139 44.2601 51.1232 45.1454 50.6032L45.1455 50.6033L45.1559 50.5969C46.0481 50.0432 47.1421 49.912 48.4922 50.2737C49.7604 50.6136 50.5878 51.2368 51.0549 52.1113C51.5262 52.9938 51.6173 54.0837 51.2572 55.4277C51.0006 56.3855 50.5997 57.1085 50.0749 57.627C49.5531 58.1426 48.8825 58.4819 48.0399 58.6334L48.0352 58.6343C46.3249 58.9587 43.9503 58.7375 40.8748 57.9134L37.2488 56.9418L36.7528 56.8089L36.6331 57.3082L33.8783 68.7982L33.7647 69.2717L34.2351 69.3977L43.3001 71.8267L43.7524 71.9479L43.9029 71.5045L45.2901 67.4198C49.2705 68.3634 52.7994 68.1226 55.8438 66.6465ZM30.2696 83.5712L30.2742 83.5791L30.2791 83.5867C31.2397 85.0832 32.701 86.0797 34.6152 86.5926C36.492 87.0955 38.2188 86.9511 39.7602 86.121L39.7608 86.1207C41.3449 85.2649 42.3802 83.9603 42.8434 82.2314C43.3162 80.467 43.0813 78.7998 42.1371 77.2643C41.2298 75.7333 39.8116 74.7216 37.931 74.2177C36.0117 73.7034 34.2394 73.859 32.6481 74.7186L32.6405 74.7229C31.0947 75.5933 30.0812 76.9251 29.6095 78.6854C29.1478 80.4086 29.368 82.0478 30.2696 83.5712Z"
                    stroke="#071048"
                  ></path>
                  <path
                    d="M27.6892 41.8944L27.6898 41.8941C30.4113 40.5794 32.2057 38.2309 33.0923 34.9222C34.0499 31.3484 33.6743 28.2168 31.9004 25.5853C30.1728 22.9814 27.4331 21.2019 23.7457 20.2138C21.094 19.5033 18.6564 19.3903 16.4452 19.9012C14.2869 20.3848 12.469 21.367 11.0086 22.8521L11.0033 22.8576C9.58128 24.3491 8.62052 26.1868 8.11431 28.3554L8.00428 28.8268L8.47181 28.9521L16.6001 31.13L17.083 31.2594L17.2124 30.7765C17.5056 29.6822 18.027 28.9644 18.742 28.5472L18.7421 28.5473L18.7525 28.5409C19.4731 28.0966 20.3623 27.9878 21.4746 28.2858C22.5181 28.5655 23.1885 29.073 23.5663 29.7757C23.9482 30.4858 24.027 31.3679 23.7321 32.4688C23.5219 33.253 23.1945 33.8385 22.7702 34.2557C22.3487 34.67 21.8052 34.9445 21.1157 35.0669L21.111 35.0677C19.7008 35.3319 17.7313 35.1489 15.1663 34.4616L12.1371 33.6499L11.6411 33.517L11.5215 34.0164L9.23455 43.5609L9.1211 44.0343L9.59137 44.1604L17.1643 46.1895L17.6164 46.3106L17.7671 45.8675L18.8959 42.5476C22.2047 43.3196 25.1464 43.1185 27.6892 41.8944ZM6.24803 55.8964L6.25268 55.9042L6.25761 55.9118C7.07439 57.1763 8.31413 58.0165 9.92919 58.4492C11.5135 58.8737 12.9769 58.7558 14.2844 58.0564L14.285 58.0561C15.6269 57.3361 16.5055 56.2342 16.8967 54.7745C17.2955 53.2861 17.0939 51.8763 16.2917 50.5794C15.5196 49.2855 14.3153 48.4319 12.7274 48.0064C11.1073 47.5723 9.60576 47.6997 8.25696 48.4234H8.25692L8.24927 48.4277C6.93902 49.1606 6.07978 50.2854 5.68209 51.7696C5.29249 53.2236 5.48173 54.6098 6.24803 55.8964Z"
                    stroke="#071048"
                  ></path>
                  <path
                    d="M59.0766 19.1067L59.0773 19.1064C61.0139 18.1708 62.2853 16.4996 62.9105 14.1662C63.5845 11.6508 63.3234 9.4285 62.0622 7.55713C60.8369 5.7106 58.8984 4.45708 56.311 3.76381C54.451 3.26542 52.7323 3.18376 51.1673 3.54527C49.6419 3.88717 48.3527 4.58276 47.3164 5.6366V5.63656L47.311 5.64215C46.3029 6.69952 45.6236 8.00104 45.2664 9.53117L45.1564 10.0025L45.6239 10.1278L51.2692 11.6404L51.7521 11.7698L51.8815 11.2869C52.0774 10.5558 52.4195 10.0958 52.8733 9.83097L52.8734 9.8311L52.8838 9.8247C53.3403 9.54317 53.9126 9.46625 54.6546 9.66509C55.3486 9.85104 55.7743 10.1819 56.0124 10.6246C56.2545 11.0749 56.3122 11.6454 56.1145 12.3832C55.9739 12.908 55.7579 13.2884 55.487 13.5548C55.2188 13.8184 54.8705 13.9965 54.4182 14.0768V14.0767L54.4135 14.0776C53.4674 14.2549 52.1258 14.1344 50.3524 13.6592L48.2486 13.0955L47.7526 12.9626L47.633 13.4619L46.0447 20.0909L45.9312 20.5643L46.4015 20.6903L51.661 22.0996L52.1132 22.2208L52.2638 21.7776L53.0035 19.6022C55.2728 20.1079 57.3073 19.9584 59.0766 19.1067ZM43.9878 28.7719L43.9924 28.7797L43.9973 28.7873C44.5882 29.7021 45.4837 30.3055 46.6361 30.6143C47.768 30.9176 48.8251 30.8354 49.7725 30.3287L49.773 30.3283C50.7417 29.8086 51.3796 29.0091 51.6622 27.9541C51.9498 26.8808 51.8042 25.8585 51.2251 24.9217C50.6658 23.9851 49.7941 23.3707 48.6586 23.0665C47.5011 22.7563 46.4176 22.8456 45.442 23.369L45.4343 23.3732C44.487 23.9031 43.8649 24.7189 43.5784 25.788C43.2972 26.8374 43.4343 27.8426 43.9878 28.7719Z"
                    stroke="#071048"
                  ></path>
                </svg>
                <div className="text-xl font-bold">
                  How do I get my return label?
                </div>
                <div className="mt-4">
                  Simply go to the returns page of the retailer you purchased
                  from. NEED HELP? Click the chat button below
                </div>
              </div>
            </div>
          ) : null}
          {multiStepForm == 5 ? (
            <div className="lg:w-fit w-full md:ml-20 ml-0 flex lg:flex-row flex-col justify-center lg:justify-between">
              <div className="lg:w-[50vw] w-full px-5 md:px-0 ">
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
                      <div className="truncate md:w-fit w-[75vw]">
                        {" "}
                        {formData.address}
                      </div>
                    </div>

                    <div
                      onClick={() => setMultiStepForm(2)}
                      className="self-end text-blue-500 cursor-pointer font-semibold text-xl"
                    >
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

                    <div
                      onClick={() => setMultiStepForm(1)}
                      className="self-end text-blue-500 cursor-pointer font-semibold text-xl"
                    >
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

                    <div
                      onClick={() => setMultiStepForm(4)}
                      className="self-end text-blue-500 cursor-pointer font-semibold text-xl"
                    >
                      Edit
                    </div>
                  </div>
                  <hr className="border-1 border-black w-full my-5" />
                </div>
                <Button
                  variant="contained"
                  sx={{
                    background: "#1976D2",
                    color: "#FFFFFF",
                    // fontFamily: "Arial, sans-serif", // Custom font family
                    fontSize: "16px", // Custom font size
                    // fontWeight: 400, // Custom font weight
                    // textTransform: "uppercase", // Uppercase text
                    textTransform: "none",
                    borderRadius: "8px", // Rounded corners
                    "&:hover": {
                      background: "#1565C0",
                    },
                  }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
                {/* <div className="flex flex-col justify-around items-start">
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
                      formData.pickupType &&
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
                      formData.pickupType &&
                      selectedPlan
                        ? formSubmited == false
                          ? "w-full my-5 border-blue-500 bg-blue-500 text-white text-2xl font-semibold py-2 rounded-lg border hover:text-blue-500 hover:bg-white ease-in duration-300"
                          : "w-full my-5  bg-green-500 cursor-not-allowed text-white text-2xl font-semibold py-2 rounded-lg border hover:text-blue-500 hover:bg-white ease-in duration-300"
                        : "w-full my-5 cursor-not-allowed border-blue-500 bg-blue-300 text-white text-2xl font-semibold py-2 rounded-lg border hover:text-blue-500 hover:bg-white ease-in duration-300"
                    }
                  >
                    {formSubmited == true ? "Success" : " Confirm Pickup"}
                  </button>
                </div> */}
              </div>
              <div className="lg:w-[50vw] lg:mt-0 mt-10 md:mb-0 mb-10 w-full md:px-0 px-5   flex justify-center items-center">
                <div className="border-blue-500 border-2 rounded-lg bg-blue-200 px-5 py-20">
                  <div className="text-3xl font-bold tracking-wide">
                    {" "}
                    Order summary{" "}
                  </div>
                  <hr className="border-gray-500 my-5 border" />
                  <div className="flex justify-between text-2xl font-semibold mb-5">
                    <div>{selectedPlan}</div>
                    <div>
                      $
                      {selectedPlan == "Non-Member"
                        ? 9.99
                        : selectedPlan == "Monthly Package"
                        ? 19
                        : selectedPlan == "3 Months Package"
                        ? 48.85
                        : selectedPlan == "Yearly"
                        ? 159.6
                        : 0}
                    </div>
                  </div>
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
