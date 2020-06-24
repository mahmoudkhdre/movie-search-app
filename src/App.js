import React, {Component} from 'react';
import SearchMovies from './searchMovie'
 
import './App.css';
class App extends Component{
  render(){
    return (
      <div className="container">
       <h1 className="title">{this.props.title} </h1>
       <SearchMovies />
      </div>
    );
  }
}

export default App;
