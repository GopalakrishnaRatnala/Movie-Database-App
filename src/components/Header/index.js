import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  console.log('')
  return (
    <nav className="header">
      <div className="headerLeft">
        <Link to="/" style={{textDecoration: 'none'}}>
          <h1 className="App_title"> movieDB</h1>
        </Link>
        <Link to="/" style={{textDecoration: 'none'}}>
          <span>Popular</span>
        </Link>
        <Link to="/top-rated" style={{textDecoration: 'none'}}>
          <span>Top Rated</span>
        </Link>
        <Link to="/upcoming" style={{textDecoration: 'none'}}>
          <span>Upcoming</span>
        </Link>
      </div>
    </nav>
  )
}

export default Header
