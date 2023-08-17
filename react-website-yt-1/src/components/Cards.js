import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Sampaio!</h1>
        <div className='cards__container'>
            <div className='cards_wraper'>
                <ul className='cards_items'>
                    <CardItem 
                    src="images/mercedesss.jpg"
                    text="o milior carro!"
                    label="pedrão"
                    path="/services"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards