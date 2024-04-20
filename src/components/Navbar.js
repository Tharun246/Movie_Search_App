
import { Link } from "react-router-dom";
import search from '../search.svg';
import { React, useState} from 'react';
const Navbar = () => 
{
  
  const[query,setQuery]=useState("");
  return ( 
    <>
    <div className='navbar' style={{zIndex:1}}>
        <div className='left'>
            <input type="text" className="search-bar" placeholder='search movie' onChange={(e)=>setQuery(e.target.value)}/>
            <Link to="/movies"> 
            <img src={search} alt="" className="search-icon" />
            </Link>
        </div>
        {console.log(query)}
        <div className='middle'>
            <p className="title">MovieLand</p>
        </div>
        <div className='right'>
          
        <Link to="/"> 
        <p>Home</p>
        
        </Link>
        <Link to='/movies'>
          
          <p>Movies</p>      
          </Link>    
        </div>
    </div>

    </>
    
  )
}

export default Navbar;