import React, {useState} from 'react';

const CardDisplay = () => {

    const [cards, setCards] = useState(buildCards())
    const renderCard = card => {
        const {frontImg, backImg, flipped} = card
        const img = flipped ? frontImg : backImg
        return (
            <div className="Card">
                <img src={img} alt=""/>
            </div>
        )
    }

    return <div className="CardDisplay">
        <div className="Board">
            {cards.map(renderCard)}
        </div>
    </div>
}