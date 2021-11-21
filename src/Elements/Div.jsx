import React from 'react'

function Div({className,children,onClickHandler}) {
    return (
        <div onClick={onClickHandler} className={className}>
            {children}
        </div>
    )
}

export default Div
