import Score from "../components/Score";
import './ScoreTable.css';

const ScoreTable = ({highScores}) => {
    
    const score = highScores.map((element) => {
        return <Score playerName={element.playerName} score={element.score} />
    });

    return (
        <div className="score-table">
            <h5>High Scores</h5>
            <ol className="ordered-list">{score}</ol>
        </div>
    )
};

export default ScoreTable;