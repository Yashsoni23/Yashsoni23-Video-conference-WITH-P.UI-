import React from 'react'
import Navbar from './Navbar'
import ProfileCard from './ProfileCard'
import ProjectHeadData from "./ProjectData"
const About = () => {
// console.log(ProjectHeadData[0]);
   

  return (
    <>
    
        <div className=" pt-20 overflow-hidden relative flex flex-col bg-teal-300  flex-wrap justify-center items-end    w-screen sm:h-screen gap-10">
            <Navbar/>
            <div className="w-full hidden max-[420px]:flex  text-center  justify-center items-center mt-10  min-[1290px]:flex">
            <h1 className='text-center flex gap-2  text-white ts flex-col justify-center items-center w-max font-extrabold text-3xl'>Our Team <span className='block  w-4/5 h-2 bg-gradient-to-r text-pink-400 from-purple-600 bg-pink-500 shadow-2xl rounded-full'></span></h1>
            </div>
            <div className="flex  sm:flex-row flex-col w-full gap-14 justify-center sm:items-end items-center p-5">
            <ProfileCard ProjectHeadData={ProjectHeadData[0]}/>
            <ProfileCard ProjectHeadData={ProjectHeadData[0]}/>
            <ProfileCard ProjectHeadData={ProjectHeadData[0]}/>
            </div>

        </div>

    </>
  )
}

export default About