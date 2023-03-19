import { getToken, onMessage } from "firebase/messaging";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { useFirebase ,onMessageListener} from "../context/firebase";
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Room number Can't be empty");
  const [room, setRoom] = useState();
  const firebase = useFirebase();
  const navigate = useNavigate();


  function requestPermission() {
    console.log("Requesting permission...");

    Notification.requestPermission().then(async(permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
       const token = await getToken(firebase.messaging,{vapidKey:"BPWusCnUogUAxi1HRUge_zk3uCq34Uyr8K6Qcv2eNODKhL6c7Bin_sx7L68ene2jT7PvYHpDgohrKh9j02PD8Yo"});
       console.log("Token:",token);
       onMessage(firebase.messaging,(payload)=>{
        console.log(payload);
       })

      }
    });
  }
  
  useEffect(
    (e) => {
      setIsLoading(true);
      if (!firebase.isLoggedIn) {
        navigate("/");
      }
      requestPermission();
      setIsLoading(false);
      onMessageListener().then((p)=>console.log(p))
    },
    [navigate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (room.length < 3) {
      if (window.confirm(" Please Enter room value > 2 integer!!!")) {
        return false;
      }
    } else if (window.confirm(` Are sure you want to go in room no ${room}!`)) {
      navigate(`/Conference/${room}`);
    }
  };
  return (
    <>
      {isLoading ? <Loading /> : ""}

      <div className="flex relative overflow-hidden bg-white sm:flex-row flex-col justify-center items-center w-screen gap-4 h-screen">
        <Navbar />
        <div className="flex bg-mobile  sm:w-1/2 w-[320px] h-[320px] bg-center sm:h-full  "></div>

        <div className="flex w-1/2 p-8 pt-22 sm:pt-10  flex-col gap-5">
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
                  type="Number"
                  name="roomno"
                  id=" roomno"
                  autoCorrect={false}
                  autoComplete={false}
                  onScroll={false}
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
