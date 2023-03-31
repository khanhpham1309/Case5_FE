import './App.css';
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import Dashboard from './Components/Dashboard/Dashboard';
import Playlist from './Components/Playlist/Playlist';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Library from './Components/Library/Library';
import Personal from './Components/Personal/Personal';


function App() {

    const auth = useSelector(state => state.auth)

  

  return (
    <>
      <Routes>  
        <Route path='' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/personal' element={<Personal/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;