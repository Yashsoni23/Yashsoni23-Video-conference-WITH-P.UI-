import React, { useRef } from "react";
import {IoIosArrowDown} from "react-icons/io"
const Faq_Question = () => {
    const expendRef = useRef();
    const expendFun = ()=>{
        expendRef.current.classList.toggle("default-height");
        expendRef.current.classList.toggle("faq");
    }
  return (
    <>
      <div  ref={expendRef} className="relative  default-height  overflow-hidden flex-col  shadow-2xl w-full  bg-purple-800 ">
        <div className="flex text-xs a h-max flex-col text-white rounded-3xl relative">
          <div onClick={expendFun} className=" cursor-pointer hover:bg-purple-500 shadow-2xl flex b justify-between w-full   bg-purple-600">
            <h1 className="font-bold text-left c pt-4 pb-4 pl-2 sm:p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
                <button  className="btn p-2 sm:p-4"><IoIosArrowDown className="sm:text-3xl text-xl font-bold"/></button>
          </div>
          <h6 className="h-max text-[.7rem] text-justify  text-white p-2 sm:p-4 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            
          </h6>
        </div>
      </div>
    </>
  );
};

export default Faq_Question;
