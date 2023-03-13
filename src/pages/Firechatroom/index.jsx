import React from "react";
import { useState } from "react";
import { useFirebase } from "../context/firebase";
import { IoMail, IoSend } from "react-icons/io5";
import { useEffect } from "react";
import Message from "./Message";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Moment from 'react-moment';

const FireChatRoom = () => {
  const firebase = useFirebase();
  // console.log(firebase.Uid);
  const [text, setText] = useState("");
  const [msgData, setMessageData] = useState("");
  const [Messages, setMessages] = useState([]);
  const isMsgs = Messages ? true : false;
  const getMessages = async () => {
    const messages = await getDocs(
      collection(firebase.db, "messages"),
      orderBy("createdAt",'asc')
    );
    // const allMsgs = await useCollection()
    // setMessages([messages]);
    Messages.forEach((msg) => {
      setMessageData(msg.data());
    });
    //  ((msg) => {
      // setMessages([..,msg.data()])
      // setMessages([msg.data()]);
      //   console.log(msg.data().text);
        // <Message text={msg.data(z).text}/>
    // });
    setMessages(messages.docs.sort());
    // console.log(msgData);
  };
  useEffect(() => {
    getMessages();
  }, []);
  const time =Date.now();
   const sendMsgOnEnter = (e)=>(e.keycode===13?sendMsg():"")
  
  const sendMsg = (e) => {
    e.preventDefault();
    
      firebase.sendMessage(text, time);
      getMessages();
      setText("");
    
    firebase.sendMessage(text, time);
    getMessages();
    setText("");
  }
 

  return (
    <>
      <div className="flex bg-white fixed  justify-center items-center  w-screen h-screen">
        <div className="hidden sm:flex w-1/2 h-full"></div>
        <div className="flex relative chatbg sm:bg-teal-300 mbp z-20  justify-center pb-20  w-full sm:w-[305px] sm:border-[10px] border-black sm:h-[600px] h-screen rounded-3xl overflow-hidden ">
          <span className="flex justify-start gap-3 pl-1 items-center absolute sm:w-[110px] sm:h-6 rounded-full top-2 bg-black">
            <span className="block rounded-full sm:w-[18px] sm:h-[18px] bg-slate-900"></span>
            <span className="block rounded-full sm:w-[62px] sm:h-[5px] bg-slate-700"></span>
            <span className="block rounded-full sm:w-[14px] sm:h-[14px] bg-slate-900"></span>
          </span>

          <div className="msgs pt-10 flex flex-col overflow-scroll absolute -z-50 w-full sm:h-[500px] h-4/5 ">
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
                      <p className="text-xs bg-teal-100 p-1 pl-2 pr-2 rounded-3xl font-medium">
                        {text}
                        <p>
                          {" "}
                          <Moment toNow >
                          {createdAt}
                          </Moment>
                        </p>
                      </p>
                      <div className="photo w-[27px] h-[27px] overflow-hidden shadow-2xl rounded-full bg-teal-600">
                        <img
                          src="/user.png"
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
                <button
                 
                  className=" rounded-full m-auto top-1 right-3 z-50  w-[35px] h-[35px] absolute overflow-hidden bs font-bold bg-teal-700 flex justify-center items-center shadow-2xl"
                >
                  <IoSend className="text-white" onClick={sendMsg}
                  onKeyDown={sendMsgOnEnter}/>
                </button>)
               : 
                ""
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FireChatRoom;
