import React from 'react';
import NavBar from '../navbar/NavBar';
import './Profile.css';
const Profile=()=>{
    return (
        <div style={{display:'flex'}}>
            <NavBar/>
            <div className='profile'>
              <div className='pro'>
              <div className="inner">
    <div className="profile-container">
      <div className="profile-header">
      </div>
      <div className='pr'>
      <img className="profile-picture" src="https://res.cloudinary.com/ddlw9iej1/image/upload/v1689051663/icons8-male-user-30_v6wg5n.png" alt="Profile" />
      <h2>Profile</h2>
      </div>
      <div className="profile-content">
        <div className="profile-details">
          <p>Name: Anu</p>
          <p>Email: Anu@gmail.com</p>
          <p>Gender: Female</p>
          <p>Phone no: 9791578253</p>
          <p>Institution: Sri Krishna College of Engineering and Technology.</p>
          <p>Role: Student</p>
        </div>
      </div>
    </div>
    </div>
              </div>
              <div>                  
              </div>
            </div>
         </div>
    )
};
export default Profile;