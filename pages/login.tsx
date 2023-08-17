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

const Login = () => {
  const router = useRouter();

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
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        console.log(result.user);
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

        console.log("Login successfully!");
        localStorage.setItem("userInfo", JSON.stringify(result.user));
        router.push("/");
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

  const googleAuth = () => {
    console.log("hello");
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        toast.success("Login Successfully....!", {
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
        toast.error("Authentication Failed....!", {
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

  const handleFacebookSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Handle successful Facebook sign-in here
        const user = result.user;
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

        localStorage.setItem("userInfo", JSON.stringify(result.user));
        router.push("/");
        console.log("Signed in with Facebook:", user);
      })
      .catch((error) => {
        toast.error("Authentication Failed....!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // Handle Facebook sign-in error here
        console.error("Facebook sign-in error:", error);
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
        <div className="md:mt-24 -mt-5 md:mb-0 mb-36">
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
                <div className="md:w-8/12 lg:ml-6 lg:w-5/12 bg-blue-50 shadow-2xl shadow-blue-[#0099ff] rounded-lg   px-10 py-8">
                  <form onSubmit={handleSignIn}>
                    <div className="flex justify-center items-center mb-5 text-2xl md:text-3xl text-blue-500 font-semibold animate-pulse">
                      <p>Login to ReturnPAL</p>{" "}
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-xl font-medium text-gray-900 "
                        >
                          Enter Your Email address
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          id="first_name"
                          className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="John@gmail.com"
                          required
                        />
                      </div>
                      <div className="mt-5">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-xl font-medium text-gray-900 "
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          required
                        />
                      </div>

                      {/* <input
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
                      </label> */}
                    </div>
                    {/* <div className="relative mb-6" data-te-input-wrapper-init>
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
                    </div> */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center mr-4">
                        <input
                          id="green-checkbox"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600  rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-blue-600"
                        />
                        <label
                          htmlFor="green-checkbox"
                          className="ml-2 text-sm font-medium text-black"
                        >
                          Remember Me
                        </label>
                      </div>
                      <Link href={"/forgetPassword"} legacyBehavior>
                        <a
                          href="#!"
                          className="text-black hover:text-[#0099ff] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >
                          Forgot password?
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
                    <div className="flex items-center w-[100%] justify-center bg-gray-100">
                      <button
                        type="button"
                        onClick={googleAuth}
                        className="flex w-full mb-4 items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        <svg
                          className="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="800px"
                          height="800px"
                          viewBox="-0.5 0 48 48"
                          version="1.1"
                        >
                          {"{"}" "{"}"}
                          <title>Google-color</title>
                          {"{"}" "{"}"}
                          <desc>Created with Sketch.</desc> <defs> </defs>
                          {"{"}" "{"}"}
                          <g
                            id="Icons"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            {"{"}" "{"}"}
                            <g
                              id="Color-"
                              transform="translate(-401.000000, -860.000000)"
                            >
                              {"{"}" "{"}"}
                              <g
                                id="Google"
                                transform="translate(401.000000, 860.000000)"
                              >
                                {"{"}" "{"}"}
                                <path
                                  d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                  id="Fill-1"
                                  fill="#FBBC05"
                                >
                                  {"{"}" "{"}"}
                                </path>
                                {"{"}" "{"}"}
                                <path
                                  d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                  id="Fill-2"
                                  fill="#EB4335"
                                >
                                  {"{"}" "{"}"}
                                </path>
                                {"{"}" "{"}"}
                                <path
                                  d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                  id="Fill-3"
                                  fill="#34A853"
                                >
                                  {"{"}" "{"}"}
                                </path>
                                {"{"}" "{"}"}
                                <path
                                  d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                  id="Fill-4"
                                  fill="#4285F4"
                                >
                                  {"{"}" "{"}"}
                                </path>
                                {"{"}" "{"}"}
                              </g>
                              {"{"}" "{"}"}
                            </g>
                            {"{"}" "{"}"}
                          </g>
                          {"{"}" "{"}"}
                        </svg>
                        <span>Continue with Google</span>
                      </button>
                    </div>

                    <a
                      onClick={handleFacebookSignIn}
                      className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
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

export default Login;
