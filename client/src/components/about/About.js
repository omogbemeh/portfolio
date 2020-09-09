import React, { Fragment } from 'react'
import Skills from './Skills'
import Education from './Education'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <Fragment>
            <section id='about'>
                <div className='container'>
                    <div className="about-me">
                        <h3>about me</h3>
                        <p>I am a graduate of Mechanical Engineering from Covenant University. I am passionate about building applications 
                        that provide <span className='solutions'>solutions</span> to our day to day challenges.
                        <br /><br /> 
                        I am currently seeking a job as a web developer. Feel free to <Link to='/contact'><span className='reach-out'>reach out</span></Link>
                        <br /><br />You can find me taking random photographs or listen to weird music when Im not coding. </p>
                    </div>
                </div>
            </section>
            <Education />
            <Skills />
        </Fragment>
       
    )
}

export default About
