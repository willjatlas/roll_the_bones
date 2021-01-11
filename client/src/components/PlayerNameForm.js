const PlayerNameForm = ({handleName, disabled})=>{
    
    const onSubmit = (event)=>{
        event.preventDefault();
        let playerName = event.target.name.value;
        handleName(playerName);
    }

    return(
        <div id="player-name-form" style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
            <form onSubmit={onSubmit} id="name-entry-form" >
                <h2>Enter Ye Pirate Name</h2>
                <div className="form-element">
                    <label htmlFor="name">Name: </label>
                    <input type="text" 
                           id="name"
                           placeholder="Name..."
                           maxLength="30"
                           required/>
                </div>
                <input type="submit" value="Save" id="save"/>
	        </form>
        </div>
    );
};

export default PlayerNameForm;