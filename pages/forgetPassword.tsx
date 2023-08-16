import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { error } from "console";

const forgetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    firebase
      .auth()
      .sendPasswordResetEmail(email)
        .then((result: any) => {
        setEmail("")
        setPassword("")
            
        toast.success("Recovery Email has been Sent....!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error: any) => {
        console.log(error.message);
        toast.error(error.message.split(":")[1], {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };


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
      <div>
        <div className="mt-24">
          <section className="h-screen">
            <div className="container h-full px-6 py-24">
              <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                {/* Left column container with background*/}
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                  <img
                    src={"/images/courier1.jpg"}
                    className="w-full"
                    alt="Phone image"
                  />
                </div>
                <div className="md:w-8/12 lg:ml-6 h-[40vh] lg:w-5/12 bg-blue-50 shadow-2xl shadow-blue-[#0099ff] rounded-lg   px-10">
                  <form onSubmit={handleSignIn}>
                   
                  <div className="text-center mt-5 mb-3 animate-pulse text-3xl font-semibold">
                    Recover Password
                  </div>
                    <div className="my-5">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-xl font-medium text-gray-900 "
                      >
                        Password
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-[#0099ff] hover:bg-[#0099ff] hover:text-white border border-[#0099ff] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default forgetPassword;
