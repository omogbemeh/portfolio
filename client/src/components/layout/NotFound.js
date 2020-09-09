import React, { Fragment } from 'react'

export const NotFound = () => {
    return (
        <Fragment>
            <section>
                <div className='container'>
                    <div className='not-found'>   
                        <h3>Sorry</h3>
                        <i class="fas fa-3x fa-exclamation-triangle"></i>
                        <p>The page you are looking for does not exist</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default (NotFound)
