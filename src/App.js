import React from 'react'
import './App.css'
import Header from './header'
import Contenu from './contenu'

function App() {
  return (
    <div className='App'>
        <Header />
        <div className="row contenu">
            <div className="col">
                <Contenu />
            </div>
            <div className="col">
                Allo
            </div>
        </div>
    </div>
  );
}

export default App;
