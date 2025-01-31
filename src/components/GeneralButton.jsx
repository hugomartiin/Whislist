import React from 'react'
import './GeneralButton.css'
function GeneralButton({ actionFunction, buttonText }) {
    return (
        <button
            type='button'
            className='general-button'
            onClick={actionFunction}
        >
            {buttonText}
        </button>
    )
}

export default GeneralButton
