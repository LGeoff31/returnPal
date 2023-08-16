import { useEffect, useState } from "react";
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
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fbAuth, setfbAuth] = useState(false);

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

  const handleFacebookSignIn = (e: any) => {
    console.log(e);
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
        photoURL: e.picture.data.url,
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
                    <div className="text-center text-blue-500 mb-3 animate-pulse text-3xl font-semibold -mt-10">
                      Registration Form
                    </div>
                    <form onSubmit={handleSignIn}>
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
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center mr-4">
                          <input
                            id="green-checkbox"
                            type="checkbox"
                            className="w-4 h-4 mt-2 text-blue-600  rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-blue-600"
                          />
                          <label
                            htmlFor="green-checkbox"
                            className="ml-2 mt-2 text-sm font-medium text-black"
                          >
                            Remember Me
                          </label>
                        </div>
                        <Link href="login" legacyBehavior>
                          <a className="text-lg mt-2 font-semibold no-underline cursor-pointer ease-in duration-300 hover:scale-110 text-blue-500">
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
                        buttonStyle={{ display: "none" }}
                        // onClick={componentClicked}
                        callback={handleFacebookSignIn}
                      />
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
                        className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        style={{ backgroundColor: "#3b5998" }}
                        href="#!"
                        role="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={() => setfbAuth(true)}
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
        </div>
      </div>
    </Layout>
  );
};

export default signIn;
