import "../css/style.css"
import icon from "../../icon/Portal.png"
import forEmail from "../../icon/profil.png"
import forPass from "../../icon/Vector.png"


export default function LogIn(){
    return(
        <div className="logIn-wrapper">
             <img className="icon" src={icon} alt="icon" />
             <h3 className="login-text">Login</h3>
             <h4 className="hello-text">Hello my friend</h4>
             <div className="emailInput">
                <input type="text" className="Email" placeholder="Email"/>
                <img src={forEmail} alt="" />
             </div>
             <div className="passInput">
                <input  type="password" className="Email" placeholder="Password" /> 
                <img src={forPass} alt="" />
             </div>
             <button className="button">Log In</button>
        </div>
    )
}
