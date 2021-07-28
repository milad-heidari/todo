import React from 'react'
import PropTypes from 'prop-types'
function P({text,className}) {
    return (
        <p className={className}>{text}</p>
    )
}


P.propTypes = {
    className:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
}

export default P
