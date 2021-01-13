import die1 from "../images/Dice1.png"
import die2 from "../images/Dice2.png"
import die3 from "../images/Dice3.png"
import die4 from "../images/Dice4.png"
import die5 from "../images/Dice5.png"
import die6 from "../images/Dice6.png"
// import crossBones from "../images/cross_bones.png"

const Die = ({avail, value})=>{

    const diceBag = [die1, die2, die3,
                    die4, die5, die6]; 

    const displayDice = ()=>{
        if(avail !== false){
            return(
                <img className="dice-images" 
                     src={diceBag[value -1]} 
                     alt="Dice Face Showing {value}" />
            );
        }
        else{
            return(
                <img className="dice-images" 
                     src={diceBag[value -1]} />
                    //  alt="Dice showing Cross Bones" />
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