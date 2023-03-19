import React, { useEffect, useRef, useState } from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { RxDoubleArrowRight } from "react-icons/rx";

const ProfileCard = ({ ProjectHeadData }) => {
  const expendcard = useRef();
  var {
    name,
    photoURL,
    role,
    college,
    twitter,
    github,
    linkedIn,
    Degree,
    Skills,
    about,
  } = ProjectHeadData;
  const fullViewCard = ()=>{
    expendcard.current.classList.toggle("addition-card");
  }
  return (
    <>
      <div ref={expendcard} className="flex  font-sans gap-1 flex-col w-max justify-center items-center h-max bg-white p-8 shadow-2xl rounded-xl ">
        <div className="img add-content-parent flex flex-col justify-center items-center bg-white   border-2 border-white ">
          <div className="img add-img w-[220px] shadow-2xl  rounded-full  overflow-hidden">
            <img src={photoURL} alt="" width={"100%"} />
          </div>
          <h1 className="font-bold text-orange-600  text-3xl">{name}</h1>
          <h2 className="font-bold text-gray-600 opacity-70  text-xl">
            {role}
          </h2>
          <h2 className="font-bold text-gray-600 opacity-70  text-xs">
            {Degree},{college}
          </h2>
          <div className="social-media text-3xl p-2 flex gap-5">
            <BsGithub
              onClick={() => window.open(github)}
              className="hover:opacity-70   text-black cursor-pointer"
            />
            <BsTwitter
              onClick={() => window.open(twitter)}
              className="hover:opacity-70   text-[#1DA1F2] cursor-pointer"
            />
            <BsLinkedin
              onClick={() => window.open(linkedIn)}
              className="hover:opacity-70   text-blue-700 cursor-pointer"
            />
          </div>
        </div>

        <p className="font-bold add-para  text-gray-800 opacity-70 w-[300px] text-justify  text-sm">
          {about}
         
        </p>
      </div>
    </>
  );
};

export default ProfileCard;
