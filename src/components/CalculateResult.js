//vendor
import React from 'react'
//styles
import '../styles/calculateresult.css'

export const CalculateResult = () => {
    const handleButtonClick = () => {
        console.log('estoy funcionando')
    }
    return (
        <button
            className="btncalculate"
            onClick={handleButtonClick}
        >
            soy calcular
        </button>
    )
}
