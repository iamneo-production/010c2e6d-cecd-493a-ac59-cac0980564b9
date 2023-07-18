import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';

import './Certification.css';
const Certification=()=>{
    return (
        <div style={{display:'flex'}}>
            <NavBar/>
            <div className='certifi'>
                <div className='cer-head'>
                    <h1 style={{padding:'5%'}}>
                        Achievements/Rewards/Badges
                    </h1>
                </div>
                <div className='rewards'>
                    <div>
                <button className='bt'><Link to='/components/assessment/Assessment' className='clink'>Achievements</Link></button>
              </div>
              <div>
                <button className='bt'><Link to='/components/assessment/Assessment' className='clink'>Rewards</Link></button>
              </div>
              <div>
                <button className='bt'><Link to='/components/assessment/Assessment' className='clink'>Badges</Link></button>
              </div>
            </div>
            <br></br>
            <div>
                <h2>Achievements :</h2>
                <div>
                    
                </div>
            </div>
            <div>
                <h2>Rewards :</h2>
            </div>
            <div>
                <h2>Badges :</h2>
            </div>
                </div>
                </div>

    )
};
export default Certification;