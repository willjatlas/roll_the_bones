import './App.css';

import {BrowerRouter as Router, Route, Switch} from "react-router-dom";

import GameDisplay from "./containers/GameDisplay";
import ScoreTable from "./containers/ScoreTable";

function App() {
  return (
    <Router>
      <>
        <Route path="/" component={GameDisplay}/>
        <Route path="/scoreTable" component={ScoreTable}/>
        
      </>
    </Router>
  );
}

export default App;
