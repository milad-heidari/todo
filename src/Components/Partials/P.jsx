import React from 'react'
import PropTypes from 'prop-types'
function P({text,classes}) {
    return (
        <p className={classes}>{text}</p>
    )
}


P.propTypes = {
    className:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
}

export default P
