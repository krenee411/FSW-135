import { Link } from 'react-router-dom';

export default function Login(props) {
    return(
        <div>
            <h1 id="SignUpHeader">Sign Up</h1>
            <div id="signUpDiv">
                <input type="text" id="logUser" placeholder="Username"></input>
                <input type="text" id="logPass" placeholder="Password"></input>
                <button onClick={() => props.userLogin()}>
                    <Link to="/">Login</Link>
                </button>
            </div>
        </div>
    );
}