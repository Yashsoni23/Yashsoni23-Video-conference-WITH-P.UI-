import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [room,setRoom] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
      e.preventDefault();
      navigate(`/room/${room}`)
    }
  return (
    <>

      <div className="flex bg-slate-200 flex-col justify-center items-center w-screen gap-4 h-screen">
      <h1 className="text-3xl font-bold ">Home Page</h1>

        <form
          action=""
          className="flex flex-col justify-center items-center gap-5 "
        >
          <div className="flex justify-center gap-5 items-center ">
            <label htmlFor="roomno" className=" font-bold ">
              RoomNo:
            </label>
            <input
              type="text"
              name="roomno"
              id=" "
              className="font-bold p-2 rounded-3xl focus:outline-none focus:border-b-2 pl-4 focus:border-slate-400"
              placeholder="Enter Room No..."
              value={room}
              onChange={(e)=>setRoom(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-slate-500 p-2 rounded-xl text-white hover:text-slate-500 hover:bg-slate-100 hover:border-2 hover:border-slate-400 duration-300 transition-all   text-2xl font-bold"
          >
            Enter In Room
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
