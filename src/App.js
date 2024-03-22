import {Switch, Route} from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import MovieDetails from './components/MovieDetails'

// write your code here
const App = () => {
  console.log('')
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/top-rated" component={TopRatedMovies} />
        <Route exact path="/upcoming" component={UpcomingMovies} />
        <Route exact path="/movie/:id" component={MovieDetails} />
      </Switch>
    </div>
  )
}

export default App
