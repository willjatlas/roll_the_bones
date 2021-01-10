import './App.css';

import {BrowerRouter as Router, Route, Switch} from "react-router-dom";

import GameDisplay from "./containers/GameDisplay";

function App() {
  return (
    <Router>
      <GameDisplay />
    </Router>
  );
}

export default App;
