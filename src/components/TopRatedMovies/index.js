import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import MovieCard from '../MovieCard'

class TopRatedMovies extends Component {
  state = {topRatedMovies: [], isLoading: true}

  componentDidMount() {
    this.getTopRatedMoviesDate()
  }

  getTopRatedMoviesDate = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=8cedd6c4b239cb863992d2d1737cc0be&language=en-US&page=1'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    this.setState({topRatedMovies: data.results, isLoading: false})
  }

  render() {
    const {topRatedMovies, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#fff" height="50" width="50" />
          </div>
        ) : (
          <div className="movie__list">
            <h1 className="list__title">TOP RATED</h1>
            <div className="list__cards">
              {topRatedMovies.map(movie => (
                <MovieCard movie={movie} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default TopRatedMovies
