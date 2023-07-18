import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file
import { Link,useNavigate} from 'react-router-dom';
import {BsFacebook,BsGithub,BsLinkedin,BsGoogle} from 'react-icons/bs';
const SignUp = () => {
  const navigate=useNavigate('');
  const [name,setUsername]=useState('');
  const [email, setEmail] = useState('');
  const [roll,setRole]=useState('');
  const [password, setPassword] = useState('');
  const [checkPassword,setCheckPassword] = useState('');
  const [error,setError]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   if(password=== checkPassword)
   {
    const data ={
      checkPassword,
      email,
      name,
      password,
      roll,
    };
    fetch('http://localhost:8080/api/lms/signup',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    })
    .then(response=>{
      if(response.ok){
        setUsername('');
        setEmail('');
        setRole('');
        setPassword('');
        setCheckPassword('');
        navigate('/components/home/Home');
      }
      else{
        setError('Faild to signup.');
      }
    })
    .catch(error=>{
      setError('An error occurred');
    });
   }
   else{
    setError('Password mismatch');
   }
  };

  return (
    <div className='logmain'>
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <h1 className='sig'>SignUp</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder='Username'
          id="username"
          value={name}
          onChange={(e)=> setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder='Email'
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
      <select
            value={roll}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option className="sl" value="">
              Select the Role
            </option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
          </select>
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder='Check Password'
          id="password"
          value={checkPassword}
          onChange={(e)=>setCheckPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className='error'>{error}</p>}
      <button type="submit">Sign Up</button>
      <br>
      </br><br></br>
      <div className="links-container">
       <p>Already have a account? <Link to="/">Login</Link></p>
       <hr></hr>
       <p style={{textAlign:'center'}} >or</p>
       <div class="social-login">
      
      <button><BsGoogle/></button>
      <button>< BsFacebook/></button>
      <button><BsGithub/></button>
      <button><BsLinkedin/></button>
    </div>
      </div>
    </form>
    </div>
  );
};

export default SignUp;
