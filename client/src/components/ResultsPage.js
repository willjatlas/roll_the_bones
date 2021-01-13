import {Link} from "react-router-dom";
import bones from "../images/cross_bones.png"
import "./ResultsPage.css";

const ResultsPage = (props)=>{

    const displayResult = ()=>{
        if(props.location.state.highScore !== true){
            return(
                <div id="result-text-wrap">
                    <h1>Avast {props.location.state.playerName}</h1>
                    <h2>Ye made off with {props.location.state.playerScore} g pieces!</h2>
                    <p>...but ye failed to set a new high score!</p>
                    <Link id="results-link" to="/"> SAIL HOME </Link>
                </div>
            );
        }
        else{
            return(
                <div id="result-text-wrap">
                    <h1>AVAST YE!, {props.location.state.playerName}</h1>
                    <h2>Ye made off with: {props.location.state.playerScore}
                    g pieces </h2>
                    <h2> ... and you set a new HIGHSCORE</h2>
                    <Link id="results-link" to="/scores"> VIEW HIGHSCORES </Link>
                </div>
            );
        };
    };

    return( 
        <div id="result-display">
            <img className="home-images" src={bones}/>
            {displayResult()}
            <img className="home-images" src={bones}/>
        </div>
    );

};

export default ResultsPage;