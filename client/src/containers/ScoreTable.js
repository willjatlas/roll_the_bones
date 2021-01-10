import Score from "../components/Score";

const ScoreTable = ({highScores}) => {

    const scores = highScores.map((element) => {
        return <li> NAME: { element.playerName } SCORE: { element.score }</li>
    });
    


    return (
        <>
        <h3>High Scores</h3>
        <ol>{scores}</ol>
        </>
    )
};

export default ScoreTable;