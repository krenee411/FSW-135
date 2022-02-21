import { Link } from 'react-router-dom';

export default function SignUp(props) {
    return(
        <div>
            <h1 id="SignUpHeader">Sign Up</h1>
            <div id="signUpDiv">
                <form id="SignUpForm">
                    <input type="text" id="FirstName" placeholder="First Name"></input>
                    <input type="text" id="LastName" placeholder="Last Name"></input>
                    <input type="text" id="Email" placeholder="Email Address"></input>
               
                    <input type="text" id="regUser" placeholder="Username"></input>
                    <input type="text" id="regPass" placeholder="Password"></input>
                    <button onClick={() => props.userSignup()}>
                            <Link to="/">Sign Up</Link>
                        </button>
                </form>
            </div>
        </div>
    );
}