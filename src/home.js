import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Acceuil from './pages/acceuil'
import Jeunes from './pages/jeunes'
import EcoleD from './pages/ecoleD'
import Femmes from './pages/femmes'
import Hommes from './pages/hommes'
import Musik from './pages/musik'
import Chorale from './pages/chorale'
import ConfCall from './pages/confCall'
import Lieu from './pages/lieu'
import Projet from './pages/projet'
import Reglement from './pages/reglement'
import Bureau from './pages/bureau'
import Diacre from './pages/diacre'
import Pasteur from './pages/pasteur'
import Diary from './pages/diary'
import Edito from './pages/edito'
import Pericope from './pages/pericope'
import Reflexion from './pages/reflexion'
import Info from "./components/info"

const contenuStyle = {
    height: "110vh"
}

function Home() {
    return (
            <div className="row corpsTexte">
                <div className="col contenu" style={contenuStyle}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Acceuil}/>
                            <Route path="/ecoleD" component={EcoleD}/>
                            <Route path="/jeunes" component={Jeunes}/>
                            <Route path="/femmes" component={Femmes}/>
                            <Route path="/hommes" component={Hommes}/>
                            <Route path="/musik" component={Musik}/>
                            <Route path="/chorale" component={Chorale}/>
                            <Route path="/confCall" component={ConfCall}/>
                            <Route path="/lieu" component={Lieu}/>
                            <Route path="/projet" component={Projet}/>
                            <Route path="/reglement" component={Reglement}/>
                            <Route path="/bureau" component={Bureau}/>
                            <Route path="/diacre" component={Diacre}/>
                            <Route path="/pasteur" component={Pasteur}/>
                            <Route path="/diary" component={Diary}/>
                            <Route path="/edito" component={Edito}/>
                            <Route path="/pericope" component={Pericope}/>
                            <Route path="/reflexion" component={Reflexion}/>
                        </Switch>  
                    </Router>  
                </div>
                <div className="col-3 info">    
                    <Info />
                </div>
            </div>        
    )
}
 
export default Home;