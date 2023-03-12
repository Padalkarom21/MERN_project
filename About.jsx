import React from 'react'
import './About.css'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <>
   
    <div className='bodys'>
      <div className="about">
        <div className="inner-section">
            <h1>About Us</h1>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Doloribus velit ducimus, enim inventore earum, eligendi 
                nostrum pariatur necessitatibus eius dicta a voluptates sit 
                deleniti autem error eos totam
                 nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
            <div className="skills">
                <button><NavLink to='/footer' style={{ textDecoration: 'none',color:"white"}} >Contact us</NavLink></button>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
