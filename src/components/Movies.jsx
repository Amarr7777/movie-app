import React, { useState } from 'react'
import '../style/movie.css'

function Movies({movies}) {
  console.log("movies",movies)
  return (
      
      <div className='movie_card'>
        {movies.map((d, i) => (
          <div className='movie' key={i}>
            <img alt={d.Title} className='movie_img' src={d.Poster} />
            <h4 className='movieName'>{d.Title}</h4>
          </div>
        ))}
        
      </div>

  )
}

export default Movies