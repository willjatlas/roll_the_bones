import './App.css';

import {BrowerRouter as Router, Route, Switch} from "react-router-dom";

import GameDisplay from "./containers/GameDisplay";

function App() {
  return (
    <Router>
      <>
        <Route path="/" component={GameDisplay}/>
        
      </>
    </Router>
  );
}

export default App;
