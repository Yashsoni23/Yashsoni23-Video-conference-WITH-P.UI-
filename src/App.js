import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import RoomPage from './pages/Room';
import Chatroom from './pages/Chats';
function App() {
  return (
    <div className="App">
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/room/:roomid' element={<RoomPage/>}/>
      <Route path='/chat/:roomid' element={<Chatroom/>}/>
     </Routes>
    </div>
  );
}

export default App;
