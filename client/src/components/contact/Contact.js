import React, { Fragment, useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:''
    });
    const { name, email } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(123);
        setFormData({name: '', email: ''})
    }
        return (
        <Fragment>
            <section className='contact'>
                <div className="container">
                    <h4>Feel free to say <span>hello</span></h4>
                    <div className="contact-form">
                        <form onSubmit={e => onSubmit(e)}>
                            <div className='contact-item'>
                                <input onChange={e => {onChange(e)}} type="text" placeholder='Name' name='name' value={name}/>
                                { name !== '' && <button onClick={e => setFormData({ ...formData, name: ''})}><i className="far fa-2x fa-times-circle"></i></button> }
                                
                            </div>
                            <div className='contact-item'>
                                <input onChange={e => {onChange(e)}} name='email' value={email} type="email" placeholder='Email'/>
                                { email !== '' && <button onClick={e => setFormData({ ...formData, email: ''})}><i className="far fa-2x fa-times-circle"></i></button>                            }
                            </div>
                            <button type='submit' className="btn about-btn">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="icons">
                    <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/praise__o'><i className="fab fa-twitter fa-2x"></i></a>
                    <a  target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/praise_o/'><i className="fab fa-instagram fa-2x"></i></a>
                    <a  target='_blank' rel="noopener noreferrer" href='https://github.com/omogbemeh'><i className="fab fa-github fa-2x"></i></a>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/praise-omogbemeh-556a4018a/'><i className="fab fa-linkedin fa-2x"></i></a>
                    <a href='mailto:onosithena@gmail.com'><i className="fas fa-envelope fa-2x"></i></a>
                    </div>
                </div>
            </section>

        </Fragment>
        
       
    )
}

export default Contact
