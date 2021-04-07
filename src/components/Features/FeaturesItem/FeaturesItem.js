import React from "react";
import './FeaturesItem.sass';

import * as Img from './images';
//Animate
import ScrollAnimation from 'react-animate-on-scroll';

const FeaturesItem = props => {

    return (
        <div className="col-12 col-md-4">
            <ScrollAnimation animateIn="fadeInUp" duration={1} delay={props.delay}>
                <div className="features-block">
                    <div className="features-block__img">
                        <img src={Img[`${props.img}`]} alt={props.alt}/>
                    </div>
                    {/* /.features-block__img */}
                    <div className="features-block__text">
                        <h3 className="features-block__title">{props.title}</h3>

                        <p className="features-block__descr">
                            {props.descr}
                        </p>
                    </div>
                    {/* /.features-block__text */}
                </div>
                {/* /.features-block */}
            </ScrollAnimation>
        </div>
    );


}

export default FeaturesItem;
