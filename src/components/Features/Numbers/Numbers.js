import React from "react";
import './Numbers.sass';

//Animate
import ScrollAnimation from 'react-animate-on-scroll';

const Numbers = props => {
    return (
        <div className="col-12 col-md-4">
            <ScrollAnimation animateIn="fadeInDown" duration={1.5} delay={100}>
                <div className="numbers">
                    <h3 className="numbers__title">{props.title}</h3>
                    {/* /.numbers__title */}
                    <p className="numbers__descr">{props.descr}</p>
                    {/* /.numbers__descr */}
                </div>
                {/* /.numbers */}
            </ScrollAnimation>

        </div>
    );


}

export default Numbers;
