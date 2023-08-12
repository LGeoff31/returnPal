import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Layout from "./components/Layout";
import FacebookLogin from "react-facebook-login";

const signIn = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fbAuth,setfbAuth] = useState(false)

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
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        console.log(result.user);
        localStorage.setItem("userInfo", JSON.stringify(result.user));
        toast.success("Authenticated Successfully....!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("Registered successfully!");
      })
      .catch((error: any) => {
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
        console.error("Sign-in error:", error);
      });
  };

  const googleAuth = () => {
    console.log("hello");
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        toast.success("Authenticated Successfully....!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const user = result.user;
        localStorage.setItem("userInfo", JSON.stringify(result.user));
        router.push("/");
        console.log(user);
      })
      .catch((error) => {
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
        console.error("Google sign-in error:", error);
      });
  };

  const handleFacebookSignIn = (e:any) => {
   
        console.log(e)
        toast.success("Authenticated Successfully....!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        displayName: e.name,
        photoURL: e.picture.data.url
      })
    );
        router.push("/");
        // console.log("Signed in with Facebook:", user);
      
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <ToastContainer
          position="top-center"
          className={"z-50 mt-20"}
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
                  <div className="md:w-8/12 lg:ml-6 lg:w-5/12 bg-blue-50 shadow-2xl shadow-blue-[#0099ff] rounded-lg   px-10 py-16">
                    <div className="text-center mb-3 animate-pulse text-3xl font-semibold -mt-10">
                      Registration Form
                    </div>
                    <form onSubmit={handleSignIn}>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="peer block min-h-[auto] text-white border-b border-[#0099ff] w-full  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black placeholder:opacity-100 placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput3"
                          placeholder="Email address"
                        />
                        <label
                          htmlFor="exampleFormControlInput3"
                          className="pointer-events-none text-xl font-semibold absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#0099ff] dark:peer-focus:text-primary"
                        >
                          Enter Your Email address
                        </label>
                      </div>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="peer block min-h-[auto] w-full  border-b  border-[#0099ff]  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput33"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="exampleFormControlInput33"
                          className="pointer-events-none text-xl font-semibold absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#0099ff] dark:peer-focus:text-primary"
                        >
                          Password
                        </label>
                      </div>
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center mr-4">
                          <input
                            id="green-checkbox"
                            type="checkbox"
                            required
                            className="w-4 h-4 text-blue-600  rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-blue-600"
                          />
                          <label
                            htmlFor="green-checkbox"
                            className="ml-2 text-sm font-medium text-black"
                          >
                            Remember Me
                          </label>
                        </div>
                        <Link href="login" legacyBehavior>
                          <a className="text-lg font-semibold underline cursor-pointer ease-in duration-300 hover:scale-110 text-blue-500">
                            Login Here
                          </a>
                        </Link>
                      </div>
                      <button
                        type="submit"
                        className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-[#0099ff] hover:bg-[#0099ff] hover:text-white border border-[#0099ff] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Sign in
                      </button>
                      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold dark:text-black">
                          OR
                        </p>
                      </div>
                      <FacebookLogin
                        appId="2153060351549383"
                        autoLoad={fbAuth}
                        fields="name,email,picture"
                        buttonStyle={{display:"none"}}
                        // onClick={componentClicked}
                        callback={handleFacebookSignIn}
                      />
                      <a
                        className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        style={{ backgroundColor: "#3b5998" }}
                        href="#!"
                        role="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={()=> setfbAuth(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        Continue with Facebook
                      </a>
                      <a
                        className="mb-3 flex w-full items-center justify-center rounded bg-red-500 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dd4b39] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.3),0_4px_18px_0_rgba(221,75,57,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.3),0_4px_18px_0_rgba(221,75,57,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.3),0_4px_18px_0_rgba(221,75,57,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(221,75,57,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.2),0_4px_18px_0_rgba(221,75,57,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.2),0_4px_18px_0_rgba(221,75,57,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.2),0_4px_18px_0_rgba(221,75,57,0.1)]"
                        style={{ backgroundColor: "white", color: "black" }}
                        href="#!"
                        role="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={googleAuth}
                      >
                        {/* Google */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-3.5 w-3.5"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#FFC107"
                            d="M43.1 20.6c0-1.3-.1-2.5-.3-3.7H24v7h11c-.5 2.4-2.1 4.4-4.3 5.5v4.5h7.1c4.2-3.9 6.6-9.6 6.6-16.3z"
                          />
                          <path
                            fill="#FF3D00"
                            d="M24 48c6.9 0 13.2-2.4 18.2-6.4l-7.1-5.5c-2 1.4-4.6 2.3-7.5 2.3-5.7 0-10.6-3.8-12.4-9.1H4.7v5.7c4.9 9.6 14.4 16.1 25.3 16.1z"
                          />
                          <path
                            fill="#4CAF50"
                            d="M11.6 28c-1.2-3.5-1.2-7.3 0-10.8V11H4.7c-2.8 4.6-4.4 9.9-4.7 15.4l11.6-.4z"
                          />
                          <path
                            fill="#1976D2"
                            d="M24 5.4c3.3 0 6.3 1.1 8.7 3l6.4-6.4C37.3 1.7 31.6 0 24 0 14.7 0 6.5 5.5 2.7 13.8l11.6.4c1.8-5.3 6.7-8.8 12.7-8.8z"
                          />
                        </svg>
                        Continue with Google
                      </a>
                      <a
                        className="mb-3 flex w-full items-center justify-center rounded bg-black px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-gray-800 hover:shadow-[0_8px_9px_-4px_rgba(0, 0, 0, 0.3), 0_4px_18px_0_rgba(0, 0, 0, 0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(0, 0, 0, 0.3), 0_4px_18px_0_rgba(0, 0, 0, 0.2)] focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-[0_8px_9px_-4px_rgba(0, 0, 0, 0.3), 0_4px_18px_0_rgba(0, 0, 0, 0.2)] dark:shadow-[0_4px_9px_-4px_rgba(0, 0, 0, 0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(0, 0, 0, 0.2), 0_4px_18px_0_rgba(0, 0, 0, 0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(0, 0, 0, 0.2), 0_4px_18px_0_rgba(0, 0, 0, 0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(0, 0, 0, 0.2), 0_4px_18px_0_rgba(0, 0, 0, 0.1)]"
                        style={{ backgroundColor: "#000000" }}
                        href="#!"
                        role="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        {/* Apple */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-3.5 w-3.5"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#A4A4A4"
                            d="M33.826 19.985c0-5.282 2.94-9.794 7.294-12.134-2.666-4.325-6.529-7.064-11.12-7.064-6.733 0-12.521 4.272-14.76 10.25-6.668 1.145-11.676 6.12-11.676 12.258 0 6.605 5.32 11.985 11.927 11.985h.057c.17-.002.34-.015.508-.04.343.793.74 1.56 1.19 2.267-.29.43-.57.88-.83 1.342-2.207 4.232-.736 8.973 3.516 11.24 1.766 1.108 3.87 1.705 6.052 1.717 2.175-.01 4.218-.605 5.986-1.705 4.252-2.267 5.733-6.978 3.527-11.21-.25-.46-.54-.912-.86-1.34.45-.71.85-1.478 1.19-2.27.17.022.338.034.508.038 6.608 0 11.93-5.38 11.93-11.986 0-6.59-5.318-11.973-11.93-11.982h-.057c-.214 0-.426.012-.64.04-5.4 0-8.984 2.72-11.654 7.057 4.346 2.338 7.287 6.85 7.287 12.133 0 7.27-5.924 13.186-13.195 13.186C5.923 33.17 0 27.253 0 19.983 0 12.713 5.924 6.797 13.195 6.797c7.27 0 13.195 5.916 13.195 13.186zm0 0"
                          />
                        </svg>
                        Continue with Apple
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default signIn;
