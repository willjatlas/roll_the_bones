import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import DiceDisplay from "./DiceDisplay";
import PlayerNameForm from "../components/PlayerNameForm";
import useSound from 'use-sound';
import rolldice from '../sounds/rolldice.mp3'
import "./GameDisplay.css";

const GameDisplay = ({checkNewHighScore})=>{

    // Dice currently hard coded, could use method to return array 
    // of dice objects, given how many dice to use. 
    const dice  = {value: 1, active: true , min: 1, max: 6}
    const dice2 = {value: 1, active: true , min: 1, max: 6}
    const dice3 = {value: 1, active: true , min: 1, max: 6}
    const dice4 = {value: 1, active: true , min: 1, max: 6}
    const dice5 = {value: 1, active: true , min: 1, max: 6}
    const stickNumbers = [2,5]; 

    // Game States
    const [playerName, setPlayerName]   = useState("Player");
    const [playerScore, setPlayerScore] = useState(0);
    const [turnScore, setTurnScore]     = useState(0);
    const [availDice, setAvailDice]     = useState([dice, dice2, dice3, dice4, dice5]);
    const [gameState, setGameState]     = useState(true);
    
    // States for div visability.
    const [highScore, setHighScore]     = useState(false);
    const [plyrNmDsbl, setPlyrNmDsbl]   = useState(false);
    const [btnDisable, setBtnDisable]   = useState(true);
    const [finBtnDsbl, setFinButDsble]  = useState(true);

    // Roll dice sound
    const [play] = useSound(rolldice);

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
            if (element.active !== false) {
                element.value = getRandomInt(element.min, element.max)
                return(element)
            };
        })
        console.log(`new dice array is : ${newDiceArray}`)
        setAvailDice(newDiceArray);
    }

    // Checks a roll for sticking numbers and deactivates die.
    const checkForStickNums = ()=>{
        let newDiceArray = availDice.map((element)=>{
            if(stickNumbers.includes(element.value) === true){
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
            play();
            rollDiceValues();
            checkForStickNums();
            calculateRoll();
            if (checkDieAvailable(availDice) === false){
                setGameState(false);
            };
        };
    };
    
    // watches the game state for when the game is finished. 
    useEffect(()=>{
        // If statement catches init render.
        if(gameState !== true){
            setBtnDisable(true);
            setFinButDsble(false);
            setHighScore(checkNewHighScore(playerName, playerScore))
        }
    }, [gameState]);

    return(
        <div id="game-display">
            <PlayerNameForm handleName={handleName} 
                            disabled={plyrNmDsbl}  />

            <div className="score-wraps">             
                <h2>{playerName}'s Score : {playerScore}</h2>
            </div> 
            <div className="score-wraps"> 
                <h2>Score This Turn : {turnScore}</h2>
            </div> 
            <button className="buttons" 
                    onClick={handleRollButton} 
                    style={btnDisable ? {pointerEvents: "none", 
                                         opacity: "0.0"} : {}}
                                         > ROLL YE'R DICE! 
            </button>
            <DiceDisplay diceList = {availDice}/>
            <div id="results-link-wrap" 
                 style={finBtnDsbl ? {pointerEvents: "none", 
                                      opacity: "0.0"} : {}}>
                <Link id="results-link"
                    to={{
                        pathname: "/resultsPage",
                        state:{
                            playerName,
                            playerScore,
                            highScore
                        }
                    }}> SEE YER RESULTS!</Link>
            </div>
        </div>
    );

};

export default GameDisplay;
