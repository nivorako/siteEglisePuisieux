import React from 'react'
import  '../components/componentStyle/acceuil.css'

function Acceuil() {
    return (
        <div className="contenu1">
            <div className="row contenu1First">
                <div className="col-5">
                    <h1>PROCHAIN  CULTE :</h1>
                </div>
                <div className="col annonce">
                    <h1>Ce Dimanche 22 Décembre</h1> 
                    <div>
                        <p>En ce temps d'urgence sanitaire,</p>
                        <p>rejoignez nous</p>
                        <p>tel :....... allo</p>
                    </div>
                </div>
            </div>
            <div className="row annoncePasteur">
                <a href="#">Reflexion du jour</a>
                <a href="#">Pericope</a>
                <a href="#">Edito du Pasteur</a>
                <a href="#">Diary</a>
            </div>    
        </div>
    )
}

export default Acceuil
