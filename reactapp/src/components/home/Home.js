import React,{Component} from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import './Home.css'
const Home= () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return (
      <div style={{display:'flex',height:'200%'}}>
      <NavBar/>
    <div className='full'>
    <div className=''>
    <div className='scroll'>  
    <h1>Here We Go....</h1>   
     <marquee 
        behavior="scroll"
        direction="left"
        scrollamount={600}
        scrolldelay={2000}
        onmouseover="this.stop();"
        onmouseout="this.start();"
      >
        <a href="##########" target="blank" rel="nofollow">
          <img
            src="https://res.cloudinary.com/ddlw9iej1/image/upload/v1689131104/learning-education-ideas-insight-intelligence-study-concept_bpjjij.jpg"
            title=""
            alt="ALT"
            border="0px"
            width="600px"
            height="300px"
            style={{marginLeft:"30px",padding:"30px"}}
          />
        </a>
        <a href="##########" target="blank" rel="nofollow">
          <img
            src="https://res.cloudinary.com/ddlw9iej1/image/upload/v1689130399/work-net_cjktmz.jpg"
            title=""
            alt="ALT"
            border="0px"
            width="600px"
            height="300px"
            style={{ marginLeft: "30px",padding:"30px" }}
          />
        </a>
        <a href="/" target="blank" rel="nofollow">
          <img
            src="https://res.cloudinary.com/ddlw9iej1/image/upload/v1689130408/front-view-woman-portrait-with-graduation-cap_jqci9y.jpg"
            title=""
            alt="ALT"
            border="0px"
            width="600px"
            height="300px"
            style={{ marginLeft: "30px",padding:"30px" }}
          />
        </a>
      </marquee>
      <h3>
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
      </h3>
      <h3 className='author'>
      - Malcolm X
      </h3>
      <button type='submit' className='hbtn'><Link to='/components/signup/SignUp' className='link'>
        Get Started</Link>
      </button>
      </div>
     </div>
</div>
</div>
    );
};
export default Home;