import React from 'react';
import './Card.css';
import useSound from 'use-sound';
import flipcard from '../sounds/flipcard.mp3'

const Card = props => {
    const {frontImg, backImg, flipped, onClick} = props
    const img = flipped ? frontImg : backImg
    const [play] = useSound(flipcard);

    return (
        <div className="Card" onClick={onClick}>
            <img src={img} onClick={play} alt=""/>
        </div>
    )
}

export default Card;