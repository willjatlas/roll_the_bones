import Score from "../components/Score";

const ScoreTable = ({highScores}) => {

    const scores = highScores.map((element) => {
        return ( 
            <li>
            <Score score ={ element.score } playerName={ element.playerName } />
            </li>
        );
    });
    


    return (
        <>
        <h3>High Scores</h3>
        <ol>{scores}</ol>
        </>
    )
};

export default ScoreTable;