import {useEffect, useState} from 'react'
import './index.css'
import {useParams} from 'react-router-dom'
import MovieCard from '../MovieCard'

const MovieList = () => {
  const [movieList, setMovieList] = useState([])
  const {type} = useParams()

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${'popular'}?api_key=8cedd6c4b239cb863992d2d1737cc0be&language=en-US`,
    )
      .then(res => res.json())
      .then(data => setMovieList(data.results))
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [type])

  return (
    <div className="movie__list">
      <h2 className="list__title">{'POPULAR'.toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map(movie => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
