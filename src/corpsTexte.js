import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contenu1 from './components/contenu1'
import Contenu2 from './components/contenu2'
import EcoleDim from './components/ecoleDim'
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
                            <Route exact path="/contenu1"  component={Contenu1}/>
                            <Route path="/ecoleDim"  component={EcoleDim}/>
                            <Route path="/contenu2"  component={Contenu2}/>
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