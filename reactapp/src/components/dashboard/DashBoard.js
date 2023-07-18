import React from 'react';
import NavBar from '../navbar/NavBar';
import './DashBoard.css';
const DashBoard=()=>{
    return (
        <div style={{display:'flex'}}>
            <NavBar/>
            <div className='dash'>
                

            </div>
        </div>
    )
};
export default DashBoard;