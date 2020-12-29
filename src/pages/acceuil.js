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
                <h2>Reflexion du jour</h2>
                <h2>Pericope</h2>
                <h2>Edito du Pasteur</h2>
                <h2>Diary</h2>
            </div>    
        </div>
    )
}

export default Acceuil
