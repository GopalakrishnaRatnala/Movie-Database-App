import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

class Header extends Component {
  state = {searchQuery: ''}

  onChangeSearchQuery = event => {
    this.setState({searchQuery: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchQuery} = this.state

    const {history} = this.props

    history.push(`/searchedMovies/${searchQuery}`)
  }

  render() {
    return (
      <nav className="header">
        <Link to="/" style={{textDecoration: 'none'}}>
          <h1 className="App_title"> movieDB</h1>
        </Link>
        <div className="navigation-container">
          <Link to="/" style={{textDecoration: 'none'}}>
            <span>Popular</span>
          </Link>
          <Link to="/top-rated" style={{textDecoration: 'none'}}>
            <span>Top Rated</span>
          </Link>
          <Link to="/upcoming" style={{textDecoration: 'none'}}>
            <span>Upcoming</span>
          </Link>
          <div className="search-container">
            <input
              type="search"
              className="search-element"
              placeholder="Search"
              onChange={this.onChangeSearchQuery}
            />
            <button
              type="button"
              className="search-button"
              onClick={this.onClickSearchButton}
            >
              Search
            </button>
          </div>
        </div>
        <div className="moviesMenu">
          <Link to="/" style={{textDecoration: 'none'}}>
            <p className="menu-item">Popular</p>
          </Link>
          <Link to="/top-rated" style={{textDecoration: 'none'}}>
            <p className="menu-item">Top Rated</p>
          </Link>
          <Link to="/upcoming" style={{textDecoration: 'none'}}>
            <p className="menu-item">Upcoming</p>
          </Link>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
