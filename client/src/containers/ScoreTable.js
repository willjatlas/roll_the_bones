import Score from "../components/Score";
import './ScoreTable.css';

const ScoreTable = ({highScores}) => {
    
    const score = highScores.map((element) => {
        return <Score playerName={element.playerName} score={element.score} />
    });

    return (
        <>
        <h1>High Scores</h1>
        <ol className="score-table">{score}</ol>
        </>
    )
};

export default ScoreTable;