import { Link } from 'react-router-dom';

export default function Login(props) {
    return(
        <div>
            <h1 id="LoginHeader">Log in </h1>
            <div id="LoginDiv">
                <input type="text" id="User" placeholder="Username"></input>
                <input type="text" id="Password" placeholder="Password"></input>
                <button onClick={() => props.userLogin()}>
                    <Link to="/">Log In</Link>
                </button>
            </div>
        </div>
    );
}