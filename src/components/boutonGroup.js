import React from 'react'
import './componentStyle/boutonGroup.css'

function boutonGroup() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h3><a href="./contenu1">ACCUEIL</a></h3>
                </div>
                <ul className="nav-links">
                    <li><a href="./contenu2">Les Sections</a></li>
                    <li><a>Historique</a></li>
                    <li><a>Vie de l'Eglise</a></li>
                    <li><a>Contacter nous</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default boutonGroup
