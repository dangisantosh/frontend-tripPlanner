import React from 'react';
import './CoverPage.css'; 
import { Button } from '@material-ui/core';
import { Routes , Route, useNavigate  } from 'react-router-dom';

const CoverPage = () => {
    const navigate  = useNavigate(); 
  return (
    <div className="cover-container">
     
      <div className="wallpaper" />

     
      <div className="about">
      <button onClick={()=> navigate('./about')}style={{   position: "relative",
           
            
            fontWeight: 800,
            fontSize: '25 px',
            color:"red"}}
     >
           About Us
          </button>    
      </div>
      <spam className="name">Trip Planner Pro</spam>
      <div className="button-container1">Team Lakshya Welcomes You!</div>
     
      <div className="button-container">
        <button onClick={()=>navigate('/mainpage')}><div style={{fontSize:"15px" , fontWeight:"bold"}}>Click Me!</div>Plan Your Trip </button>
      </div>
    </div>
  );
};

export default CoverPage;
