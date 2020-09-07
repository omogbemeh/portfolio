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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum maxime similique id labore earum veritatis. Repellat, dolore! Quas nesciunt ab rem tempore, dolorem tenetur. Animi velit iure rerum. Molestias.</p>
                    </div>
                </div>
            </section>
            <Education />
            <Skills />
        </Fragment>
       
    )
}

export default About
