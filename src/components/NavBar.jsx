import React, { useEffect, useState } from 'react'
import '../style/navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoon, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Movies from './Movies'

function NavBar({setMovies}) {
  // const [movies, setMovies] = useState([])
  const [filteredMovies, setfilteredMovies] = useState([])

  
  const handleInputChange = (value) => {
    var res = filteredMovies.filter(f=>f.Title.toLowerCase().includes(value))
    setMovies(res)
  };

  // use effect fetch 
  useEffect(() => {
    fetchMovies();
  }, []);

  // fecthing
  const fetchMovies = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?t=kabhi&apikey=818b0cf3"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMovies(data);
      setfilteredMovies(data);
      console.log(data)
      console.log(data.Title)
      // createElementsFromData(data.results.books);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  return (
    <div className='navbarMain'>
      <ul>
        <li></li>
        <li><FontAwesomeIcon className='FontAwesomeIcon' icon={faSearch} /><input type='text'
          onChange={e => handleInputChange(e.target.value)} /></li>
        <li>LOGIN <FontAwesomeIcon className='FontAwesomeIcon' icon={faUser} /></li>
      </ul>
    </div>
  )
}

export default NavBar

