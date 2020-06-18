import React from 'react'

const heading={
    fontStyle: 'oblique',
    fontSize: '40px',
    color: 'white',
    backgroundColor: 'rgba(97, 154, 78, 0.93)',
    margin: '0'
}

function Header(){
    return(
        <div>
            <h1 style={heading}>
                IMS-Dashboard
            </h1>
        </div>
    )
}
export default Header