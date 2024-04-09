import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class MovieDetails extends Component {
  state = {movieObj: {}, isLoading: true, castList: []}

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

    const castUrl = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=8cedd6c4b239cb863992d2d1737cc0be&language=en-US`

    const castResponse = await fetch(castUrl)
    const castData = await castResponse.json()
    console.log(castData)

    this.setState({castList: castData.cast})
  }

  render() {
    const {movieObj, isLoading, castList} = this.state
    console.log(castList)
    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#0000" height="50" width="50" />
          </div>
        ) : (
          <div>
            <div className="movieDetailsContainer">
              <div className="contentContainer">
                <div className="posterAndDetailsContainer">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
                    alt="posterImg"
                    className="posterImg"
                  />
                  <div>
                    <h1 className="movieTitle">{movieObj.title}</h1>
                    <p className="rating">{`Rating: ${movieObj.vote_average}`}</p>
                    <div>
                      <p className="duration">{`${movieObj.runtime} min`}</p>
                      <ul className="genreContainer">
                        {movieObj.genres.map(eachObj => (
                          <li key={eachObj.id} className="gerneItem">
                            {eachObj.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="releaseDate">{`Release Date: ${movieObj.release_date}`}</p>
                  </div>
                </div>
                <div>
                  <p className="overviewHeading">Overview</p>
                  <p className="overview">{movieObj.overview}</p>
                </div>
              </div>
              <div className="backdropImgContainer">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`}
                  alt="backdropImg"
                  className="backdropImg"
                />
              </div>
            </div>
            <div>
              <ul className="castItemsContainer">
                {castList.map(eachItem => (
                  <li className="castItem" key={eachItem.cast_id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${eachItem.profile_path}`}
                      alt="castProfileImg"
                      className="castImg"
                    />
                    <div className="castDetailsOverlay">
                      <p>{eachItem.original_name}</p>
                      <p>{`Character: ${eachItem.character}`}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default MovieDetails
