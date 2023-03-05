import React from "react";
import { useState } from "react";
import { useFirebase } from "../context/firebase";
import { IoSend } from "react-icons/io5";
import { useEffect } from "react";
import Message from "./Message";
import { collection, getDocs } from "firebase/firestore";

const FireChatRoom = () => {
  const firebase = useFirebase();
  //   console.log(firebase.messages);
  const [text, setText] = useState("");
  const [Messages, setMessages] = useState([]);
  const isMsgs = Messages ? true : false;
  const getMessages = async () => {
    const messages = await getDocs(collection(firebase.db, "messages"));
    // setMessages([messages]);
    console.log(typeof Messages);
     
    //  ((msg) => {
    //   // setMessages([..,msg.data()])
    //   setMessages([msg.data()]);
    //   //   console.log(msg.data().text);
    //   //   <Message text={msg.data().text}/>
    // });
    setMessages(messages.docs)
  console.log();

  };
  useEffect(() => {
    getMessages();
  }, []);
  const time = new Date();
  const sendMsg = (e) => {
    e.preventDefault();
    firebase.sendMessage(text, time);
  };

  return (
    <>
      <div className="flex bg-white  justify-center items-center  w-screen h-screen">
        <div className="flex relative sm:bg-teal-300 mbp z-20 justify-center items-center  w-screen sm:w-[305px] sm:border-[10px] border-black sm:h-[90%] h-screen rounded-3xl overflow-hidden ">
          <span className="flex justify-start gap-3 pl-1 items-center absolute sm:w-[110px] sm:h-6 rounded-full top-2 bg-black">
            <span className="block rounded-full sm:w-[18px] sm:h-[18px] bg-slate-900"></span>
            <span className="block rounded-full sm:w-[62px] sm:h-[5px] bg-slate-700"></span>
            <span className="block rounded-full sm:w-[14px] sm:h-[14px] bg-slate-900"></span>
          </span>

          <div className="msgs pt-10  absolute -z-50 w-full h-full ">
            {Messages.forEach((msg)=>{
                const {text,photoURL} = msg;
                Messages.map((ele)=>{
                    return console.log(ele
                        
                        );
                })
            })
        }
          </div>

          <div className="flex absolute p-3 justify-center items-center  w-full bottom-2">
            {/* Its Sticky Bottom Msg Keyboard */}
            <div className="flex justify-center items-center relative w-full">
              <textarea
                value={text}
                placeholder="Type your message....."
                onChange={(e) => setText(e.target.value)}
                className="w-[95%] h-10 shadow-xl font-medium  pt-2 pb-3 rounded-full pl-5 focus:outline-none bs pr-10 overflow-hidden"
              />
              {text ? (
                <button
                  onClick={sendMsg}
                  className="p-2 rounded-full m-auto top-1 right-3  w-[35px] h-[35px] absolute overflow-hidden bs font-bold bg-teal-700 flex justify-center items-center shadow-2xl"
                >
                  <IoSend className="text-white" />
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FireChatRoom;
