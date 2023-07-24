import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import Header from '../header/Header';
import './Courses.css';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const lang= [
    {
      id: 1,
      title: 'Java Fundamentals',
      chapter: 'Chapter 1',
      desc:'Basic of Java Programming.',
      link: '/Java',
    },
    {
      id: 2,
      title: 'Python ',
      chapter:'Chapter 2',
      desc: 'Basic of Python Programming.',
      link: '#',
    }
  ];

  const filteredCourses3 = lang.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const frontend = [
    {
      id: 1,
      title: 'HTML & CSS',
      chapter: 'Chapter 1',
      desc:'Front-end using HTML & CSS',
      link: '/Java',
    },
    {
      id: 2,
      title: 'Bootstrap',
      chapter:'Chapter 2',
      desc: 'Bootstrap project using HTML/CSS',
      link: '#',
    }
  ];

  const filteredCourses = frontend.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const backend = [
    {
      id: 1,
      title: 'Python+ Django',
      chapter: 'Chapter 1',
      desc:'Backend using Python & Django',
      link: '/Java',
    },
    {
      id: 2,
      title: 'Node+ SQL',
      chapter:'Chapter 2',
      desc: 'Backend using Node & SQL.',
      link: '#',
    }
  ];

  const filteredCourses2 = backend.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div style={{ flexDirection: 'column', height: '100vh' }}>
      <Header/>
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div className="courses-container" style={{width:'100%'}}>
        <div className='crs-head'>
          <h3>COURSES</h3>
        </div>
        <div>
        <div className='search'>
          <input className='nosubmit'
            type="search"
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={handleInputChange}
            style={{height:'40%',width:'50%'}}
          />
          </div>
          <h2>Programming Language</h2>
        <div className='part1'>
          {filteredCourses3.map((course) => (
            <div className="course" key={course.id}>
              <div className="course-preview">
                <h6>Course</h6>
                <h2>{course.title}</h2>
                <a href="#">
                  View details
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
              <div className="course-info">
                <h6>{course.chapter}</h6>
                <h2>{course.desc}</h2>
                <Link to={course.link} className='jlink'>
                  <button className="btn">Start</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h2>Front-End</h2>
        <div className='part1'>
          {filteredCourses.map((course) => (
            <div className="course" key={course.id}>
              <div className="course-preview">
                <h6>Course</h6>
                <h2>{course.title}</h2>
                <a href="#">
                  View details
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
              <div className="course-info">
                <h6>{course.chapter}</h6>
                <h2>{course.desc}</h2>
                <Link to={course.link} className='jlink'>
                  <button className="btn">Start</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h2>Back-End</h2>
        <div className='part1'>
          {filteredCourses2.map((course) => (
            <div className="course" key={course.id}>
              <div className="course-preview">
                <h6>Course</h6>
                <h2>{course.title}</h2>
                <a href="#">
                  View details
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
              <div className="course-info">
                <h6>{course.chapter}</h6>
                <h2>{course.desc}</h2>
                <Link to={course.link} className='jlink'>
                  <button className="btn">Start</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Courses;
