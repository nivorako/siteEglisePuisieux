import React from 'react'
import './components/css/app.css'
import Header from './header'
import Home from './home'
import Footer from './footer'

function App() {
  return (
    <div className='App'>
      <div className='container-fluid'>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App
