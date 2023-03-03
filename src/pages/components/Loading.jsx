import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex w-screen bg-black-opa z-50 fixed top-0 right-0 h-screen justify-center items-center ">
        <div className="flex relative w-screen h-screen justify-center items-center">
          <div className="Load-box w-[125px] rounded-full bgs h-[125px] justify-center items-center overflow-hidden">
            <div className="loadGif "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
