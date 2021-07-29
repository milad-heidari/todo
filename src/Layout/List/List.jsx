import React from 'react'
import "./list.css"
import PropTypes from 'prop-types'
import components from '../../Components/Partials/PatialsExport'
function List({ListTitle,className,children}) {
    return (
        <div className={className}>
            <components.P
                className=''
                text={ListTitle}

            />
            {children}
        </div>
    )
}

List.propTypes = {
    className:PropTypes.string,
    text:PropTypes.string.isRequired
}

export default List
