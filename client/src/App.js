import {useState, useEffect} from "react";
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import GameDisplay from "./containers/GameDisplay";
import ScoreTable from "./containers/ScoreTable";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import { getScores } from "./services/GameServices"; 

function App() {

  const [highScores, sethighScores] = useState([]);
  
  const sortByScore = (hScores)=>{
    let sortedScores = hScores.sort((element1, element2)=>{
      return element2.score - element1.score; 
    });
    return sortedScores;
  }
  
  const saveHighScore = (player, score)=>{

  }; 


  

  useEffect(()=> {
      getScores().then((hScores)=>{
        let sortedScores = sortByScore(hScores)
        sethighScores(sortedScores);
      })
  }, []);


  return (
      <Router>
        <NavBar/>
          <Switch>
            <Route path="/game" component={GameDisplay} saveHighScore={saveHighScore} />
            <Route path="/scores" exact render={() => <ScoreTable highScores= {highScores} />}
            />
            <Route exact path="/" component={Home}/>
            <Route component={ErrorPage}/>
          </Switch>
      </Router>
  );
}

export default App;
