import Die from "../components/Die"

const DiceDisplay = ({diceList})=>{

    const die = diceList.map((element)=>{
        return(
            <Die avail={element.active} value={element.value} key={element._id} />
        );
    });

    return(
        <div id="dice-display">
                {die}
        </div>
    );
};

export default DiceDisplay;