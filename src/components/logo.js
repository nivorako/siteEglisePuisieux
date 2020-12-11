import React, { Component } from 'react'
import LogoE from './LogoEglise.jpg'


const logoStyle = {
    paddingTop: "20px",
    height:"250px"
}

export default class Logo extends Component{
    render(){
        return(
            <img src={LogoE} style={logoStyle}/>
        );
    }
}