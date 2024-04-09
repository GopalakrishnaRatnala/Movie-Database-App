import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MovieCard from '../MovieCard'

import './index.css'

class SearchedMovies extends Component {
  state = {query: '', searchedMoviesList: [], isLoading: true}

  componentDidMount() {
    this.getSearchedMoviesData()
  }

  componentDidUpdate(prevProps) {
    const {match} = this.props
    const {params} = match
    const searchQuery = params.id

    if (prevProps.match.params.id !== searchQuery) {
      this.setState({isLoading: true, query: searchQuery}, () => {
        this.getSearchedMoviesData()
      })
    }
  }

  getSearchedMoviesData = async () => {
    const {match} = this.props
    const {params} = match
    const searchQuery = params.id

    this.setState({query: searchQuery}, async () => {
      const {query} = this.state
      const url = `https://api.themoviedb.org/3/search/movie?api_key=8cedd6c4b239cb863992d2d1737cc0be&language=en-US&query=${query}&page=1`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      this.setState({searchedMoviesList: data.results, isLoading: false})
    })
  }

  render() {
    const {searchedMoviesList, isLoading, query} = this.state
    console.log(`query${query}`)
    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#fff" height="50" width="50" />
          </div>
        ) : (
          <div className="movie__list">
            <h1 className="list__title">Search Results</h1>
            <div className="list__cards">
              {searchedMoviesList.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default SearchedMovies
