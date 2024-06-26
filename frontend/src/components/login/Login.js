import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { doSignInWithGoogle } from "../../firebase/auth";

function Login() {
  const navigate = useNavigate();

  const [allErrors, setAllErrors] = useState({});
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // function for capturing the input values ------------------------
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  // function for Firebase login by Google --------------------------
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    try {
      doSignInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };


  // creating a schema for form validation by Yup library --->
  const userSchema = Yup.object({
    email: Yup.string().required("email is required").email("Invalid format"),
    password: Yup.string()
      .required("password is required")
      .min(5, "must be of 5 characters"),
  });


  // function for user data validation --->
  const check = async () => {
    let result = false;
    setAllErrors({});
    try {
      await userSchema.validate(credentials, { abortEarly: false });
      result = true;
    } catch (error) {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      setAllErrors(errors);
    }
    return result;
  };


  // function for logging in with user details -------------------
  const handleManualLogin = async () => {
    let result = await check();
    if (result) {
      const { email, password } = credentials;

      try {
        const response = await fetch("https://qviv.onrender.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const json = await response.json();
        console.log(json);
        localStorage.setItem("userManual", JSON.stringify(json));

        if (json.success) {
          navigate("/");
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#071e34] py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10  bg-gray-200 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="sm:w-60  md:w-96 lg:w-96 mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login to begin</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div
                    className="relative bg-[#071e34] h-16 text-center content-center items-center rounded-lg shadow-lg text-xl font-extrabold  hover:text-red-500  text-red-600 cursor-pointer"
                    onClick={handleGoogleLogin}
                  >
                    <span>Continue with Google</span>
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-1 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                    {allErrors.email && <div>{allErrors.email}</div>}
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-1 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    {allErrors.password && <div>{allErrors.password}</div>}
                  </div>
                  <div className="relative">
                    <button
                      className=" bg-indigo-500 hover:bg-indigo-600 text-white h-10  lg:w-20 md:w-20 rounded-md px-2 py-1"
                      onClick={handleManualLogin}
                    >
                      logIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
