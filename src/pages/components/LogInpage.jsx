import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useFirebase } from "../context/firebase";
import {BiUser} from "react-icons/bi"
const LogIn = () => {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const firebase = useFirebase();
  const navigate = useNavigate();


  const toastError = (error)=>{
    toast(`Error : ${error}`,{
      type:"error",
      autoClose:true
    })
  }
  const toastSuccess = ()=>{
    toast(`Login Successful`,{
      type:"success",
      autoClose:true
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(email,Password);
    firebase.signIn(email, Password)
    .then((result) => {
      toastSuccess();
      navigate("/Dashboard");
      console.log(firebase.isLoggedIn);
    })
    .catch((error)=>{
      toastError(error);
    });
    
  };

  return (
    <>
    <ToastContainer/>
      <form
        action=""
        className="flex gap-5 w-max p-14 h-1/2 justify-center items-center flex-col"
      >
        <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center w-[100px] h-[100px] bg-cyan-900 rounded-full">
              <BiUser className=" text-5xl text-white"/>
            </div>
            <h1 className="font-bold text-2xl">Welcome</h1>
        </div>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className=" border-b-[1px] focus:border-b-2 focus:border-teal-900 border-cyan-700 bg-transparent placeholder:text-cyan-900 text-cyan-900  focus:outline-none p-2 w-full font-bold pl-2"
          placeholder="Email"
        />
        <input
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className=" border-b-[1px] focus:border-b-2 focus:border-teal-900 border-cyan-700 bg-transparent placeholder:text-cyan-900 text-cyan-900  focus:outline-none p-2 w-full font-bold pl-2"
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          type="submit"
          className="p-2  rounded-full hover:bg-white hover:text-cyan-900 transition-all duration-300 hover:border-2 hover:border-cyan-900 bg-cyan-900 text-white font-bold w-full"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LogIn;
