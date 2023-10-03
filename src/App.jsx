import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar.jsx'
import NavBar from './components/NavBar.jsx'
import Movies from './components/Movies.jsx'

function App() {
  const [movies, setMovies] = useState([])
  console.log("app",movies)
  return (
    <>
      <div className='navs'>
        <SideBar />
        <div className='main'>
          <NavBar setMovies={setMovies} />
          <Movies movies={movies}/>
        </div>

      </div>

    </>
  )
}

export default App
