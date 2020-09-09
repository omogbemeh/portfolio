import React from 'react'

export const Skills = () => {
    return (
        <section id='about'>
            <div className='container'>
                <div className="about-me">
                    <h3>tech skills</h3>
                    <div className='skill-icons'>
                        <div className='skill-item'>
                            <i className="fab fa-3x fa-css3-alt"></i>
                            <span className='hide' >HTML/CSS</span>
                        </div>
                        <div className='skill-item'>
                            <i className="fab fa-3x fa-react"></i>
                            <span className='hide'>React js</span>
                        </div>
                        <div className='skill-item'>
                            <i className="fab fa-3x fa-js-square"></i>
                            <span className='hide'>JavaScript</span>
                        </div>
                        <div className='skill-item'>
                            <i className="fab fa-3x fa-node"></i>
                            <span className='hide'>Node js</span>
                        </div>
                        <div className='skill-item'>
                            <i className="fas fa-3x fa-database"></i>
                            <span className='mongo'>MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
