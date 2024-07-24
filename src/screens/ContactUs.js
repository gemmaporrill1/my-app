import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
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
            <p>Contact me today:</p><br></br>
            <p>Email: <br></br> gemma.porrill@sanlam.co.za</p>
        </>
    )
};

export default ContactUs;