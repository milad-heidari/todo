import React from 'react'
import "./list.css"
import PropTypes from 'prop-types'
import elements from '../../Elements/ExportElements'
function List({ListTitle,className,children}) {
    return (
        <div className={className}>
            <elements.P
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
