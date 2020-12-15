import React from 'react'
import './componentStyle/boutonGroup.css'

function BoutonGroup() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <a href="./contenu1">ACCUEIL</a>
                </div>
                <div className="nav-links">
                    <div className='dropdown'>
                        <a href="#">Sections</a>
                        <div className="dropdown-content">
                            <a href="#">Ecole du dimanche</a>
                            <a href="#">Jeunes chrétiens</a>
                            <a href="#">Femmes chrétiennes</a>
                            <a href="#">Hommes chrétiens</a>
                            <a href="#">Chorale</a>
                            <a href="#">Musique</a>
                        </div>
                    </div>
                    <a href="#">Historiques</a>
                    <a href="#">La vie de l 'Eglise</a>
                    <a href="#">Contactez nous</a>
                </div>
            </nav>
        </div>
    )
}

export default BoutonGroup
