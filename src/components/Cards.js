import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout Epic Options</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/EVM-1.jpg'
              text='EVENT MANAGEMENT TECHNIQUE'
              
            />
            <CardItem
              src='images/EVM-6.jpg'
              text='EVENT MANAGEMENT CYCLE'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/evm-3.jpg'
              text='Celebrate Event without Tensions'
              
            />
            <CardItem
              src='images/EVM-4.jpg'
              text='EVENT PLANNING TIMELINE'
              
            />
            <CardItem
              src='images/EVM-5.jpg'
              text='BOOK FOR YOUR EVENT TODAY'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;