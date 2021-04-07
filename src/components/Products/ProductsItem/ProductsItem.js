import React from "react";
import './ProductsItem.sass';

import * as Img from './images';

//Animate
import ScrollAnimation from 'react-animate-on-scroll'

const ProductsItem = props => {
    return (
        <div className="col-12 col-md-6">
            <ScrollAnimation animateIn="fadeInUp" delay={props.delay} duration={2}>
                <div className="products-block">
                    <div className="products-block__img">
                        <img src={Img[`${props.img}`]} alt={props.alt}/>
                    </div>

                    <h3 className="products-block__title">{props.title}</h3>

                    <div className="products-block__buttons">
                        <button className="button button_o products-block__btn">Подробнее</button>
                        <button className="button button__cta" onClick={props.openModal}>Получить расчет</button>
                    </div>

                </div>
                {/* /.products-block */}
            </ScrollAnimation>

        </div>
    );


}

export default ProductsItem;
