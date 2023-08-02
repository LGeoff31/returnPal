import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const signIn = () => {
  return (
    <div className="flex justify-center">
      <Navbar />
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
                  <form>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="text"
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
                          className="w-4 h-4 text-blue-600  rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-blue-600"
                        />
                        <label
                          htmlFor="green-checkbox"
                          className="ml-2 text-sm font-medium text-black"
                        >
                          Remember Me
                        </label>
                      </div>

                      <a
                        href="#!"
                        className="text-black hover:text-[#0099ff] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                      >
                        Forgot password?
                      </a>
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
                    <a
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
                    <a
                      className="mb-3 flex w-full items-center justify-center rounded bg-red-500 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dd4b39] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.3),0_4px_18px_0_rgba(221,75,57,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.3),0_4px_18px_0_rgba(221,75,57,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.3),0_4px_18px_0_rgba(221,75,57,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(221,75,57,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.2),0_4px_18px_0_rgba(221,75,57,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.2),0_4px_18px_0_rgba(221,75,57,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(221,75,57,0.2),0_4px_18px_0_rgba(221,75,57,0.1)]"
                      style={{ backgroundColor: "#dd4b39" }}
                      href="#!"
                      role="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
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

export default signIn;
