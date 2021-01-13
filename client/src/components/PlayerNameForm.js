import { MakeRandPrefix, MakeRandTitle } from "./RandName";

const PlayerNameForm = ({handleName, disabled})=>{
    
    const onSubmit = (event)=>{
        event.preventDefault();
        let playerName = `${MakeRandTitle()} ${MakeRandPrefix()} ${event.target.name.value}`;
        handleName(playerName);
    }



    return(
        <div className="player-name-form" style={disabled ? {pointerEvents: "none",
                                                      opacity: "0.0"} : {}}>
            <form onSubmit={onSubmit} id="name-entry-form" >
                <h2>Enter Ye' Pirate Name</h2>
                <div className="form-element">
                    <label className="labels" 
                           htmlFor="name">Pirate: </label>
                    <input type="text" 
                           id="name"
                           placeholder="Name..."
                           maxLength="30"
                           required/>
                </div>
                <input className="buttons" type="submit" value="Save" id="save"/>
	        </form>
        </div>
    );
};

export default PlayerNameForm;