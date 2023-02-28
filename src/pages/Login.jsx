import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogIn from "./components/LogInpage";
import SignUp from "./components/SignUp";
import { useFirebase } from "./context/firebase";
const Login = () => {

  const [already, NewUser] = useState(true);
    const firebase = useFirebase();
    const navigate = useNavigate();


  useEffect(() => {

    if (firebase.isLoggedIn) {
      navigate("/dashboard")
    }
  }, [ firebase,navigate]);

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

export default Login;
