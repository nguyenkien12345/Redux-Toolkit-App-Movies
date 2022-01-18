import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/movie/:imdbID' component={MovieDetail}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
