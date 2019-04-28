import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return (movieData.map(movie =>
      <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>)
    )

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

//
// render() {
//   return (<div>
//     <h1>This is Rapper Container</h1>
//     <RapperForm handleSubmit={this.handleSubmit} />
//     {this.state.rappers.map(rapper => <RapperCard
//       name={rapper.name}
//       happyImage={rapper.happyImage}
//       sadImage={rapper.sadImage}/>)}
//     </div>
