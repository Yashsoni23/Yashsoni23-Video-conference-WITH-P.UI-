import React, { useRef ,useEffect} from "react";
import { useFirebase } from "../context/firebase";
import Moment from "react-moment";

const Message = (msg) => {
  const dummy = useRef()
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });

  }, [msg])
  
  const firebase =useFirebase();
  const { uid, createdAt, photoURL, text } = msg.message;

  return (
    <>
      <div
        key={msg.id}
        className={`msg w-full flex  gap-1   ${
          uid === firebase.Uid ? "sent" : "recieve"
        } p-1`}
      >
        <p
          key={msg.id}
          className="recieve-bg text-xs bg-teal-100 p-1 pl-2 pr-2 rounded-md font-medium"
        >
          {text}
          <p>
            {" "}
            <Moment fromNow className="text-[8px] text-left">
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
      <span ref={dummy} ></span>
    </>
  );
};

export default Message;
