import React, {useState, useEffect, Component, useRef} from 'react'
import Card from "./Card";
import './CardBoard.css';
import useSound from 'use-sound';
import Popup from 'reactjs-popup';

const CardBoard = props => {
  const [cards, setCards] = useState(props.cards)
  const [checkers, setCheckers] = useState([])
  const [completed, setCompleted] = useState([])
  const onCardClick = card => () => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return
    const newCheckers = [...checkers, card]
    setCheckers(newCheckers)
    const cardsInCheckersMatched = validateCheckers(newCheckers)
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type])
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000)
    }
    function validateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type === checkers[1].type
    }
    function cardAlreadyInCheckers(checkers, card){
      return checkers.length === 1 && checkers[0].id === card.id
    }
    function checkersFull(checkers){
      return checkers.length === 2
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([])
      }, time)
    }
  }

  useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      flipped:
        checkers.find(c => c.id === card.id) ||
        completed.includes(card.type),
    }))
    setCards(newCards)
  }, [checkers, completed])

  const [openLose, setOpenLose] =useState(false);
  const [openWin, setOpenWin] =useState(false);
  const ref = useRef;
  const closeResults = () => {
    setOpenWin(false) 
    setOpenLose(false)
  };
  
  const [endTime, setEndTime] = useState(0);

  function startTime () {
    var timeContainer = document.getElementById("timer-value");
    var startButton = document.getElementById("start-game");
    var maxTime = 35;
    var timer = 0;
    var timeout = null;
    function count () {
      timeout = setTimeout(function() {
        if (timer < maxTime) {
          timer++;
          timeContainer.innerText = timer;
          count();
          setEndTime(timer);
        }
        else {
          {setOpenLose(true)}
        }
      }, 1000);
    }
    function endGame () {
      clearTimeout(timeout);
      setOpenWin(true) 
    }

    function startGame () {
      if (timeout) { clearTimeout(timeout); }
      timer = 0;
      timeContainer.innerText = timer;
      this.style.display = "none";
      count();
    }
    document.getElementById("start-game").addEventListener("click", startGame);
    document.getElementById("end-game").addEventListener("click", endGame);
  }

  return (
    <div className="CardBoard">
      {cards.map(card => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
      <h3 className="timer-font">Timer: <span id="timer-value">0</span></h3>
      <button id="start-game" onClick={startTime}>Start Game</button>
      <button id="end-game">End Game</button>
      <Popup open={openLose} id="timeUp"> 
        <div className='results'>
          <element className="close" onClick={closeResults}>☠️ </element>
          Time is up! Ye failed its th' plank wit' ye!
        </div>
      </Popup>
      <Popup open={openWin} id="finished">
        <div className='results'>
          <element className="close" onClick={closeResults}>☠️ </element>
          <text>Ye completed th' game in {endTime} seconds! Jack Sparrow be Yo Ho Ho!</text>
        </div>
      </Popup>
    </div>
  )
}


export default CardBoard;