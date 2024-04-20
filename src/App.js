import './App.css';
import Navbar from './components/Navbar';
import Movie from './components/Movie'
import Main from './components/Main'
import './css/navbar.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App=()=> {

  return (
    <div className='App' >

    <Router>
      <Navbar />  
      <Routes>

        <Route element={<Navbar />} exact path='/nav' />      
        <Route element={<Main />} exact path='/'/> 
        <Route element={<Movie />} exact path='/movies' />
       {/* <Route element={<MovieInfo name=""/>} exact path='/movie-info' /> */}
      </Routes>
    </Router>
       
      </div>
    );
}

export default App;
