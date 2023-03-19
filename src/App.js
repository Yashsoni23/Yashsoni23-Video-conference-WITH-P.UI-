import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Login';
import RoomPage from './pages/Conference';
import Chatroom from './pages/Chats';
import Dashboard from "./pages/Dashboard"
import FireChatRoom from './pages/Firechatroom';
import About from './pages/components/About';
import FAQ from './pages/components/FAQ';
function App() {
  return (
    <div className="App">
     <Routes>

      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Chat' element={<FireChatRoom/>}/>
      <Route path='/FAQ' element={<FAQ/>}/>
      <Route path='/Conference/:roomid' element={<RoomPage/>}/>
      <Route path='/chat/:roomid' element={<Chatroom/>}/>
     </Routes>
    </div>
  );
}

export default App;
