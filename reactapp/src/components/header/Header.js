import React from "react";
import { Link } from 'react-router-dom';
const Header=()=>{
    return(
        <div>
            <div className="head">
                <button style={{float: 'right'}}><Link to='/about'>Logout</Link></button>
            </div>
        </div>
    )
};
export default Header;