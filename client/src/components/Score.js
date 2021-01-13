const Score = ({score, playerName}) => {

    return (
        <div>
            <li id="score">{playerName}, with a score of :   {score}</li>
        </div>
    );
};

export default Score;