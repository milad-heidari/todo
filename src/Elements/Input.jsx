import React from 'react'
import PropTypes from 'prop-types'




function Input({className,type,id,placeholder,inputValue,onChange}) {
    return (
        <input
            className={className}
            type={type}
            id={id}
            value={inputValue}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

Input.propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    id:PropTypes.string,
}

export default Input
