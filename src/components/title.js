import React, { Component } from 'react'

const titleStyle = {
    textShadow: "3px 3px 5px black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "250px",
    color: "whitesmoke",
}

export default class Title extends Component{
    render(){
        return(
            <div style={titleStyle}>
                <h1 style={{fontSize:"3em"}}>FIANGONANA PROTESTANTA MALAGASY</h1>
                <h3>Orimbaton'ny Finoana</h3>
            </div>
        );
    }
}