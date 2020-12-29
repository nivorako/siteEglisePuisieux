import React from 'react'
import Image1 from "../assets/messe1.jpeg"
import Image2 from "../assets/messe2.jpeg"
import Image3 from "../assets/messe3.jpeg"
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'
import './componentStyle/info.css'

const proprietes = {

}

function Info() {
    return (
        <div className="info mt-4">
            <a href="./bureau"><button>Le bureau</button></a>
            <a href="./diacre"><button>Les diacres</button></a>
            <a href="./pasteur"><button>Le Pasteur</button></a>
            <a href="#"><button>Les évènements</button></a>
            <div className="containerSlide">
                <div className="each-slide">
                    <img src={Image1}/>
                </div>
                
                <h3>Titre de l image</h3>
            </div>
        </div>
    );
}

export default Info
