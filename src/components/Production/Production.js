import React from "react";
import './Production.sass';

import ProductionSlider from "./ProductionSlider/ProductionSlider";

//Animate
import ScrollAnimation from 'react-animate-on-scroll';


export default class Production extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title: 'Производство',
            descr: ' Современное оборудование позволяет произ-водить до 5 миллионов квадратных метров\n' +
                '                                    гофрокартона\n' +
                '                                    ежемесячно. Гофрокороба и лотки производятся по ГОСТу или чертежам заказчика.\n' +
                '                                    Досконально прорабатываем конструкции коробов и составы сырья, учитывая условия\n' +
                '                                    хранения,\n' +
                '                                    транспортировки и производства вашей продукции.\n' +
                '                                    Возможно нанесение цветной флексопечати на поверхность коробов.'
        };
    };

    render() {
        return (
            <section className="production" id="production">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-7 order-2 order-lg-1">
                            <ProductionSlider/>
                        </div>
                        {/* /.col-7 */}

                        <div className="col-12 col-md-12 col-lg-5 order-1 order-lg-2">
                            <div className="production-text">
                                <ScrollAnimation animateIn="fadeInDown" duration={1}>
                                    <h3 className="production-text__title">
                                        {this.state.title}
                                    </h3>
                                </ScrollAnimation>


                                <ScrollAnimation animateIn="fadeInUp" duration={1.5} delay={200}>
                                    <p className="production-text__descr">
                                        {this.state.descr}
                                    </p>
                                </ScrollAnimation>
                            </div>
                            {/* /.production-text */}
                        </div>
                        {/* /.col-5 */}
                    </div>

                </div>
            </section>
        );
    }
}
