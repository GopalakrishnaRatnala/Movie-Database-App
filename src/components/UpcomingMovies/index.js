import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import MovieCard from '../MovieCard'

class UpcomingMovies extends Component {
  state = {upcomingMovies: [], isLoading: true, pageNo: 1}

  componentDidMount() {
    this.getUpcomingMoviesDate()
  }

  getUpcomingMoviesDate = async () => {
    const {pageNo} = this.state
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=8cedd6c4b239cb863992d2d1737cc0be&language=en-US&page=${pageNo}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    this.setState({upcomingMovies: data.results, isLoading: false})
  }

  onClickPrevPage = () => {
    const {pageNo} = this.state
    if (pageNo > 1) {
      this.setState(
        prevState => ({
          pageNo: prevState.pageNo - 1,
        }),
        this.getUpcomingMoviesDate,
      )
    }
  }

  onClickNextPage = () => {
    this.setState(
      prevState => ({
        pageNo: prevState.pageNo + 1,
      }),
      this.getUpcomingMoviesDate,
    )
  }

  render() {
    const {upcomingMovies, isLoading, pageNo} = this.state

    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#fff" height="50" width="50" />
          </div>
        ) : (
          <div className="movie__list">
            <h1 className="list__title">UPCOMING</h1>
            <div className="list__cards">
              {upcomingMovies.map(movie => (
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

export default UpcomingMovies
