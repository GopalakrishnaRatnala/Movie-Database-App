import './index.css'
import {Link} from 'react-router-dom'

const Cards = ({movie}) => {
  console.log('')
  return (
    <>
      <div className="cards">
        <img
          className="cards__img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movieImg"
        />
        <div className="cards__overlay">
          <p className="card__title">{movie.title}</p>
          <div className="card__runtime">
            {movie.release_date}
            <span className="card__rating">
              {movie.vote_average}
              <i className="fas fa-star" />
            </span>
          </div>
          <div className="card__description">
            {movie ? `${movie.overview.slice(0, 118)} ...` : ''}
          </div>
          <Link
            to={`/movie/${movie.id}`}
            style={{textDecoration: 'none', color: 'white'}}
          >
            <button className="card_viewMoreButton" type="button">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Cards
