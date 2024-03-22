import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import MovieCard from '../MovieCard'

class PopularMovies extends Component {
  state = {popularMovies: [], isLoading: true, pageNo: 1}

  componentDidMount() {
    this.getPopularMoviesDate()
  }

  getPopularMoviesDate = async () => {
    const {pageNo} = this.state
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=8cedd6c4b239cb863992d2d1737cc0be&language=en-US&page=${pageNo}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    this.setState({popularMovies: data.results, isLoading: false})
  }

  onClickPrevPage = () => {
    const {pageNo} = this.state
    if (pageNo > 1) {
      this.setState(
        prevState => ({
          pageNo: prevState.pageNo - 1,
        }),
        this.getPopularMoviesDate,
      )
    }
  }

  onClickNextPage = () => {
    this.setState(
      prevState => ({
        pageNo: prevState.pageNo + 1,
      }),
      this.getPopularMoviesDate,
    )
  }

  render() {
    const {popularMovies, isLoading, pageNo} = this.state

    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#fff" height="50" width="50" />
          </div>
        ) : (
          <div className="movie__list">
            <h1 className="list__title">POPULAR</h1>
            <div className="list__cards">
              {popularMovies.map(movie => (
                <MovieCard movie={movie} />
              ))}
            </div>
            <div className="buttonsContainer">
              <button
                type="button"
                onClick={this.onClickPrevPage}
                className="paginationButton"
              >
                Prev
              </button>
              <p>{pageNo}</p>
              <button
                type="button"
                onClick={this.onClickNextPage}
                className="paginationButton"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default PopularMovies
