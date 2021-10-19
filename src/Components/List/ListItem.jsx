import React from 'react'
import elements from "../../Elements/ExportElements"

function ListItem({className,pClassName,text,children}) {
    return (
<div className={className}>
            {/* <elements.P
                className={pClassName}
                text={text}
            /> */}
            {children}

        </div>
    )
}

export default ListItem
