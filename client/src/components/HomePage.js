import "./HomePage.css"
import bones from "../images/cross_bones.png"

const Home = () => 
    <div id="home-page-display">
        <img className="home-images" src={bones}/>
        <content><h1> Roll the Bones - Home </h1>
            Welcome aboard ye scallywags! <br/>
            Avast, up for a game of Roll the Bones? <br/>
            You'll have to be canny! <br/>
            Ye have five dice, ye get to roll them all and <br/>
            add up your total for that roll <br/>
            but if ye get a two or a five <br/>
            thats bones for you Matey!! <br/>
            Those dice won't roll anymore! <br/>
            Ye get to keep rolling with the rest untill <br/>
            ye run out of dice!! <br/>
            Your total gets added up and that'll be your <br/>
            final score Matey, you might even make the Leaderboard!
        </content>
        <img className="home-images" src={bones}/>
    </div>


export default Home;