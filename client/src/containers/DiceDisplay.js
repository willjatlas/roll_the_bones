import Die from "../components/Die"
import { rollin } from "react-animations";
import styled, {keyframes} from "styled-components";


const DiceDisplay = ({diceList})=>{

    const RollAnimation = keyframes`${rollin}`;
    const RollInDiv     = styled.div`animation: 5s ${RollAnimation};`;

    const die = diceList.map((element)=>{
        return(
            <Die avail={element.active} value={element.value} key={element._id} />
        );
    });

    return(
        <div id="dice-display">
            <RollInDiv>
                {die}
            </RollInDiv>
        </div>
    );
};

export default DiceDisplay;