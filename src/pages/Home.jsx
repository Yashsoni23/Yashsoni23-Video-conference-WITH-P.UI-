import React, { useState } from "react";
import LogIn from "./Room/components/LogIn";
import SignUp from "./Room/components/SignUp";
const Home = () => {
  const [already, NewUser] = useState(true);
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center h-full  bg-slate-400">
          {!already ? <SignUp /> : <LogIn />}
          <div className="flex"><h1>{!already ? "Already a" : "New"} user? </h1><button onClick={()=>NewUser(!already)} className="font-bold pl-2">{!already ? "LogIn"  : "SignUp"}</button></div>
        </div>
      </div>
    </>
  );
};

export default Home;
