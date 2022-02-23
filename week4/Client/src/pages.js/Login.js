import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    //so i think that i need to use context here???
    //should this be createContext
    const[userName, setUserName] = useState([])
    const[userPassword, setUserPassword] = useState([])

    function onPage(){
        userName = localStorage.setUserName('userName', userName)
        userPassword = localStorage.setUserPassword('userPassword', userPassword)
    }

    function fetchToken(){
        if (token) {
            fetch('', { //what api goes here?? where does this token come from?
              method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }
    }

    return(
        <div>
            <h1 id="LoginHeader">Log in </h1>
            <div id="LoginDiv">
        {/* <LoninContext.Provider></LoninContext.Provider>?? */}
                <input 
                type="text" 
                id="User" 
                placeholder="Username"
                value={userName.userName}>
                </input>

                <input 
                type="text" 
                id="Password" 
                placeholder="Password"
                value={userPassword.userPassword}>
                </input>
                <button>
                    <Link to="/Profile">Log In</Link>
                </button>
            </div>
        </div>
    );
}