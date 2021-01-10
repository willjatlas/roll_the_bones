import die1 from "../dice_images/Dice1.png"
import die2 from "../dice_images/Dice2.png"
import die3 from "../dice_images/Dice3.png"
import die4 from "../dice_images/Dice4.png"
import die5 from "../dice_images/Dice5.png"
import die6 from "../dice_images/Dice6.png"
import crossBones from "../dice_images/cross_bones.png"

const Die = ({avail, value})=>{

    const diceBag = [crossBones, die1, die2, die3,
                    die4, die5, die6]; 

    const displayDice = ()=>{
        if(avail !== false){
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

export default Die;