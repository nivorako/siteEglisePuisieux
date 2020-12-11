import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contenu_1 from './components/contenu1'
import Contenu_2 from './components/contenu2'

const contenuStyle = {
    fontFamilly: "cursive",
    height: "100vh"
}

function Contenu() {
    return (
       
        <Router>
            <div style={contenuStyle}>
                <switch>
                    <Route path="/contenu1" exact component={Contenu_1}/>
                    <Route path="/contenu2" exact component={Contenu_2}/>
                </switch>
            </div>
        </Router>
       
    )
}
 
export default Contenu
