import React from 'react'
import './componentStyle/boutonGroup.css'

function BoutonGroup() {
    return ( 
            <nav>  
                <a href="./"><button>ACCUEIL</button></a>             
                <div className='dropdown'>
                    <button href="#">Sections</button>
                    <div className="dropdown-content">
                        <a href="./ecoleD">Ecole du dimanche</a>
                        <a href="./jeunes">Jeunes chrétiens</a>
                        <a href="./femmes">Femmes chrétiennes</a>
                    </div>
                </div>
                <div className='dropdown'>
                    <button href='#'>Vie d'Eglise</button>           
                    <div className="dropdown-content">
                        <a href="#">ConfCall Biblique</a>
                        <a href="#">Programme du dimanche</a>
                        <a href="#">Zavatra Hafa</a>
                        <a href="#">Fenoy ny Banga</a>
                    </div>
                </div>
                <button href="#">Historiques</button>
                <button href="#">Contactez nous</button>
            </nav>
    )
}

export default BoutonGroup
