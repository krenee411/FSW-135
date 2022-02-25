import React from 'react'

export default function AuthForm(props){

    function handleChange(e){
        const {name, value} = e.target

    }
  return (
    <form >
      <input 
        type="text" 
      // value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/>
      <input 
        type="text" 
        //value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
      <button>Sign Up</button>
    </form>
  )
}