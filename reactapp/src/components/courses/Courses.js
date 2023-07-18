import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import './Courses.css'
const Courses=()=>{
    return(
        <div style={{display:'flex'}}>
            <NavBar/>
        <div className="courses-container">
        <div className='crs-head'>
                <h3>COURSES</h3>
            </div>
            <div className='search'>

            </div>
            <div className='part1'>
            <div>
  <div className="course" id={1}>
     <div className="course-preview">
      <h6>Course</h6>
      <h2>Java Fundamentals</h2>
      <a href="#">
        View details
        <i className="fas fa-chevron-right" />
      </a>
    </div>
    <div className="course-info">
      <h6>Chapter 1</h6>
      <h2>Basics of Java</h2>
      <Link to='/Java' className='jlink'>
      <button className="btn">Start</button>
      </Link>
    </div>
  </div>
  <div className="course" id={1}>
    <div className="course-preview">
      <h6>Course</h6>
      <h2>Advanced Java </h2>
      <a href="#">
        View details
        <i className="fas fa-chevron-right" />
      </a>
    </div>
    <div className="course-info">
      <h6>Chapter 4</h6>
      <h2>Deep into Java</h2>
      <button className="btn">Start</button>
    </div>
  </div>
  </div>
  <div>
  <div className="course" id={1}>
     <div className="course-preview">
      <h6>Course</h6>
      <h2>JavaScript Fundamentals</h2>
      <a href="#">
        View details
        <i className="fas fa-chevron-right" />
      </a>
    </div>
    <div className="course-info">
      <h6>Chapter 3</h6>
      <h2>Basics of JavaScript</h2>
      <button className="btn">Start</button>
    </div>
  </div>
  <div className="course" id={1}>
     <div className="course-preview">
      <h6>Course</h6>
      <h2>Python Fundamentals</h2>
      <a href="#">
        View details
        <i className="fas fa-chevron-right" />
      </a>
    </div>
    <div className="course-info">
      <h6>Chapter 4</h6>
      <h2>Basics of python</h2>
      <button className="btn">Start</button>
    </div>
  </div>
  </div>
  </div>
        </div>
        </div>
    )
};
export  default Courses;