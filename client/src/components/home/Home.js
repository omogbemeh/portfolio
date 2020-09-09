import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HomeImage from '../../Images/HomeImage';
import Contact from './Contact';
import Kanye from './Kanye';

const Home = () => {
    const [quote, setQuote] = useState('')

    useEffect(() => {
      getKanyeQuotes();
    }, [])
  
  
    const getKanyeQuotes = async () => {
      try {
        const res = await axios.get('/api/kanye');
        setQuote(res.data)
      } catch (err) {
        if(err) console.error(err);
      }
    }
    return (
      <Fragment>
        <section id="home">
          <div className="container">
              <div className="home">
                  <div>
                    <HomeImage />
                  </div>
                  <div className="heading">
                      <h4 className="sub-headline">Hello</h4>
                      <p>I am <span><strong className='name-home'>Praise Omogbemeh.</strong></span></p>
                      <p>A Web Developer</p>
                      <Link to="/about" className="btn about-btn">about</Link>
                  </div>
              </div>
          </div>
        </section>
        <Kanye quote={quote} getKanyeQuotes={getKanyeQuotes}/>
        <Contact />
      </Fragment>
        
    )
}

export default Home

