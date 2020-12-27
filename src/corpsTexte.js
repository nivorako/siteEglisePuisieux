import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Acceuil from './pages/acceuil'
import Jeunes from './pages/jeunes'
import EcoleD from './pages/ecoleD'
import Femmes from './pages/femmes'
import Info from "./components/info"

const contenuStyle = {
    height: "110vh"
}

function CorpsTexte() {
    return (
            <div className="row corpsTexte">
                <div className="col contenu" style={contenuStyle}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Acceuil}/>
                            <Route path="/ecoleD" component={EcoleD}/>
                            <Route path="/jeunes" component={Jeunes}/>
                            <Route path="/femmes" component={Femmes}/>
                        </Switch>  
                    </Router>  
                </div>
                <div className="col-3 info">    
                    <Info />
                </div>
            </div>        
    )
}
 
export default CorpsTexte