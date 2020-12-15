import React from 'react'
import './componentStyle/boutonGroup.css'

function BoutonGroup() {
    return (    
            <nav>  
                <a href="/contenu1"><button>ACCUEIL</button></a>             
                <div className='dropdown'>
                    <button href="#">Sections</button>
                    <div className="dropdown-content">
                        <a href="./ecoleDim">Ecole du dimanche</a>
                        <a href="./contenu2">Jeunes chrétiens</a>
                        <a href="">Femmes chrétiennes</a>
                        <a href="#">Hommes chrétiens</a>
                        <a href="#">Chorale</a>
                        <a href="#">Musique</a>
                    </div>
                </div>
                <div className='dropdown'>
                    <button href="#">La vie de l'Eglise</button>
                    <div className="dropdown-content">
                        <a href="#">ConfCall Biblique</a>
                        <a href="#">Programme du dimanche</a>
                        <a href="#">Zavatra Hafa</a>
                        <a href="">Fenoy ny Banga</a>
                    </div>
                </div>
                <button href="#">Historiques</button>
                <button href="">Contactez nous</button>
            </nav>
    )
}

export default BoutonGroup
