const PlayerNameForm = ({handleName})=>{
    
    const onSubmit = (event)=>{
        event.preventDefault();
        let playerName = event.target.name.value;
        handleName(playerName);
    }

    return(
        <>
            <form onSubmit={onSubmit} id="name-entry-form" >
                <h2>Enter Your Name</h2>
                <div className="form-element">
                    <label htmlFor="name">Name: </label>
                    <input type="text" 
                           id="name"
                           placeholder="Name..."
                           maxLength="15"
                           required/>
                </div>
                <input type="submit" value="Save" id="save"/>
	        </form>
        </>
    );
};

export default PlayerNameForm;