import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import HomeImage from '../Images/HomeImage';
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
        console.log(res.data);
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
                      <a href="" className="btn">about</a>
                  </div>
                  
              </div>
          </div>
        </section>
        <Kanye quote={quote}/>
        <Contact />
      </Fragment>
        
    )
}

export default Home

