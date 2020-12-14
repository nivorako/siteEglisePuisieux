import React from 'react'
import './componentStyle/contenu1.css'


function Contenu_1() {
    return (
        <div className="contenu1" >
            <div className="annonce">
                <h3>Ce Dimanche 22 Décembre</h3>
                <div>
                    <p>En ce temps d'urgence sanitaire,</p>
                    <p>rejoignez nous</p>
                    <p>tel :....... allo</p>
                </div>
            </div>
            <div className="row">
                <div className='col annonceBibleG'>
                    <h2>Salamo 23;</h2>
                    <h2>Ezekiela 34-11-17;</h2>
                </div> 
                <div className='col annonceBibleD'>
                    <h2>Korintiana 23;</h2>
                    <h2>Marka 13-33-37;</h2>
                </div>
            </div>
            <div className="annoncePasteur">
                <h2>Reflexion du jour</h2>
                <h2>Pericope</h2>
                <h2>Edito du Pasteur</h2>
            </div>    
        </div>
    )
}

export default Contenu_1
