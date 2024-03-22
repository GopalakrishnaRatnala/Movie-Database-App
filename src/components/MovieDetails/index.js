import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class MovieDetails extends Component {
  state = {movieObj: {}, isLoading: true}

  componentDidMount() {
    this.getMovieDetailsData()
  }

  getMovieDetailsData = async () => {
    const {match} = this.props
    const {params} = match
    const MOVIE_ID = params.id
    console.log(params.id)
    const url = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=8cedd6c4b239cb863992d2d1737cc0be&language=en-US`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    this.setState({movieObj: data, isLoading: false})
  }

  render() {
    const {movieObj, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#0000" height="50" width="50" />
          </div>
        ) : (
          <div className="movieDetailsContainer">
            <div className="contentContainer">
              <div className="bothTitleAndRatingsContainer">
                <div className="titleAndDateContainer">
                  <h1>{movieObj.title}</h1>
                  <p>{movieObj.original_title}</p>
                  <div className="dateAndTimeContainer">
                    <p>{movieObj.release_date}</p>
                    <p className="duration">{`${movieObj.runtime} min`}</p>
                  </div>
                </div>
                <div className="ratingContentContainer">
                  <p>IMDb RATING </p>
                  <div className="starAndRatingContainer">
                    <div className="ratingAndVoteContainer">
                      <p>{`${movieObj.vote_average}/10`}</p>
                      <p>{movieObj.vote_count}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="posterAndGenreContainer">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
                  alt="posterImg"
                  className="posterImg"
                />
                <div className="">
                  <ul className="genreContainer">
                    {movieObj.genres.map(eachObj => (
                      <li key={eachObj.id} className="gerneItem">
                        {eachObj.name}
                      </li>
                    ))}
                  </ul>
                  <p>{movieObj.overview}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default MovieDetails
