import React from 'react'
import './components/css/app.css'
import Header from './header'
import Home from './main'
import Footer from './footer'

function App() {
  return (
    <div className='App'>
      <div className='container-fluid essai'>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App
