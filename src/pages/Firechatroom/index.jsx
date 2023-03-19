import React from "react";
import { useState } from "react";
import { useFirebase } from "../context/firebase";
import { IoMail, IoSend } from "react-icons/io5";
import { useEffect } from "react";
import Message from "./Message";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import firebase from "firebase/app";
import Moment from "react-moment";
import Navbar from "../components/Navbar";

const FireChatRoom = () => {
  
  const firebase = useFirebase();
  // console.log(firebase.Uid);
  const [text, setText] = useState("");
  const [msgData, setMessageData] = useState([]);
  const [Messages, setMessages] = useState([]);
  const isMsgs = Messages ? true : false;
  const getMessages = async () => {
    const messages = await getDocs(collection(firebase.db, "messages"));
    const messagesRef = collection(firebase.db, "messages");
    //  const data  =  useCollection("messages").query(orderBy("createdAt", "asc"));
    // console.log(data);

    Messages.forEach((msg) => {
      setMessageData(msg.data());
      // console.log(msgData.sort(msg.data().createdAt));
    });

    setMessages(messages.docs.sort());
    // console.log(msgData);
  };
  useEffect(() => {
    getMessages();
  }, []);
  const time = Date.now();
  const sendMsgOnEnter = (e) => (e.keycode === 13 ? sendMsg() : "");

  const sendMsg = (e) => {
    e.preventDefault();

    firebase.sendMessage(text, time);
    getMessages();
    setText("");

    firebase.sendMessage(text, time);
    getMessages();
    setText("");
  };

  return (
    <>
      <div className="flex bg-white fixed gap-20  justify-center items-end  w-screen h-screen">
        <Navbar />
        <div className="hidden sm:flex w-1/2 chatbggif h-4/5 "></div>
        <div className="flex relative chatbg sm:bg-teal-300 mbp z-20  justify-center pb-20  w-full sm:w-[305px] sm:border-[10px] border-black sm:h-[580px] h-screen rounded-3xl overflow-hidden ">
          <span className="flex justify-start gap-3 pl-1 items-center absolute sm:w-[110px] sm:h-6 rounded-full top-2 bg-black">
            <span className="block rounded-full sm:w-[18px] sm:h-[18px] bg-slate-900"></span>
            <span className="block rounded-full sm:w-[62px] sm:h-[5px] bg-slate-700"></span>
            <span className="block rounded-full sm:w-[14px] sm:h-[14px] bg-slate-900"></span>
          </span>

          <div className="msgs pt-10 pb-3 flex flex-col overflow-scroll absolute -z-50 w-full sm:h-[500px] h-[92%] ">
            {Messages &&
              Messages.map((msg) => {
                const { uid, createdAt, photoURL, text } = msg.data();
                return (
                  <>
                    <div
                      key={msg.id}
                      className={`msg w-full flex  gap-1   ${
                        uid === firebase.Uid ? "sent" : "recieve"
                      } p-1`}
                    >
                      <p className="recieve-bg text-xs bg-teal-100 p-1 pl-2 pr-2 rounded-md font-medium">
                        {text}
                        <p>
                          {" "}
                          <Moment format="hh:mm" className="text-[8px]">
                            {createdAt}
                          </Moment>
                        </p>
                      </p>
                      <div className="photo w-[27px] h-[27px] overflow-hidden shadow-2xl rounded-full bg-teal-600">
                        <img
                          src={!photoURL ? "/user.png" : photoURL}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </>
                );
              })}
          </div>

          <div className="flex absolute p-3  justify-center items-center backdrop-blur-3xl  w-full bottom-2">
            {/* Its Sticky Bottom Msg Keyboard */}
            <div className="flex justify-center items-center relative w-full">
              <textarea
                value={text}
                placeholder="Type your message....."
                onChange={(e) => setText(e.target.value)}
                className="w-[95%] h-10 shadow-xl font-medium  pt-2 pb-3 rounded-full pl-5 focus:outline-none bs pr-10 overflow-hidden"
              />
              {text ? (
                <button className=" rounded-full m-auto top-1 right-3 z-50  w-[35px] h-[35px] absolute overflow-hidden bs font-bold bg-teal-700 flex justify-center items-center shadow-2xl">
                  <IoSend
                    className="text-white"
                    onClick={sendMsg}
                    onKeyDown={sendMsgOnEnter}
                  />
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
