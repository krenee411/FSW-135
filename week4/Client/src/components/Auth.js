import React, {useState, useContext} from 'react'
import { UserContext} from "../Context/userProvider"
import AuthForm from "./AuthForm"

const initInputs= {username: "", password: ""}

export default function Auth(){
    const [inputs, setInputs] = usestate(initInputs)
  const [toggle, setToggle] = usestate(false)

  const { signup, login } = useContext(UserContext)

 function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
}

  function handleSignup(e){
    e.preventDefault()
    signup()
  }

  function handleLogin(e){
    e.preventDefault()
    login()
  }

  return (
    <div className="auth-container">
        <h1>Issues</h1>
       { !toggle ?
        <>
          <AuthForm
            handleChange= {handleChange}
             handleSubmit={handleSignup}
             inputs={inputs}
            btnText= "sign up"
          />
          <p onclick={() => setToggle(prev => !prev)}>Already a member?</p>
        </>
        :
              <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
          />
          <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
        </>
      }
    </div>
  )
}
