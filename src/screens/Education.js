import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Education = () => {
    const navigate = useNavigate();
    const about = () => {
        navigate('/about');
      }
      const home = () => {
        navigate('/home');
      }
      const education = () => {
        navigate('/education');
      }
      const skills = () => {
        navigate('/skills');
      }
      const contact = () => {
        navigate('/contact');
      }
    return (
        <>
        <button onClick={() => home()}>Home</button>
        <button onClick={() => about()}>About</button>
        <button onClick={() => education()}>Education</button>
        <button onClick={() => skills()}>Skills</button>
        <button onClick={() => contact()}>Contact</button>
            <p>Education</p>
            <br></br>
            <p>High School: St Stithians</p>
            <br></br>
            <p>University: University of Pretoria</p>
            <br></br>
            <p>Degree: BIT Information Systems</p>
        </>
    )
};

export default Education;