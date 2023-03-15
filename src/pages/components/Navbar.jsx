import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import {HiOutlineBars3BottomRight} from "react-icons/hi2"
import {AiOutlineClose} from "react-icons/ai"


const Navbar = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const pathname = window.location.pathname.split("/").join("");
  const navElements = ["Dashboard","Chat", "About", "Contact"];
  const activeCondition_1 = navElements[0].toLowerCase() === pathname;
  const activeCondition_2 = navElements[1].toLowerCase() === pathname;
  const activeCondition_3 = navElements[2].toLowerCase() === pathname;
  const activeCondition_4 = navElements[2].toLowerCase() === pathname;
  const Logout = () => {

    firebase.signout();
    navigate("/")
  };
  return (
    <>
      <nav className="hidden absolute  top-10 sm:flex flex-col w-full justify-center items-center h-max">
        <ul className="flex sm:gap-5 gap-2 font-bold w-full justify-center items-center text-black">
          <li
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li ${
              activeCondition_1 ? "active" : ""
            } `}
          >
            {navElements[0]}
          </li>
          <li
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li ${
              activeCondition_2 ? "active" : ""
            } `}
          >
            {navElements[1]}
          </li>
          <li
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li  ${
              activeCondition_3 ? "active" : ""
            }`}
          >
            {navElements[2]}
          </li>
          <li
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li  ${
              activeCondition_4 ? "active" : ""
            }`}
          >
            {navElements[3]}
          </li>
          <button
            onClick={Logout}
            className=" p-2 transition-all duration-300 hover:bg-red-400  pl-2 sm:pl-4 pr-2 sm:pr-4 sm:text-2xl text-xl bg-red-500 text-white rounded-full"
          >
            Logout
          </button>
        </ul>
      </nav>
      <nav className="absolute top-0 flex flex-col w-full justify-center items-center h-max">
        <h1 className="bg-teal-500 backdrop-blur-3xl   text-white text-2xl font-bold w-full p-3 flex justify-between shadow-2xl">VideoChat Web
         <HiOutlineBars3BottomRight className="font-extrabold text-4xl shadow-2xl  cursor-pointer"/>
         <AiOutlineClose className="font-extrabold text-4xl shadow-2xl  cursor-pointer"/>
         
         </h1>
        <ul className="flex flex-col sm:gap-5 gap-2 bg-teal-200 p-20 font-bold w-full justify-center items-center text-black">
          <li
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li ${
              activeCondition_1 ? "active" : ""
            } `}
          >
            {navElements[0]}
          </li>
          <li
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li ${
              activeCondition_2 ? "active" : ""
            } `}
          >
            {navElements[1]}
          </li>
          <li
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li  ${
              activeCondition_3 ? "active" : ""
            }`}
          >
            {navElements[2]}
          </li>
          <li
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li  ${
              activeCondition_4 ? "active" : ""
            }`}
          >
            {navElements[3]}
          </li>
          <button
            onClick={Logout}
            className=" p-2 transition-all duration-300 hover:bg-red-400  pl-2 sm:pl-4 pr-2 sm:pr-4 sm:text-2xl text-xl bg-red-500 text-white rounded-full"
          >
            Logout
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
