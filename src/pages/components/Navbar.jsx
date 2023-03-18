import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import {HiOutlineBars3BottomRight} from "react-icons/hi2"
import {AiOutlineClose} from "react-icons/ai"


const Navbar = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const sidebar = useRef();
  const [ShowSidebar,setShowSidebar] = useState(false);
  const pathname = window.location.pathname.split("/").join("");
  const navElements = ["Dashboard","Chat", "About", "Contact"];
  const activeCondition_1 = navElements[0] === pathname;
  const activeCondition_2 = navElements[1] === pathname;
  const activeCondition_3 = navElements[2] === pathname;
  const activeCondition_4 = navElements[2] === pathname;

  const showSideBarFun = ()=>{
    setShowSidebar(!ShowSidebar)
 sidebar.current.classList.toggle("showSidebar");
 sidebar.current.classList.toggle("closeSidebar");

  }
  const Logout = () => {

    firebase.signout();
    navigate("/")};
  return (
    <>
      <nav className="hidden absolute  top-10 sm:flex flex-col w-full justify-center items-center h-max">
        <ul className="flex sm:gap-5 gap-2 font-bold w-full justify-center items-center text-black">
          <Link to={"/Dashboard"}
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li ${
              activeCondition_1 ? "active" : ""
            } `}
          >
            {navElements[0]}
          </Link>
          <Link to={"/Chat"}
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li ${
              activeCondition_2 ? "active" : ""
            } `}
          >
            {navElements[1]}
          </Link>
          <Link to={"/About"}
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li  ${
              activeCondition_3 ? "active" : ""
            }`}
          >
            {navElements[2]}
          </Link>
          <Link to={"/Contact"}
            className={`p-2 cursor-pointer transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li  ${
              activeCondition_4 ? "active" : ""
            }`}
          >
            {navElements[3]}
          </Link>
          <button
            onClick={Logout}
            className=" p-2 transition-all duration-300 hover:bg-red-400  pl-2 sm:pl-4 pr-2 sm:pr-4 sm:text-2xl text-xl bg-red-500 text-white rounded-full"
          >
            Logout
          </button>
        </ul>
      </nav>
      <nav className="fixed z-50 top-0 sm:hidden  flex flex-col w-full justify-center items-center h-max">
        <h1 className="bg-teal-500 backdrop-blur-3xl  text-white text-2xl font-bold w-full p-3 flex justify-between shadow-2xl">VideoChat Web 
        {
        ShowSidebar
        ?
        <AiOutlineClose onClick={showSideBarFun} className="font-extrabold text-4xl shadow-2xl  cursor-pointer"/>
        :
        <HiOutlineBars3BottomRight onClick={showSideBarFun} className="font-extrabold text-4xl shadow-2xl  cursor-pointer"/>
        }
         
         
         
         </h1>
      </nav>

        <ul ref={sidebar} className="flex absolute z-10  showSidebar p-20 flex-col sm:gap-5 gap-2 bg-teal-200 font-bold w-full justify-center items-center text-black">
          <Link to={"/Dashboard"}
            className={`p-2 cursor-pointer zoom transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li ${
              activeCondition_1 ? "active" : ""
            } `}
          >
            {navElements[0]}
            </Link>
          <Link to={"/Chat"}
            className={`p-2 cursor-pointer zoom transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li ${
              activeCondition_2 ? "active" : ""
            } `}
          >
            {navElements[1]}
          </Link>
          <Link to={"/About"}
            className={`p-2 cursor-pointer zoom transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li  ${
              activeCondition_3 ? "active" : ""
            }`}
          >
            {navElements[2]}
          </Link>
          <Link to={"/Contact"}
            className={`p-2 cursor-pointer zoom transition-all duration-300 hover:text-orange-600  sm:text-2xl text-xl li  ${
              activeCondition_4 ? "active" : ""
            }`}
          >
            {navElements[3]}
          </Link>
          <button
            onClick={Logout}
            className="  p-2 transition-all zoom duration-300 hover:bg-red-400  pl-2 sm:pl-4 pr-2 sm:pr-4 sm:text-2xl text-xl bg-red-500 text-white rounded-full"
          >
            Logout
          </button>
        </ul>
    </>
  );
};

export default Navbar;
