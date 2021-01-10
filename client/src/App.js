import {useState, useEffect} from "react";
import './App.css';

import {BrowerRouter as Router, Route, Switch} from "react-router-dom";

import GameDisplay from "./containers/GameDisplay";
import ScoreTable from "./containers/ScoreTable";
import { getScores } from "./services/GameServices"; 

function App() {

  const [highScores, sethighScores] = useState([]);

  useEffect(()=> {
      getScores().then((hScores)=>{
          sethighScores(hScores);
      })
  }, []);


  return (
      <>
        <Route path="/game" component={GameDisplay} />
        <Route path="/scores" exact render={() => <ScoreTable highScores= {highScores} />}
        />
      </>
  );
}

export default App;
