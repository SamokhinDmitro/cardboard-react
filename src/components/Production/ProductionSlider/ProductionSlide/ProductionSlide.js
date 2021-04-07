import React from "react";
import * as Img from './images';

const ProductionSlide = props => {

    return (
        <img src={Img[props.slide.img]} alt={props.slide.alt}/>
    );
}

export default ProductionSlide;
