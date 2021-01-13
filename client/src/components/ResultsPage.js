import {Link} from "react-router-dom";
const ResultsPage = (props)=>{

    const displayResult = ()=>{
        if(props.location.state.highScore !== true){
            return(
                <>
                    <h1>Avast Cap'n {props.location.state.playerName}</h1>
                    <h2>Ye made off with {props.location.state.playerScore} g pieces!
                    </h2>
                    <p>...but ye failed to set a new high score!</p>
                </>
            );
        }
        else{
            return(
                <>
                    <h1>AVAST YE!, Cap'n {props.location.state.playerName}</h1>
                    <h2>Ye made off with {props.location.state.playerScore}
                    gold pieces, and ye set a new HIGHSCORE!!!</h2>
                    <Link id="results-link" to="/scores"> HIGHSCORES </Link>
                </>
            );
        };
    };

    return( 
        <>
            {displayResult()}
        </>
    );

};

export default ResultsPage;