import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
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
            <p>About me:</p>
            <br></br>
            <p>I am 23 years old. I am from Joburg. I like running and cats</p>
        </>
    )
};

export default About;