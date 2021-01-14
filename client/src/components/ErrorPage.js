import jack5 from '../card_images/jack5.jpeg';
import "./ErrorPage.css"
const ErrorPage = () => {

    return(
        <div id="error-page">
          <h1>404 - You've found Davie Jones Locker landlubber!!</h1>
          <img src={jack5}></img>
        </div>
    );

}
export default ErrorPage;