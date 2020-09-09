import React, { Fragment } from 'react';
import devconnect from '../../Images/devconnect.png'
import rosa from '../../Images/rosa.png'


export const Project = () => {
    return ( 
        <Fragment>
            <section>
                <div className="container">
                    <div className="project">
                        <h4 className='project-intro'>These are my recent projects</h4>
                        <div className='projects'>
                            <div className="project-item">
                                <div className='project-title'>
                                    <h4>DevConnector</h4>
                                    <a className='show-big' target='_blank' rel="noopener noreferrer" href='https://arcane-plains-01847.herokuapp.com/'><img className='project-img' src={devconnect} alt=""/></a>
                                </div>
                                <div className="project-desc">
                                    <a className='hide-sm' href='https://arcane-plains-01847.herokuapp.com/'><img className='project-img' src={devconnect} alt=""/></a>
                                    <p><strong>Stack: </strong> React js, Redux, Express js, MongoDB, Node js, HTML/CSS</p>
                                    <p>You can check it out <a className='project-link' target='_blank' rel="noopener noreferrer" href='https://arcane-plains-01847.herokuapp.com/'>here</a></p>
                                    <p>You can get the code from <a target='_blank' rel="noopener noreferrer" href='https://arcane-plains-01847.herokuapp.com/'><i className="fab fa-github"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="container">
                    <div className="project">
                        <div className='projects'>
                            <div className="project-item">
                                <div className='project-title'>
                                    <h4>The Rosa Restaurant</h4>
                                    <a className='show-big' target='_blank' rel="noopener noreferrer" href='https://omogbemeh.github.io/theRosa/'><img className='project-img' src={rosa} alt=""/></a>
                                </div>
                                <div className="project-desc">
                                    <a className='hide-sm' href='https://arcane-plains-01847.herokuapp.com/'><img className='project-img' src={rosa} alt=""/></a>
                                    <p><strong>Stack: </strong> HTML/CSS, Flexbox, CSS grid systems, Responsive site design</p>
                                    <p>You can check it out <a target='_blank' rel="noopener noreferrer" className='project-link' href='https://omogbemeh.github.io/theRosa/'>here</a></p>
                                    <p>You can get the code from <a target='_blank' rel="noopener noreferrer" href='https://github.com/omogbemeh/theRosa'><i className="fab fa-github"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </Fragment>
    )
}

export default Project