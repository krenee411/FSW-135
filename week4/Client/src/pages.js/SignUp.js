import { Link } from 'react-router-dom';

export default function SignUp() {

    //do i need state to store a new user?
    return(
        <div>
            <h1 id="SignUpHeader">Sign Up</h1>
            <div id="signUpDiv">
                <form id="SignUpForm">
                    <input type="text" id="FirstName" placeholder="First Name"></input>
                    <input type="text" id="LastName" placeholder="Last Name"></input>
                    <input type="text" id="Email" placeholder="Email Address"></input>
               
                    <input type="text" id="NewUser" placeholder="Username"></input>
                    <input type="text" id="NewPass" placeholder="Password"></input>
                    <button>
                            <Link to="/Profile">Sign Up</Link>
                        </button>
                </form>
            </div>
        </div>
    );
}