import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import './Assessment.css';
const Assessment=()=>{
    return (
        <div style={{display:'flex'}}>
            <NavBar/>
        <div className="assess-container">
            <div className='ass-head'>
            <h3>ASSESSMENTS</h3>
            </div>
            <div className='session'>
              <div>
                <button className='btn1'><Link to='/components/assessment/Assessment' className='lin'>Active</Link></button>
              </div>
              <div>
                <button className='btn1'><Link to='/components/assessment/Assessment' className='lin'>Upcomming</Link></button>
              </div>
              <div>
                <button className='btn1'><Link to='/components/assessment/Assessment' className='lin'>Ended.</Link></button>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <div className='part'>
            <div>
  <div className="assess" id={1}>
     <div className="assess-preview">
      <h2>Weekend Assessment</h2>
      <h6>sunday 6:00-8:00 PM</h6>
      <a href="#">
        View details
        <i className="fas fa-chevron-right" />
      </a>
    </div>
    <div>
      <h3>&nbsp;&nbsp;Duration : 1 Hour</h3>
      <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30 Mcq</h4>
      <button className="abtn"><Link to='/components/assessment/quiz/weekend'> Take Test </Link></button>
      </div>
  </div>
  </div>
  <div>
  <div className="assess" id={1}>
    <div className="assess-preview">
      <h2>   Daily Assessment</h2>
      <h6>Daily 6:00 -8:00 PM</h6>
      <a href="#">
        View details
        <i className="fas fa-chevron-right" />
      </a>
    </div>
    <div>
      <h3>&nbsp;&nbsp;Duration :  30 Minutes</h3>
      <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15 Mcq</h4>
      <button className="abtn">Take Test</button>
      </div>
  </div>
  </div>
            </div>
            <br></br>
            <hr></hr>
            <div className='res'>
              <h3>Results:-</h3>
              <h4 style={{textAlign:'center'}}> Results for the Weekend Assessments will be here : < a href='/'>Click Here !</a></h4>
              <h4 style={{textAlign:'center'}}> Results for the Daily Assessment will be here : < a href='/'>Click Here !</a></h4>
              <div>

              </div>
            </div>
  </div>
  </div>
    )
};
export default Assessment;