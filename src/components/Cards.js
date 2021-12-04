import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/EVM3.jpg'
              text='The process of evm'
              
              
            />
            <CardItem
              src='images/video.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/EVM2.jpg'
              text='Event management'
              
              
            />
            <CardItem
              src='images/EVM1.jpg'
              text='How to do planning'
              
              
            />
            <CardItem
              src='images/EVM4.jpg'
              text='Event planning'
              
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;