import React, { Component } from 'react';
import Card from './Card';
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(card => <Card card={card}/>)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.PropTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string
    })
   )
};

// {
//   headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
//   tab: "javascript",
//   img: "./assets/sir.jpg",
//   author: "SIR RUFF'N'STUFF"
// }



export default Cards;