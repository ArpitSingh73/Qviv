import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const status = false;
  return (
    <>
      <nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div class="md:h-18 h-20 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <Link to="/">
            {" "}
            <div class="text-indigo-500 md:order-1 text-xl font-bold">Qviv</div>
          </Link>

          <div class="order-2 md:order-3  flex justify-between">
            {status ? (
              <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <span>loGout</span>
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button class="px-4 py-2 mx-3 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                    <span>logIn</span>
                  </button>
                </Link>
                <Link to="/signup">
                  <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
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
