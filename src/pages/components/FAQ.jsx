import React from "react";
import Faq_Question from "./Faq_Question";
import Navbar from "./Navbar";

const FAQ = () => {
  return (
    <>
      <div className="flex flex-col gap-7 justify-center items-center w-screen h-max pt-20 p-8 relative bg-emerald-200">
        <Navbar />
        <div className="w-full  max-[420px]:flex justify-center items-center sm:pl-14  text-center mt-10  ">
          <h1 className="text-center flex gap-2  text-pink-600 flex-col justify-center items-center w-max font-extrabold text-xl sm:text-3xl">
            Frequently Asked Questions{" "}
            <span className="block w-1/2 sm:w-4/5 h-2 bg-gradient-to-r text-cyan-600 from-purple-400 bg-cyan-600 shadow-2xl rounded-full"></span>
          </h1>
        </div>
        <div className=" w-11/12 relative h-max flex justify-center bg-emerald-200 items-center flex-col rounded-3xl  overflow-hidden ">
          <Faq_Question />
          <Faq_Question />
          <Faq_Question />
          <Faq_Question />
          <Faq_Question />
          <Faq_Question />
          <Faq_Question />
          <Faq_Question />
        </div>
      </div>
    </>
  );
};

export default FAQ;
