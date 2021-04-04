import React, { Component } from "react"
import Title from './components/title'
import Logo from './components/logo'
import Bg from './assets/bg2.jpg'
import BoutonGroup from './components/boutonGroup'
   
export default class Header extends Component{
    render(){
        return(
            <div className="header" style={{
                fontFamily: "serif",
                height:"50vh",
                backgroundImage:`url(${Bg})`,
                backgroundSize: "Cover",
                backgroundRepeat: "no-repeat",
                marginLeft:"-15px",
                marginRight:"-15px"
            }}>
                <div className="row">
                    <div className='col-2'>
                        <Logo /> 
                    </div>
                    <div className='col'>
                        <Title />
                    </div>
                </div>
                <div className="row">
                   <BoutonGroup />
                </div>
            </div>
        );
    }
}