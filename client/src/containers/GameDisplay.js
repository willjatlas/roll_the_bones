import {useState} from "react";
import DiceDisplay from "./DiceDisplay"

const GameDisplay = ()=>{

    const [playerScore, setPlayerScore] = useState(0);
    const [turnScore, setTurnScore]     = useState(0);
    const [playerName, setPlayerName]   = useState("");
    
    

    return(
        <>
        <h2>this is the game display</h2>
        <DiceDisplay />
        </>
    );

};

export default GameDisplay;