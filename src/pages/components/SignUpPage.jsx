import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const firebase = useFirebase();
  useEffect(() => {
    // if(firebase.isLoggedIn){
    //     navigate("/")
    // }
  }, [firebase, navigate]);
  const toastSuccess = () => {
    toast("Logged In Successful", {
      autoClose: true,
      type: "success",
    });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true);

    firebase
      .UserDetails(FirstName, LastName, email, Password)
      .then((data) => {
        firebase
          .signUp(email, Password)
          .then((data) => {
            toastSuccess();
            setIsLoading(false);
            // console.log(data);
          })
          .catch((error) => {
            toast(`error ${error}`);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        toast(`error ${error}`);
        setIsLoading(false);

      });
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? <Loading /> : ""}

      <form
        action=""
        className="flex gap-5 w-max pb-10 pl-10 pr-10 pt-10  h-1/2 justify-center items-center flex-col"
      >
        <h1 className="font-bold text-2xl text-white">Sign Up</h1>
        <input
          value={FirstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          type="text"
          className=" border-b-[1px] focus:border-b-2 focus:border-teal-900 border-cyan-700 bg-transparent placeholder:text-cyan-900 text-cyan-900  focus:outline-none p-2 w-full font-bold pl-2"
          placeholder="First Name"
        />
        <input
          value={LastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          type="text"
          className=" border-b-[1px] focus:border-b-2 focus:border-teal-900 border-cyan-700 bg-transparent placeholder:text-cyan-900 text-cyan-900  focus:outline-none p-2 w-full font-bold pl-2"
          placeholder="Last Name"
        />
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
          className=" border-b-[1px] focus:border-b-2 focus:border-teal-900 border-cyan-700 bg-transparent placeholder:text-cyan-900 text-cyan-900 focus:bg-transparent focus:outline-none p-2 w-full font-bold pl-2"
          placeholder="Password"
        />
        <button
          type="submit"
          className="p-2  rounded-full hover:bg-white hover:text-cyan-900 transition-all duration-300 hover:border-2 hover:border-cyan-900 bg-cyan-900 text-white font-bold w-full"
          onClick={handleSignUp}
        >
          SignUp
        </button>
      </form>

    </>
  );
};

export default SignUp;
