import React, { Component } from "react"
import Title from './components/title'
import Logo from './components/logo'
import Bg from './assets/bg2.jpg'
import BoutonGroup from './components/boutonGroup'
   
export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="header__title">
                    <div className='title__logo'> 
                        <Logo /> 
                    </div>
                    <div className='title__title'>
                        <Title />
                    </div>
                </div>
                <div className="header__button">
                   <BoutonGroup />
                </div>
            </div>
        );
    }
}