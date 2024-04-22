import React,{ useState } from 'react';

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = (e) => {                                                                     
    e.preventDefault();
    onSignUp({ username, password });
  };

  return (
    <>
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
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
