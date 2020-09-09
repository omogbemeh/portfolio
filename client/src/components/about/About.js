import React, { Fragment } from 'react'
import Skills from './Skills'
import Education from './Education'

export const About = () => {
    return (
        <Fragment>
            <section id='about'>
                <div className='container'>
                    <div className="about-me">
                        <h3>about me</h3>
                        <p>My name is Omogbemeh Praise. I am a graduate of Mechanical Engineering from Covenant University. I am passionate about building applications that solve our day to day challenges.
                        <br /> I take random photographs and listen to weird music when Im not coding. I also make prople cry when we play FIFA.</p>
                    </div>
                </div>
            </section>
            <Education />
            <Skills />
        </Fragment>
       
    )
}

export default About
