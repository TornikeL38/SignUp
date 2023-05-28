import "../css/style.css"
import icon from "../../icon/Portal.png"
import profilePic from "../../icon/User-avatar 1.png"

export default function Profile(){
    return(
        <div className="logIn-wrapper">
             <img className="icon" src={icon} alt="icon" />
             <h3 className="login-text">Tornike</h3>
             <img className="profilePic" src={profilePic} alt="Profile picture" />
             <button id="button" className="button">LOG OUT</button>
        </div>
    )
}