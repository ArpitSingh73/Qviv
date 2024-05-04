import React from "react";
import { doSignInWithGoogle } from "../../firebase/auth";
import {useNavigate} from 'react-router-dom'
function Signup() {


  const navigate = useNavigate()


  const handleGoogleLogin = (e) => {
     e.preventDefault();
     try {
       doSignInWithGoogle();
       
     } catch (error) {
       console.log(error);
     }
  }
  return (
    <>
      <div className="min-h-screen bg-[#071e34] py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10  bg-gray-200 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="sm:w-60  md:w-96 lg:w-96 mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">New to Qviv ?</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* ------------ */}
                  <div className="relative bg-[#071e34]  h-16 text-center content-center items-center rounded-lg shadow-lg text-xl font-extrabold hover:text-red-500 text-red-600 cursor-pointer"  onClick={handleGoogleLogin} >
                    <span>Continue with Google</span>
                  </div>

                  {/* ------------- */}
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="name"
                      name="name"
                      type="text"
                      className="peer placeholder-transparent pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="username..."
                    />
                    <label
                      for="username"
                      className="absolute left-1 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      username
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="email"
                      className="peer placeholder-transparent pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      for="password"
                      className="absolute left-1 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      email
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      for="password"
                      className="absolute left-1 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="profile picture"
                      name="profile picture"
                      type="file"
                      className="peer placeholder-transparent pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="profile picture"
                    />
                  </div>
                  <div className="relative">
                    <button className=" bg-indigo-500 hover:bg-indigo-600 text-white h-10  lg:w-20 md:w-20 rounded-md px-2 py-1">
                      signIn
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

export default Signup;
