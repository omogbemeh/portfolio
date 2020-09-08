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

        return (
        <Fragment>
            <section className='contact'>
                <div className="container">
                    <h4>Feel free to say <span>hello</span></h4>
                    <div className="contact-form">
                        <form action="">
                            <div className='contact-item'>
                                <input onChange={e => {onChange(e)}} type="text" placeholder='Name' name='name' value={name}/>
                                { name !== '' && <button onClick={e => setFormData({ ...formData, name: ''})}><i class="far fa-2x fa-times-circle"></i></button> }
                                
                            </div>
                            <div className='contact-item'>
                                <input onChange={e => {onChange(e)}} name='email' value={email} type="email" placeholder='Email'/>
                                { email !== '' && <button onClick={e => setFormData({ ...formData, email: ''})}><i class="far fa-2x fa-times-circle"></i></button>                            }
                            </div>
                            <a className="btn about-btn">Submit</a>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="icons">
                        <i class="fab fa-twitter fa-2x"></i>
                        <i class="fab fa-instagram fa-2x"></i>
                        <i class="fab fa-linkedin fa-2x"></i>
                        <i class="fas fa-envelope fa-2x"></i>
                    </div>
                </div>
            </section>

        </Fragment>
        
       
    )
}

export default Contact
