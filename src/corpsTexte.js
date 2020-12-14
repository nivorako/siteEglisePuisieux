import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contenu_1 from './components/contenu1'
import Contenu_2 from './components/contenu2'
import Info from "./components/info"

const contenuStyle = {
    height: "100vh"
}

function CorpsTexte() {
    return (
            <div className="row corpsTexte">
                <div className="col contenu" style={contenuStyle}>
                    <Router>
                        <Switch>
                            <Route path="/contenu1" exact component={Contenu_1}/>
                            <Route path="/contenu2" exact component={Contenu_2}/>
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