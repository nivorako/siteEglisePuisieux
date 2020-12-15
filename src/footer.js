import React from 'react'
import './components/componentStyle/footer.css'

function Footer() {
    return (
        <div className="row footer">
            <div className="col plan d-flex justify-content-center align-items-start mt-4 ">
                <a href="#">ICI pour nous rejoindre</a>
            </div>
            <div className="col adress d-flex flex-column justify-content-center">
                <h5>FPM OF</h5>
                <p>Route de Rouen</p>
                <p>95650 Andranovaky</p>
            </div>
            <div className="col mt-4 d-flex flex-column justify-content-center">
                <p>Face de book</p>
                <p>You tube</p>
                <p>Insta machin</p>
            </div>
        </div>
    )
}

export default Footer
