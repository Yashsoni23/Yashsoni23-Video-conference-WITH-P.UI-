import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useFirebase } from "../context/firebase";
import { BiUser } from "react-icons/bi";
import Loading from "./Loading";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const firebase = useFirebase();
  const navigate = useNavigate();
  const inputhide = useRef();
  const loginbtnhide = useRef();
  const resetbtnhide = useRef();

  const toastError = (error) => {
    toast(`Error : ${error}`, {
      type: "error",
      autoClose: true,
    });
  };
  const toastSuccess = () => {
    toast(`Login Successful`, {
      type: "success",
      autoClose: true,
    });
  };
  const handleReset = () => {
    inputhide.current.classList.toggle("hidden");
    loginbtnhide.current.classList.toggle("hidden");
    resetbtnhide.current.classList.toggle("hidden");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(email,Password);
    firebase
      .signIn(email, Password)
      .then((result) => {
        toastSuccess();
        navigate("/Dashboard");
        // console.log(firebase.isLoggedIn);
        setIsLoading(false);
      })
      .catch((error) => {
        toastError(error);
        setIsLoading(false);
      });
  };
  const SignInGoogle = () => {
    setIsLoading(true);

    firebase.signInWIthGoogle();
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? <Loading /> : ""}
      <form
        action=""
        className="flex gap-5 w-max p-12  h-1/2 justify-center items-center flex-col"
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center w-[100px] h-[100px] bg-cyan-900 rounded-full">
            <BiUser className=" text-5xl text-white" />
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
          ref={inputhide}
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className=" border-b-[1px] focus:border-b-2 focus:border-teal-900 border-cyan-700 bg-transparent placeholder:text-cyan-900 text-cyan-900  focus:outline-none p-2 w-full font-bold pl-2"
          placeholder="Password"
        />
        <button
          ref={loginbtnhide}
          onClick={handleLogin}
          type="submit"
          className="p-2  rounded-full hover:bg-white hover:text-cyan-900 transition-all duration-300 hover:border-2 hover:border-cyan-900 bg-cyan-900 text-white font-bold w-full"
        >
          Login
        </button>
        <button ref={resetbtnhide}
          onClick={() => firebase.resetPassword(email)}
          type="button"
          className="p-2 hidden  rounded-full hover:bg-white hover:text-cyan-900 transition-all duration-300 hover:border-2 hover:border-cyan-900 bg-cyan-900 text-white font-bold w-full"
        >
          Sent Link
        </button>

        <div
          onClick={SignInGoogle}
          className="gl cursor-pointer flex gap-5 drop-shadow-2xl p-3 rounded-full bg-white"
        >
          <FcGoogle className="text-3xl drop-shadow-2xl" />
          <span className="text-xl font-bold text-teal-900">
            {" "}
            Sign With Google
          </span>
        </div>
        <h6
          onClick={handleReset}
          className="font-bold text-sm hover:text-blue-900 text-blue-600 cursor-pointer"
        >
          Foregotten your password?
        </h6>
      </form>
    </>
  );
};

export default LogIn;
