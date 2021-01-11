import React, {useState} from 'react';
import CardBoard from "../components/CardBoard";
import backImg from "../card_images/back.png";
import jack1 from "../card_images/jack1.jpeg";
import jack2 from "../card_images/jack2.jpeg";
import jack3 from "../card_images/jack3.jpeg";
import jack4 from "../card_images/jack4.jpeg";
import jack5 from "../card_images/jack5.jpeg";
import jack6 from "../card_images/jack6.jpeg";
import jack7 from "../card_images/jack7.jpeg";
import jack8 from "../card_images/jack8.jpg";

const CardDisplay = () => {
    const cards = buildCards()
    return (
        <div className="CardDisplay">
            <CardBoard cards={cards} />
        </div>
    )
}

    function buildCards() {
        let id = 0
        const images = {jack1, jack2, jack3, jack4, jack5, jack6, jack7, jack8}
        const cards = Object.keys(images).reduce((result, item) => {
            const createCard = () => ({
                id: id++, // Unique identify of each card
                type: item, // Value to check if 2 cards open are same type
                backImg: backImg, // The placeholder image when card is closed 
                frontImg: images[item], // The image shown when the card is open
                flipped: false, // Value to check is card is open or closed
            })
            return [...result, createCard(), createCard()]
        }, [])
        return shuffle(cards)
    }

    function shuffle(arr) {
        let len = arr.length
        for (let i = 0; i < len; i++) {
            let randomIdx = Math.floor(Math.random() * len)
            let copyCurrent = {...arr[i]}
            let copyRandom = {...arr[randomIdx]}
            arr[i] = copyRandom
            arr[randomIdx] = copyCurrent
        }
        return arr
    }

export default CardDisplay;