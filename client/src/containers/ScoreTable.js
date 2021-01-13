import Score from "../components/Score";
import './ScoreTable.css';

const ScoreTable = ({highScores}) => {
    
    const score = highScores.map((element) => {
        return <Score playerName={element.playerName} score={element.score} />
    });

    return (
        <>
        <h3>High Scores</h3>
        <ol className="score-table">{score}</ol>
        </>
    )
};

export default ScoreTable;