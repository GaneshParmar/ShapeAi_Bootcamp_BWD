import { render } from '@testing-library/react';
import React from 'react'

function Note() {
    render()
    return(
    <div className="note">
        <h1>Javascript and ReactJs</h1>
        <p>
            This was an amazing bootcamp taken up by Shaurya Sinha Sir.We coverd all basics from scratch of Javascript,Html and Reactjs.
        </p>
    </div>);
}

export default Note;