import dice1 from "../dice_images/Dice1.png"
import dice2 from "../dice_images/Dice2.png"
import dice3 from "../dice_images/Dice3.png"
import dice4 from "../dice_images/Dice4.png"
import dice5 from "../dice_images/Dice5.png"
import dice6 from "../dice_images/Dice6.png"

const Dice = ()=>{

    return(
        <>
        <p>this is a die</p>
        <img class="dice-images" src={dice1} alt="Dice Face Showing 1" />
        <img class="dice-images" src={dice2} alt="Dice Face Showing 1" />
        <img class="dice-images" src={dice3} alt="Dice Face Showing 1" />
        <img class="dice-images" src={dice4} alt="Dice Face Showing 1" />
        <img class="dice-images" src={dice5} alt="Dice Face Showing 1" />
        <img class="dice-images" src={dice6} alt="Dice Face Showing 1" />
        </>
    )

}

export default Dice;