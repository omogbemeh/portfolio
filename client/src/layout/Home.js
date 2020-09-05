import React from 'react'
import HomeImage from '../Images/HomeImage';
const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="home">
                    <HomeImage />
                    <h4 className="sub-headline">Hello</h4>
                    <hr/>
                    <div className="heading">
                        <p>I am <span><strong className='name-home'>Praise Omogbemeh.</strong></span></p>
                        <p>A Web Developer</p>
                    </div>
                    <a href="" className="btn">about</a>
                </div>
            </div>
        </section>
    )
}

export default Home

