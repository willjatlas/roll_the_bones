import Score from "../components/Score";

const ScoreTable = ({highScores}) => {
    // TODO: possibly .sort on scores so that they display by score value
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