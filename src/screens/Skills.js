import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Skills = () => {
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
            <p>Skills:</p>
            <br></br>
            <p>My skills include:
                <ul>
                    <li>JavaScript</li>
                    <li>Figma</li>
                    <li>CSS</li>
                    <li>Python</li>
                </ul>
            </p>
        </>
    )
};

export default Skills;