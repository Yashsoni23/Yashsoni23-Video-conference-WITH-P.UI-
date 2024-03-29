import React, { useRef } from "react";
import { useState } from "react";
import { IoMail, IoSend } from "react-icons/io5";
import { useEffect } from "react";
import Message from "./Message";
import Navbar from "../components/Navbar";
import { collection, orderBy, query } from "firebase/firestore";
import { useFirebase } from "../context/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const FireChatRoom = () => {
  const dummy = useRef();
  const [text, setText] = useState("");
  const firebase = useFirebase();
  const ref = collection(firebase.db, "messages");
  const Query = query(ref, orderBy("createdAt"));
  const [data] = useCollectionData(Query);
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const time = Date.now();

  const sendMsg = (e) => {
    e.preventDefault();
    firebase.sendMessage(text, time);
    dummy.current.scrollIntoView({ behavior: "smooth" });
    setText("");
  };
  return (
    <>
      <div className="flex  fixed gap-20 bg-white justify-center items-end  w-screen h-screen">
        <Navbar />
        <div className="hidden sm:flex w-1/2 chatbggif h-4/5 "></div>
        <div className="flex relative  chatbg h-screen w-screen sm:rounded-[60px]
         sm:bg-teal-300  z-20  justify-center pb-20  sm:w-[305px] sm:border-[10px] border-black sm:h-[580px]   overflow-hidden ">
          <span className="flex justify-start gap-3 pl-1 items-center absolute sm:w-[110px] sm:h-6 sm:rounded-full top-2 bg-black">
            <span className="block rounded-full sm:w-[18px] sm:h-[18px] bg-slate-900"></span>
            <span className="block rounded-full sm:w-[62px] sm:h-[5px] bg-slate-700"></span>
            <span className="block rounded-full sm:w-[14px] sm:h-[14px] bg-slate-900"></span>
          </span>

          <div className="msgs sm:relative pt-20 pb-36 sm:pt-10 sm:pb-2 flex flex-col overflow-scroll absolute -z-50 w-full sm:h-[500px] h-[100%] ">
            {data && data.map((msg) => <Message key={msg.id} message={msg} />)}
            <span ref={dummy}></span>

            <div className="flex fixed sm:hidden  justify-center items-center bottom-2 w-full ">
              <textarea
                value={text}
                placeholder="Type your message....."
                onChange={(e) => setText(e.target.value)}
                className="w-[95%] h-10 shadow-xl font-medium  pt-2 pb-3 rounded-full pl-5 focus:outline-none bs pr-10 overflow-hidden"
              />
              {text ? (
                <button
                  onClick={sendMsg}
                  className=" rounded-full m-auto top-1 right-3 z-50  w-[35px] h-[35px] absolute overflow-hidden bs font-bold bg-teal-700 flex justify-center items-center shadow-2xl"
                >
                  <IoSend className="text-white" />
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex fixed sm:absolute sm:bottom-0 sm:left-2 justify-center items-center bottom-2 w-full ">
              <textarea
                value={text}
                placeholder="Type your message....."
                onChange={(e) => setText(e.target.value)}
                className="w-[95%] h-10 shadow-xl font-medium  pt-2 pb-3 rounded-full pl-5 focus:outline-none bs pr-10 overflow-hidden"
              />
              {text ? (
                <button
                  onClick={sendMsg}
                  className=" rounded-full m-auto top-1 right-3 z-50  w-[35px] h-[35px] absolute overflow-hidden bs font-bold bg-teal-700 flex justify-center items-center shadow-2xl"
                >
                  <IoSend className="text-white" />
                </button>
              ) : (
                ""
              )}
            </div>
        </div>
      </div>
    </>
  );
};

export default FireChatRoom;
