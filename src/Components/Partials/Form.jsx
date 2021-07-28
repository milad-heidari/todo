import React from 'react'
import PropTypes from 'prop-types'
function Form({children,onSubmit,className}) {
    return (
        <form className={className} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

Form.propTypes = {
    className:PropTypes.string.isRequired,
    onSubmit:PropTypes.func.isRequired,
}

export default Form
