import React from 'react';

export default function Navbar(props) {
    return (
        <div className='Nav'>
            <h1 className='Nav-heading'>{props.title}</h1>
        </div>
    )
}
