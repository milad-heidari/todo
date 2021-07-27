import React from 'react'
import PropTypes from 'prop-types'
function Button({type,classes,title}) {
    return (
        <button type={type} className={classes}>
            {title}
        </button>
    )
}

Button.propTypes = {
    className:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}

export default Button