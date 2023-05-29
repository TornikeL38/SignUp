import "../css/style.css"
import icon from "../../icon/Portal.png"
import forEmail from "../../icon/profil.png"
import forPass from "../../icon/Vector.png"
import profilePic from "../../icon/User-avatar 1.png"
import { useState } from "react"


export default function LogIn(){
    const [isLoggedIn, setIsLoggedIn] = useState (false);
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const handelChangeIsLogedIn = () => {
        setIsLoggedIn(prev => !prev);
        
    }
    const logOut = () =>{
        setEmail("");
        setPassword("");
        handelChangeIsLogedIn()
    }
    const logIn = () =>{
        if(email !== "" && password !== "") {
            handelChangeIsLogedIn();
        }
        else alert("შეავსე ყველა ველი!")
    }

    return(
        <div>
            {isLoggedIn ? (
                 <div className="logIn-wrapper">
                 <img className="icon" src={icon} alt="icon" />
                 <h3 className="login-text">Tornike</h3>
                 <img className="profilePic" src={profilePic} alt="Profile picture" />
                 <button onClick={logOut}  id="button" className="button">LOG OUT</button>
            </div>
            ) : (
                <div className="logIn-wrapper">
                <img className="icon" src={icon} alt="icon" />
                <h3 className="login-text">Login</h3>
                <h4 className="hello-text">Hello my friend</h4>
                <div className="emailInput">
                    <input type="text" className="Email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
                    <img src={forEmail} alt="" />
                </div>
                <div className="passInput">
                    <input  type="password" className="Email" placeholder="Password" onChange={(event) => setPassword(event.target.value)} /> 
                    <img src={forPass} alt="" />
                </div>
                <button className="button" onClick={logIn} >Log In</button>
            </div>
            )}
        </div>
    )}

