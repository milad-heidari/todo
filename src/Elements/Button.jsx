import React from 'react'
import PropTypes from 'prop-types'
function Button({type,className,title,clickHandler}) {
    return (
        <button onClick={clickHandler} type={type} className={className}>
            {title}
        </button>
    )
}

Button.propTypes = {
    className:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    clickHandler:PropTypes.func.isRequired
}

export default Button