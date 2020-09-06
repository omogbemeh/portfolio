import React from 'react';
import PropTypes from 'prop-types'

export const Kanye = ({ quote }) => {
    return (
        <section>
            <div className="container">
                <div className="kanye">
                    <p className='title'><strong>Some inspiration from Kanye</strong></p>
                    <tt className='content'>{ quote.quote }</tt>
                    <a>More ?</a>
                </div>
            </div>
        </section>
    )
}

Kanye.propTypes = {
    quote: PropTypes.object.isRequired,
}

export default Kanye
