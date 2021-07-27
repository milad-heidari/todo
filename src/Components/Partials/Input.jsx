import React from 'react'
import PropTypes from 'prop-types'




function Input({className,type,id,placeholder,formikGetFieldProps}) {
    return (
        <input
            className={className}
            type={type}
            id={id}
            placeholder={placeholder}
            {...formikGetFieldProps}
        />
    )
}

Input.propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ids:PropTypes.string,
    placeholder:PropTypes.string.isRequired,
    formikGetFieldProps:PropTypes.object.isRequired
}

export default Input
