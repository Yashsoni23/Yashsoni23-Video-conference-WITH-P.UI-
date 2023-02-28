import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const firebase = useFirebase();
    useEffect(()=>{
        // if(firebase.isLoggedIn){
        //     navigate("/")
        // }
        
    },[firebase,navigate])
  const toastSuccess = () => {
    toast("Logged In Successful", {
      autoClose: true,
      type: "success",
    });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    
    firebase
      .signUp(email, Password)
      .then((data) => {
        toastSuccess();
        console.log(data);
      })
      .catch((error) => {
        toast(`error ${error}`);
      });
  };

  return (
    <>
      <ToastContainer />

      <form
        action=""
        className="flex gap-3 w-1/2 h-1/2 justify-center items-center bg-slate-400 flex-col"
      >
        <input
          value={FirstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          type="text"
          className=" rounded-md focus:outline-none p-2 w-1/2 font-bold pl-2"
          placeholder="First Name"
        />
        <input
          value={LastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          type="text"
          className=" rounded-md focus:outline-none p-2 w-1/2 font-bold pl-2"
          placeholder="Last Name"
        />
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
          type="submit"
          className="p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:border-2 hover:border-black bg-black text-white font-bold w-1/2"
          onClick={handleSignUp}
        >
          SignUp
        </button>
      </form>
    </>
  );
};

export default SignUp;
