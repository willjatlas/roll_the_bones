import Die from "../components/Die"
const DiceDisplay = ({diceList})=>{

    const die = diceList.map((element)=>{
        return(
            <Die avail={element.active} value={element.value} />
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