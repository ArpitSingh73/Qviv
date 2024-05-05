import React, { useState } from "react";

function Profile() {
  const userManual = JSON.parse(localStorage.getItem("userManual"));
  const userGoogle = JSON.parse(localStorage.getItem("userGoogle"));
  const user = userGoogle || userManual;
  var posY = 0;
  var posX = 0;
  const handleMouse = (e) => {
    console.log(e);
    if (e.pageY < posY) {
      e.target.classList.add("-top-1");

      // moving downward
    } else if (e.pageY > posY) {
      e.target.classList.add("top-1");
      // movement on horizontal axis
    } else if (e.pageX > posX) {
      e.target.classList.add("left-2");

      e.target.left = e.target.offsetLeft + 13 + "px";
      // movement on horizontal axis
    } else if (e.pageX < posX) {
      e.target.classList.add("-left-1");
    } else {
      // console.log("Moving left-right or the opposite");
      e.target.classList.add("top-0");
      e.target.classList.add("left-0");
    }


    posY = e.pageY;
    posX = e.pageX;


  };
  return (
    <>
      {user ? (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <section
            style={{ fontFamily: "Montserrat" }}
            className=" bg-[#071e34] flex font-medium items-center justify-center min-h-screen"
          >
            <section className="w-64 md:w-64 lg:w-1/2 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg my-16   ">
              <p className="text-emerald-400 font-semibold mt-2.5">Active</p>

              <div className="mt-6 w-fit mx-auto">
                <img
                  src={user.user.pic}
                  className={`rounded-full w-24 md:w-36 lg:w-48 scroll relative `}
                  alt="profile picture"
                  srcSet=""
                  onPointerMove={handleMouse}
                />
              </div>

              <div className="mt-8 ">
                <h2 className="text-white font-bold text-2xl tracking-wide ">
                  {user.user.name}
                </h2>
              </div>
              <div className="mt-8 ">
                <h2 className="text-white font-bold text-sm lg:text-2xl tracking-wide">
                  {user.user.email}
                </h2>
              </div>
              <div className="mt-8 ">
                <h2 className="text-white font-bold text-sm lg:text-2xl tracking-wide">
                  {user.user.pnumber}
                </h2>
              </div>

              <div className="h-1 w-full bg-black mt-8 rounded-full">
                <div className="h-1 rounded-full w-full bg-yellow-500 "></div>
              </div>
            </section>
          </section>
        </>
      ) : (
        <>
          <section
            style={{ "font-family": "Montserrat" }}
            className=" bg-[#071e34] flex font-medium items-center justify-center min-h-screen text-white"
          >
            <div className="h-40 w-60 bg-red-400 rounded-lg flex items-center justify-center">
              <span>Login to begin</span>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Profile;
