import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; // Import the CSS file
import {BsFacebook,BsGithub,BsLinkedin,BsGoogle} from 'react-icons/bs';
import { Link,useNavigate} from 'react-router-dom';
const SignUp = () => {
  const navigate=useNavigate('');
  const [name,setUsername]=useState('');
  const [email, setEmail] = useState('');
  const [role,setRole]=useState('');
  const [password, setPassword] = useState('');
  const [checkPassword,setCheckPassword] = useState('');
  const [error,setErrors]=useState('');
  const[isSubmit,setIsSubmit]=useState(false);

  const handleSubmit=async(event)=>{
    event.preventDefault();
    setIsSubmit(true);
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
        name:name,
        email:email,
        password:password
  
      });
      console.log(response.status);
      if(response.status===200){
        setUsername('');
        setEmail('');
        setRole('');
        setPassword('');
        setCheckPassword('');
        navigate("/components/home/Home");
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
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
        <select value={role} onChange={(e)=> setRole(e.target.value)}>
     <option  className='sl' value="">Select the Role</option>
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
    
<div className="links-container">
 <p>Already have a account? <Link to="/">Login</Link></p>
 <hr></hr>
 <p style={{textAlign:'center'}} >or</p>
 <div class="social-login">
 <button style={{marginRight:'4%'}}><BsGoogle /></button>
<button style={{marginRight:'4%'}}>< BsFacebook/></button>
<button style={{marginRight:'4%'}}><BsGithub/></button>
<button style={{marginRight:'4%'}}><BsLinkedin/></button>
</div>
</div>
    </form>
    </div>
  );
};

export default SignUp;