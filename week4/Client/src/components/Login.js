import { Link } from 'react-router-dom';

export default function SignUp(props) {
    return(
        <div>
            <h1 id="LoginHeader">Log in </h1>
            <div id="LoginDiv">
                <input type="text" id="regUser" placeholder="Username"></input>
                <input type="text" id="regPass" placeholder="Password"></input>
                <button onClick={() => props.userSignup()}>
                    <Link to="/">Sign Up</Link>
                </button>
            </div>
        </div>
    );
}