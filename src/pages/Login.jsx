import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./components/Loading";
import LogIn from "./components/LogInpage";
import SignUp from "./components/SignUpPage";
import { useFirebase } from "./context/firebase";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [already, NewUser] = useState(false);
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (firebase.isLoggedIn) {
      navigate("/dashboard");
    setIsLoading(false);
    }
  }, [firebase, navigate]);

  return (
    <>
      <div className="flex sm:flex-row gap-10 flex-col-reverse w-screen h-screen justify-center items-center">
      <div className="flex">
        <div className="flex sm:w-[640px] w-[320px]  sm:h-[640px] h-[320px]  bg-laptop "></div>
        {isLoading ? <Loading /> : ""}

      </div>

        <div
          className={`flex flex-col relative shadow-2xl w-max h-max pb-5 justify-center items-center 
          ${
            !already
              ? "bg-gradient-to-b from-blue-400 via-cyan-200 to-blue-200 "
              : "bg-white"
          }`}
        >
          {!already ? <SignUp /> : <LogIn />}
          <div className="flex font-semibold  absolute bottom-8">
            <h1>{!already ? "Already a" : "New"} user? </h1>
            <button
              onClick={() => NewUser(!already)}
              className="font-bold pl-2"
            >
              {!already ? "LogIn" : "SignUp"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
