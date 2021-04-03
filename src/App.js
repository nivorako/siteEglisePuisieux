import React from 'react'
import './components/css/App.css'
import Header from './header'
import CorpsTexte from './corpsTexte'
import Footer from './footer'

function App() {
  return (
    <div className='App'>
      <div className='container-fluid'>
        <Header />
        <CorpsTexte />
        <Footer />
      </div>
    </div>
  );
}

export default App
