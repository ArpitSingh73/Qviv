import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const userManual = JSON.parse(localStorage.getItem("userManual"));
  const userGoogle = JSON.parse(localStorage.getItem("userGoogle"));
  const user = userGoogle || userManual;
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.getItem("userManual")
      ? localStorage.removeItem("userManual")
      : localStorage.removeItem("userGoogle");
    window.location.reload();
    navigate("/")
  };

  return (
    <>
      <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-18 h-20 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <Link to="/">
            {" "}
            <div className="text-indigo-500 md:order-1 text-xl font-bold">
              Qviv
            </div>
          </Link>

          <div className="order-2 md:order-3  flex justify-between">
            {user ? (
              <button
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2"
                onClick={handleLogout}
              >
                <span>loGout</span>
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="px-4 py-2 mx-3 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                    <span>logIn</span>
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                    <span> signIn</span>
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
