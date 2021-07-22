import React from 'react'
import Header from './components/ui/Header/Header'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/pages/HomeScreen/HomeScreen';
import DetailScreen from './components/pages/DetailScreen/DetailScreen';
import 'mapbox-gl/dist/mapbox-gl.css';
import Footer from './components/ui/Footer/Footer';

const App = () => {
  
  return (
    <Router>
      <div className='main'>
        <Header />
        <Switch>
          <Route exact path='/detail/:id' component={DetailScreen} />
          <Route exact path='/' component={HomeScreen} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
