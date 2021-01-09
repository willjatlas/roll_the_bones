import {useState, useEffect} from "react";
import DiceDisplay from "./DiceDisplay"

const GameDisplay = ()=>{

    const [playerScore, setPlayerScore] = useState(0);
    const [turnScore, setTurnScore]     = useState(0);
    const [playerName, setPlayerName]   = useState("");
    //Decrease diceToRoll as the roll sticking values
    const [diceToRoll, setDiceToRoll]   = useState(5);
    //If the value is 0, do not render the dice as it is inactive
    const [rollValues, setRollValues]   = useState([0,0,0,0,0]);

    const rollDice = ()=>{
        //Returns the random dier rolls of available dice.
    }

    const handleRollButton = ()=>{
        //Handle the button that rolls the available dice
    }

    useEffect(()=>{

    }, [])

    

    return(
        <>
        <h2>this is the game display</h2>
        <DiceDisplay />
        </>
    );

};

export default GameDisplay;