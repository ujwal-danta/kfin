import React, { useState } from 'react';

const Login = React.memo(() => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  console.log({user})
  console.log({password})

const handleSubmit = () => {
  if(user=== "" && password===""){
    alert("Please Provide User And Password")
  }else{
    alert("Login Successful")
  }
  
}
  return (
    <div>
      <h1>Login Component</h1>
      <label >User Name</label>
      <input  type="text" name="user" value={user}  onChange={(e) => setUser(e.target.value.toUpperCase())}/>
      <label >Password</label>
      <input  type="password" name="password"  onChange={(e) => setPassword(e.target.value)}/>

      <button type='submit' onClick={handleSubmit} >Login</button>
    </div>
  );
});

export default Login;
