import {Link} from "react-router-dom";
import "./ResultsPage.css";

const ResultsPage = (props)=>{

    const displayResult = ()=>{
        if(props.location.state.highScore !== true){
            return(
                <>
                    <h1>Avast Cap'n {props.location.state.playerName}</h1>
                    <h2>Ye made off with: {props.location.state.playerScore} g pieces!
                    </h2>
                    <p>...but ye failed to set a new high score!</p>
                    <Link id="results-link" to="/"> SAIL HOME </Link>
                </>
            );
        }
        else{
            return(
                <>
                    <h1>AVAST YE!, Cap'n {props.location.state.playerName}</h1>
                    <h2>Ye made off with: {props.location.state.playerScore}
                    g pieces </h2>
                    <h2> ... and you set a new HIGHSCORE</h2>
                    <Link id="results-link" to="/scores"> VIEW HIGHSCORES </Link>
                </>
            );
        };
    };

    return( 
        <div id="result-display">
            {displayResult()}
        </div>
    );

};

export default ResultsPage;