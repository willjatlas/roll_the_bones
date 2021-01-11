import Score from "../components/Score";

const ScoreTable = ({highScores}) => {
    
    const score = highScores.map((element) => {
        return <Score playerName={element.playerName} score={element.score} />
    });

    return (
        <>
        <h3>High Scores</h3>
        <ol>{score}</ol>
        </>
    )
};

export default ScoreTable;