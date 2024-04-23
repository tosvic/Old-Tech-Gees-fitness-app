import React, { useState } from 'react';
import '../loginsignup/signup.css'

const Signup = ({ onSignUp }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = (e) => {
    e.preventDefault();
    onSignUp({ username, password });
  };

  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" id='submit'>Sign Up</button>
          <div>
            <p>Already have an acccount <button><a onClick={() => navigate('./Login')} href="Login">login</a></button></p>
          </div>
        </form>
      </div>


    </div>
  )
}

export default Signup