import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useFirebase } from "../context/firebase";

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
        className="flex gap-3 w-1/2 h-1/2 justify-center items-center bg-slate-400 flex-col"
      >
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className=" rounded-md focus:outline-none p-2 w-1/2 font-bold pl-2"
          placeholder="Email"
        />
        <input
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className=" rounded-md focus:outline-none p-2 w-1/2 font-bold pl-2"
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          type="submit"
          className="p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:border-2 hover:border-black bg-black text-white font-bold w-1/2"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LogIn;
