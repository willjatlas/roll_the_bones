import React, {useState} from 'react';
import CardBoard from "../components/CardBoard";
import backImg from "../card_images/back.png";
import angular from "../card_images/angular.png";
import css from "../card_images/css.png";
import go from "../card_images/go.png";
import html from "../card_images/html.png";
import rail from "../card_images/rail.png";
import react from "../card_images/react.png";
import scala from "../card_images/scala.png";
import vue from "../card_images/vue.png"

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
        const images = {angular, css, go, html, rail, react, scala, vue}
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