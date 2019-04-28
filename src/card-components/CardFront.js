import React, { Component } from 'react';

export default class CardFront extends Component {


  // generateMovieCards = () => {
  //   // map over your movieData array and return the correct
  //   console.log(this.props)
  // }

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
