import Dice from "../components/Dice"
const DiceDisplay = ({diceList})=>{

    const die = diceList.map((element)=>{
        return(
            <Dice avail={element.avail} value={element.value} />
        );
    });

    return(
        <>
        <h3>This is the dice container</h3>
        {die}
        </>
    );
};

export default DiceDisplay;