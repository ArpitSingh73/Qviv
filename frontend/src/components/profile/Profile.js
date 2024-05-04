import React from 'react'

function Profile() {



  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/> */}

      <section
        style={{ "font-family": "Montserrat" }}
        className=" bg-[#071e34] flex font-medium items-center justify-center min-h-screen"
      >
        <section className="w-64 md:w-64 lg:w-1/2 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg my-16  ">
          {/* <div className="flex items-center justify-center text-xl text-white">
            <span>User profile</span>
          </div> */}
          <p className="text-emerald-400 font-semibold mt-2.5">Active</p>

          <div className="mt-6 w-fit mx-auto  ">
            <img
              src="logo512.png"
              className={`rounded-full w-24 md:w-36 lg:w-48`}
              alt="profile picture"
              srcset=""
            />
          </div>

          <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">
              {" "}
              name : Jonathan Smith
            </h2>
          </div>
          <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">
              email : Jo@gmail.com
            </h2>
          </div>
          <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">
              contact : 123456789
            </h2>
          </div>

          <div className="h-1 w-full bg-black mt-8 rounded-full">
            <div className="h-1 rounded-full w-full bg-yellow-500 "></div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Profile
