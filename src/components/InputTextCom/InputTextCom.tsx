import  { useState } from 'react'
// import Button from '../Button/Button';
import Button from '../Button/Button';


function InputTextCom(){
   const [user, setUser] = useState("");
   const [pass, setPass] = useState("");
   console.log('user', user);
   console.log('pass', pass);

    const handleSubmit = () => {
        alert("Submit Function Called")
    }

    const resetValue = () => {
        alert("Reset Function called")
    }
    return (
        <div>
            <label>User Name</label>
            <input type='text' id='userName'   onChange={(event) => setUser(event.target.value)} />
            <label>Password</label>
            <input type='password' id='Password'  onChange={(event) => setPass(event.target.value)}/>
            {/* <button type='submit' onClick={handleSubmit}>Login</button> */}
            <Button name="Submit" buttonClick ={handleSubmit}/>
            <Button name="Reset" buttonClick={resetValue}/>
        </div>
    )
}

export default InputTextCom;