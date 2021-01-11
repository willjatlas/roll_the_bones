import React, {useState} from 'react';
import backImg from "../card_images/back.png";

const CardDisplay = () => {

    const [cards, setCards] = useState(buildCards())
    const renderCard = card => {
        const {frontImg, backImg, flipped} = card
        const img = flipped ? frontImg : backImg
        return (
            <div className="Card">
                <img className="card-image" src={img} alt=""/>
            </div>
        )
    }

    return <div className="CardDisplay">
        <div className="Board">
            {cards.map(renderCard)}
        </div>
    </div>
}

    function buildCards() {
        let id = 0
        const images = {
            angular: 'url to img',
            css: 'url to img',
            html: 'url to img',
            go: 'url to img',
            rail: 'url to img',
            react: 'url to img',
            scala: 'url to img',
            vue: 'url to img',
        }
        const cards = Object.keys(images).reduce((result,key) => {
            const createCard = () => ({
                id: id++, // Unique identify of each card
                type: key, // Value to check if 2 cards open are same type
                backImg: backImg, // The placeholder image when card is closed 
                frontImg: 'url to frontImg', // The image shown when the card is open
                flipped: false, // Value to check is card is open or closed
            })
            result.push(createCard())
            return result
        }, [])
        return cards
    }

export default CardDisplay;