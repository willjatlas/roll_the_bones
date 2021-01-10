import {useState, useEffect} from "react";
import DiceDisplay from "./DiceDisplay"

const GameDisplay = ()=>{

    // Dice currently hard coded, could use method to return array 
    // of dice objects, given how many dice to use. 
    const dice  = {value: 1, active: true , min: 1, max: 6}
    const dice2 = {value: 1, active: true , min: 1, max: 6}
    const dice3 = {value: 1, active: true , min: 1, max: 6}
    const dice4 = {value: 1, active: true , min: 1, max: 6}
    const dice5 = {value: 1, active: true , min: 1, max: 6}
    const stickNumber = 5; 

    const [playerName, setPlayerName]   = useState("");
    const [playerScore, setPlayerScore] = useState(0);
    const [turnScore, setTurnScore]     = useState(0);
    const [availDice, setAvailDice]     = useState([dice, dice2, dice3, dice4, dice5]);

    // Add the roll value to the players score. 
    const addToPlayerScore = (value)=>{
        let tempNum = playerScore;
        setPlayerScore(value + tempNum);
    }

    // Will return a random number between min & max.
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * max) + min;
    }

    // Takes availDice and rolls new values.
    const rollDiceValues = () => {
        let newDiceArray = availDice.map((element)=>{
            element.value = getRandomInt(element.min, element.max)
            return(element);
        })
        console.log(`new dice array is : ${newDiceArray}`)
        setAvailDice(newDiceArray);
    }

    // Checks a roll for sticking numbers and deactivates die.
    const checkForStickNums = () => {
        let newDiceArray = availDice.map((element)=>{
            if(element.value === stickNumber){
                element.active = false;
            }
            return(element);
        });
        console.log(`new dice array is : ${newDiceArray}`)
        setAvailDice(newDiceArray);
    };

    // Calculates the players score and and adds it
    // to the playerScore, sets turnScore. 
    const calculateRoll = () => {
        let total = 0;
        availDice.forEach((element) => {
            if(element.active === true){
                total += element.value;
            } 
        });
        setTurnScore(total)
        addToPlayerScore(total);
    };

    // Handles the roll dice button for the game. 
    const handleRollButton = ()=>{
        rollDiceValues();
        checkForStickNums();
        calculateRoll();
    }

    return(
        <>
            <h2>Player Score: {playerScore}</h2>
            <h2>Score This Turn: {turnScore}</h2>
            <button onClick={handleRollButton} value="Roll Dice"> Roll Dice </button>
            <DiceDisplay diceList = {availDice}/>
        </>
    );

};

export default GameDisplay;