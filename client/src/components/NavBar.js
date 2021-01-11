import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
    const history = useHistory();

    const back = () => {
        history.goBack();
    }
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/game">New Game</Link>
            </li>
            <li>
                <Link to="/scores">Leaderboard</Link>
            </li>
            <li>
                <Link to="/memoryGame">Memory Game</Link>
            </li>
            <li>
                <button onClick={back}>🔙</button>
            </li>
        </ul>
    )
}

export default NavBar;