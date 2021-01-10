import {useState, useEffect} from "react";
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import GameDisplay from "./containers/GameDisplay";
import ScoreTable from "./containers/ScoreTable";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import { getScores } from "./services/GameServices"; 

function App() {

  const [highScores, sethighScores] = useState([]);

  useEffect(()=> {
      getScores().then((hScores)=>{
          sethighScores(hScores);
      })
  }, []);


  return (
      <Router>
        <NavBar/>

          <Route path="/game" component={GameDisplay} />
          <Route path="/scores" exact render={() => <ScoreTable highScores= {highScores} />}
          />
          <Route exact path="/" component={Home}/>
      </Router>
  );
}

export default App;
