import Score from "../components/Score";

const ScoreTable = ({highScores}) => {
    // // TODO: possibly .sort on scores so that they display by score value
    // function sortTheScores() {
    //     const scoreA = scoreA[key];
    //     const scoreB = scoreB[key];

    //     let comparison = 0;
    //     if (scoreA > scoreB) {
    //         comparison = 1;
    //     } else if (scoreA < scoreB) {
    //         comparison = -1;
    //     }
    //     return comparison;
    // }

    const sortedScores = highScores.sort((element1, element2) => {
        return element2.score - element1.score;
    });

    const scores = sortedScores.map((element) => {
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