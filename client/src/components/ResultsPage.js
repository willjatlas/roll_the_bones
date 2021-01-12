const ResultsPage = (props)=>{

    console.log(props);
    return(
        
        <h2> Ye made of with a total of {props.location.state.playerScore}
        gold pieces, cap'n {props.location.state.playerName}!
        </h2>
       
    )

}

export default ResultsPage;