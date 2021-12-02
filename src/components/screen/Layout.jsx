//vendor
import React from 'react'
//styles
import '../../styles/layout.css'
export const Layout = () => {
    return (
        <div className="main">
            <h1 className="main__title">DROPZONE VIEW</h1>
            <div className="main__center">
                <h3 className="main__center--title">DROPZONE AREA</h3>
                <div></div>
                <div className="center__rigth">
                    <div className="center__rigth--item">Calcular resultados</div>
                    <div className="center__rigth--item">Resultados MSE</div>
                </div>
            </div>
            <div class="main__foot">Visualizacion de datos</div>
        </div>
    )
}
