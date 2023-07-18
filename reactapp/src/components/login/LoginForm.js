import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import {FcGoogle} from "react-icons/fc";
import {BsFacebook,BsGithub,BsLinkedin,BsGoogle} from 'react-icons/bs';
import './LoginForm.css'; // Import the CSS file
const LoginForm = () => {
  const navigate=useNavigate('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[error,setError]=useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
  
  if(email==='anu@gmail.com' && password==='anu')
  {
    setError('');
    setEmail('');
    setPassword('');
    navigate('/components/home/Home');
  }
  else{
    setError('Password mismatch');
  }
  };
  return (
    <div className='form'>
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <h1 className='log'>Login</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder='Email'
          id="username"
          value={email}
          autoComplete='off'
          onChange={(e)=> setEmail(e.target.value)}
          required
        />
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

      {error && <p className='error'>{error}</p>}
      <button type="submit">Login</button>
      <br>
      </br><br></br>
      <div className="links-container">
        <a href="/forgot-password" className='slink'>Forgot Password?</a>
        <p>Don't have an account? <Link to='/components/signup/SignUp' className='slink'>Sign Up</Link></p>
        <hr></hr>
        <br></br>
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

export default LoginForm;
