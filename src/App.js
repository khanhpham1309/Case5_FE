import './App.css';
import {Route, Routes} from "react-router-dom";
// import {useSelector} from "react-redux";
// import Dashboard from './Components/Dashboard/Dashboard';
import Playlist from './Components/Playlist/Playlist';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Library from './Components/Songs/Library/Library';
import Personal from './Components/Personal/Personal';
import Album from './Components/Album/Album';
import Login from "./pages/login";
import Register from "./pages/register";


function App() {


  

  return (
    <>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        <Route path='/' element={<Layout/>}>
            <Route path='/home' element={<Home/>}></Route>
          <Route path='/search' element={<Search/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/personal' element={<Personal/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
          <Route path='/album' element={<Album/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
