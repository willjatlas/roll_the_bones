import {useState, useEffect} from "react";
import DiceDisplay from "./DiceDisplay"

const GameDisplay = ()=>{

    const dice = {value: 1, active: true}
    const stickNumber = 5; 

    const [playerScore, setPlayerScore] = useState(0);
    const [turnScore, setTurnScore]     = useState(0);
    const [playerName, setPlayerName]   = useState("");
    const [availDice, setAvailDice]     = useState([dice, dice, dice]);

    const addToPlayerScore = (value)=>{
        let tempNum = playerScore;
        setPlayerScore(value + tempNum);
    }
    
    const checkForStickNums = (diceArray) => {
        let newDiceArray = diceArray.map((element)=>{
            if(element.value === stickNumber){
                element.active = false; 
            }
        });
        setAvailDice(newDiceArray);
    };

    // Calculates 
    const calculateRoll = (diceArray) => {
        let total = 0;
        diceArray.forEach(element => {
            total += element.value;
        });
        setTurnScore(total)
        addToPlayerScore(total);
    };

    const handleRollButton = (e)=>{
        rollDiceValues(availDice);
        checkForStickNums(availDice);
        calculateRoll(availDice);
    }



    useEffect(()=>{

    }, [])

    

    return(
        <>
        <h2>Player Score: {playerScore}</h2>
        <h2>Score This Turn: {turnScore}</h2>
    
        <DiceDisplay />
        </>
    );

};

export default GameDisplay;