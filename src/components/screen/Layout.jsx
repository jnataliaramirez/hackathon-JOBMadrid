//vendor
import React from 'react'
//styles
import '../../styles/layout.css'
//components
import { CalculateResult } from '../CalculateResult'
import { Dropzone } from '../Dropzone'
import { ViewData } from '../ViewData'

export const Layout = () => {
    return (
        <div className="main">
            <h1 className="main__title">DROPZONE VIEW</h1>
            <div className="main__center">
                <Dropzone />
                <div></div>
                <div className="center__rigth">
                    <div className="center__rigth--item"><CalculateResult /></div>
                    <div className="center__rigth--item">Resultados MSE</div>
                </div>
            </div>
            <div className="main__foot"><ViewData /></div>
        </div>
    )
}
