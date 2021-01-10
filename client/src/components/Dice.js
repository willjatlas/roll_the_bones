import dice1 from "../dice_images/Dice1.png"
import dice2 from "../dice_images/Dice2.png"
import dice3 from "../dice_images/Dice3.png"
import dice4 from "../dice_images/Dice4.png"
import dice5 from "../dice_images/Dice5.png"
import dice6 from "../dice_images/Dice6.png"
import crossBones from "../dice_images/cross_bones.png"

const Dice = ()=>{

    return(
        <>
        <p>this is a die</p>
        <img className="dice-images" src={dice1} alt="Dice Face Showing 1" />
        <img className="dice-images" src={dice2} alt="Dice Face Showing 2" />
        <img className="dice-images" src={dice3} alt="Dice Face Showing 3" />
        <img className="dice-images" src={dice4} alt="Dice Face Showing 4" />
        <img className="dice-images" src={dice5} alt="Dice Face Showing 5" />
        <img className="dice-images" src={dice6} alt="Dice Face Showing 6" />
        <img className="dice-images" src={crossBones} alt="Dice showing Cross Bones" />
        </>
    )

}

export default Dice;