import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import RoomPage from './pages/Room';
function App() {
  return (
    <div className="App">
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/room/:roomid' element={<RoomPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
