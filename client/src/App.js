import {useState, useEffect} from "react";
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import GameDisplay from "./containers/GameDisplay";
import ScoreTable from "./containers/ScoreTable";
import CardDisplay from "./containers/CardDisplay";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import { getScores, postScores } from "./services/GameServices"; 


function App() {

  const [highScores, sethighScores] = useState([]);
  
  const sortByScore = (hScores)=>{
    let sortedScores = hScores.sort((element1, element2)=>{
      return element2.score - element1.score; 
    });
    return sortedScores;
  }
  
  const checkNewHighScore = (player, score)=>{
    let newScore = {
      playerName: player,
      score: score
    }

    let tempScores = highScores;
    tempScores.push(newScore);
    let sortedScores = sortByScore(tempScores);
    sortedScores.pop();

    if(sortedScores.includes(newScore) !== true){
      return false;
    }
    else{
      postScores(newScore);
      return true;
    };

  }; 

  useEffect(()=> {
      getScores().then((hScores)=>{
        let sortedScores = sortByScore(hScores)
        let top10 = sortedScores.slice(0,10);
        sethighScores(top10);
      })
  }, []);


  return (
      <Router>
        <NavBar/>
          <Switch>
            <Route path="/game" exact render={()=> <GameDisplay checkNewHighScore={checkNewHighScore} />}/>
            <Route path="/scores" exact render={() => <ScoreTable highScores= {highScores} />}
            />
            <Route path="/memoryGame" component={CardDisplay} />
            <Route exact path="/" component={Home}/>
            <Route component={ErrorPage}/>
          </Switch>
      </Router>
  );
}

export default App;
