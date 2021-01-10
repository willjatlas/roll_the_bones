import dice1 from "../dice_images/Dice1.png"
import dice2 from "../dice_images/Dice2.png"
import dice3 from "../dice_images/Dice3.png"
import dice4 from "../dice_images/Dice4.png"
import dice5 from "../dice_images/Dice5.png"
import dice6 from "../dice_images/Dice6.png"
import crossBones from "../dice_images/cross_bones.png"

const Dice = ({avail, value})=>{

    const diceBag = [crossBones, dice1, dice2, dice3,
                    dice4, dice5, dice6]; 

    const displayDice = ()=>{
        if(avail != false){
            return(
                <img className="dice-images" 
                     src={diceBag[value]} 
                     alt="Dice Face Showing {value}" />
            );
        }
        else{
            return(
                <img className="dice-images" 
                     src={diceBag[0]} 
                     alt="Dice showing Cross Bones" />
            );
        };
    };

    return(
        <>
            {displayDice()}
        </>
    );

};

export default Dice;