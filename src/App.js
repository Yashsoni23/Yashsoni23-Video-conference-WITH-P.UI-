import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Login';
import RoomPage from './pages/Conference';
import Chatroom from './pages/Chats';
import Dashboard from "./pages/Dashboard"
function App() {
  return (
    <div className="App">
     <Routes>

      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Conference/:roomid' element={<RoomPage/>}/>
      <Route path='/chat/:roomid' element={<Chatroom/>}/>
     </Routes>
    </div>
  );
}

export default App;
