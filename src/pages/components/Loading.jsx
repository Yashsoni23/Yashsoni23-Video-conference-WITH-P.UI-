import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex w-screen bg-black-opa z-50 absolute h-screen justify-center items-center ">
        <div className="flex relative w-screen h-screen justify-center items-center">
          <div className="Load-box w-[200px] rounded-full bgs h-[200px] justify-center items-center overflow-hidden">
            <div className="loadGif "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
