import Score from "../components/Score";

const ScoreTable = ({highScores}) => {

    const score = highScores.map((element) => {
        return ( 
            <Score score ={ element.score } playerName={ element.playerName } />
        );
    });
    


    return (
        <>
        <h3>High Scores</h3>
        <p>{score}</p>
        </>
    )
};

export default ScoreTable;