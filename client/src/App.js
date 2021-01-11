import {useState, useEffect} from "react";
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import GameDisplay from "./containers/GameDisplay";
import ScoreTable from "./containers/ScoreTable";
import CardDisplay from "./containers/CardDisplay";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
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
          <Switch>
            <Route path="/game" component={GameDisplay} />
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
