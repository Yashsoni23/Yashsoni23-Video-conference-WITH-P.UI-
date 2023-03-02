import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { useFirebase } from "../context/firebase";
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [room, setRoom] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();
  useEffect(
    (e) => {
      setIsLoading(true);
      if (!firebase.isLoggedIn) {
        navigate("/");
      }
      setIsLoading(false);

    },
    [navigate]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/Conference/${room}`);
  };
  return (
    <>
      <div className="flex bg-white sm:flex-row flex-col justify-center items-center w-screen gap-4 h-screen">
        <Navbar />
        {isLoading ? <Loading /> : ""}
        <div className="flex bg-mobile  sm:w-1/2 w-[320px] h-[320px] bg-center sm:h-full  "></div>

        <div className="flex w-1/2 p-8 pt-22  flex-col gap-5">
          <h1 className="sm:text-3xl text-2xl font-bold ">Join Now</h1>

          <form
            action=""
            className="flex flex-col justify-center items-center gap-5 "
          >
            <div className="flex justify-center flex-col gap-5 items-center ">
              <div className="flex justify-center gap-5 items-center">
                <label
                  htmlFor="roomno"
                  className="sm:text-2xl text-xl  font-bold "
                >
                  Room No:
                </label>
                <input
                  type="text"
                  name="roomno"
                  id=" "
                  className="font-bold placeholder:text-center text-xl text-white text-center bg-teal-800 placeholder:text-white p-3 rounded-3xl focus:outline-none focus:border-b-4 pl-4 focus:border-amber-500"
                  placeholder="Enter Room No..."
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-amber-500 drop-shadow-2xl p-2 rounded-xl text-white hover:text-amber-500 hover:bg-slate-100 hover:border-2 hover:border-amber-500 duration-300 transition-all  sm:text-2xl text-xl font-bold"
              >
                Enter In Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
