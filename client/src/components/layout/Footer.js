import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <section>
                <div className='container'>
                    <div className="footer">
                        <p>Designed by <strong>Praise Omogbemeh</strong> {new Date().getFullYear()}</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}



export default Footer
