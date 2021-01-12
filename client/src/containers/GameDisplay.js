import {useState, useEffect, useRef} from "react";
import DiceDisplay from "./DiceDisplay";
import PlayerNameForm from "../components/PlayerNameForm";
import Popup from 'reactjs-popup';


const GameDisplay = ({checkNewHighScore})=>{

    // Dice currently hard coded, could use method to return array 
    // of dice objects, given how many dice to use. 
    const dice  = {value: 1, active: true , min: 1, max: 6}
    const dice2 = {value: 1, active: true , min: 1, max: 6}
    const dice3 = {value: 1, active: true , min: 1, max: 6}
    const dice4 = {value: 1, active: true , min: 1, max: 6}
    const dice5 = {value: 1, active: true , min: 1, max: 6}
    const stickNumber = 5; 

    // Game States
    const [playerName, setPlayerName]   = useState("Player");
    const [playerScore, setPlayerScore] = useState(0);
    const [turnScore, setTurnScore]     = useState(0);
    const [availDice, setAvailDice]     = useState([dice, dice2, dice3, dice4, dice5]);
    const [gameState, setGameState]     = useState(true);
    const [btnDisable, setBtnDisable]   = useState(true);
    const [plyrNmDsbl, setPlyrNmDsbl]   = useState(false);
    const [highScore, setHighScore]     = useState(false);

    // Adds the entered player name to the state
    const handleName = (name)=>{
        setPlayerName(name);
        setBtnDisable(false);
        setPlyrNmDsbl(true);
    };
    
    // Add the roll value to the players score. 
    const addToPlayerScore = (value)=>{
        let tempNum = playerScore;
        setPlayerScore(value + tempNum);
    }

    // Will return a random number between min & max.
    const getRandomInt = (min, max)=>{
        return Math.floor(Math.random() * max) + min;
    }

    // Takes availDice and rolls new values.
    const rollDiceValues = ()=>{
        let newDiceArray = availDice.map((element)=>{
            element.value = getRandomInt(element.min, element.max)
            return(element);
        })
        console.log(`new dice array is : ${newDiceArray}`)
        setAvailDice(newDiceArray);
    }

    // Checks a roll for sticking numbers and deactivates die.
    const checkForStickNums = ()=>{
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
    const calculateRoll = ()=>{
        let total = 0;
        availDice.forEach((element) => {
            if(element.active === true){
                total += element.value;
            } 
        });
        setTurnScore(total)
        addToPlayerScore(total);
    };

    // Checks for active dice.
    const checkDieAvailable = (diceList)=>{
        let boolList = diceList.map(element=>element.active);
        let output   = boolList.includes(true);
        return output;
    };
 
    // Handles the roll dice button for the game. 
    const handleRollButton = ()=>{
        if(checkDieAvailable(availDice) !== false){
            rollDiceValues();
            checkForStickNums();
            calculateRoll();
            if (checkDieAvailable(availDice) === false){
                setGameState(false);
            };
        };
    };

    const [open, setOpen] = useState(false);
    const ref = useRef();
    const closeResults = () => ref.current.close();

    // watches the game state for when the game is finished. 
    useEffect(()=>{
        // If statement catches init render.
        if(gameState !== true){
            setBtnDisable(true);
            setOpen(o => !o);
            setHighScore(checkNewHighScore(playerName, playerScore))
        }
    }, [gameState]);

    return(
        <div id="game-display">
            <PlayerNameForm handleName={handleName} 
                            disabled={plyrNmDsbl}  />
            <h2>{playerName}'s Score : {playerScore}</h2>
            <h2>Score This Turn: {turnScore}</h2>
            <button id="roll-dice-button" 
                    onClick={handleRollButton} 
                    disabled={btnDisable}> Roll Dice 
            </button>
            
            <Popup open={open}>
                <div className="result">
                    <element 
                      className="close" 
                      onClick={closeResults}
                    >
                    ☠️;
                    </element>
                Blow me down, what a score! {playerScore}
                </div>
            </Popup>
            <DiceDisplay diceList = {availDice}/>
        </div>
    );

};

export default GameDisplay;