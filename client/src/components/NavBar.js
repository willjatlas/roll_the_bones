import { Link, useHistory } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const history = useHistory();

    const back = () => {
        history.goBack();
    }
    return (
        <nav class="navbar">
            <li>
                <a className='navbar-link' href="javascript:history.back()">Back</a>
            </li>
            <li>
                <Link className='navbar-link' to="/">Home</Link>
            </li>
            <li>
                <Link className='navbar-link' to="/game">New Game</Link>
            </li>
            <li>
                <Link className='navbar-link' to="/scores">Leaderboard</Link>
            </li>
            <li>
                <Link className='navbar-link' to="/memoryGame">Memory Game</Link>
            </li>
            <h6>Roll the Bones</h6>
        </nav>
    )
}

export default NavBar;