import React from "react";

const Message = (text) => {
    // console.log(text);
  return (
    <>
      <div className="msg flex justify-center gap-1 flex-row-reverse items-center recieve p-1">
        <p className="text-xs bg-teal-100 p-1 pl-2 pr-2 rounded-3xl font-medium">
          {text}
        </p>
        <div className="photo w-[27px] h-[27px]  shadow-2xl rounded-full bg-teal-600"></div>
      </div>
    </>
  );
};

export default Message;
