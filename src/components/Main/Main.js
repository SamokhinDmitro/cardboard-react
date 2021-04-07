import React from "react";
import './Main.sass';
import Img from '../../shared/img/main/main-img.png';
import Form from "../UI/Forms/Forms";

//Animate
import ScrollAnimation from 'react-animate-on-scroll'



export default class Main extends React.Component{


    render() {
        //duration - seconds
        //delay - miliseconds
        return (
            <section className="main dark-bg" id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-5 hidden-mobile hidden-sm hidden-md">

                            <ScrollAnimation animateIn="fadeIn" duration={1} delay={100}>
                                <div className="main-img">
                                    <img src={Img} alt="Main Box"/>
                                </div>
                            </ScrollAnimation>


                            {/* /.main-img */}
                        </div>
                        {/* /.col-5 */}

                        <div className="col-12 col-md-12 col-lg-7">
                            <div className="main-text">
                                <ScrollAnimation animateIn="fadeInDown" duration={1} delay={200}>
                                    <h1 className="main-text__title">Производство упаковки из гофрокартона</h1>
                                    {/* /.main-text__title */}
                                </ScrollAnimation>

                                <ScrollAnimation animateIn="fadeInDown" duration={2} delay={100}>
                                    <span className="main-text__subtitle">с доставкой по всей Украине</span>
                                </ScrollAnimation>

                            </div>

                            <div className="main-text__form">
                                <h2 className="main-form__title">Получите индивидуальное предложение
                                    на производство и поставку гофропродукции
                                </h2>

                                <div className="main-form__subtitle">Образцы упаковки бесплатно!</div>

                                <Form
                                    classesForm="form main-form"
                                    classesInput="form__input main-form__input"
                                    idForm="main-form"
                                    idInput="main-phones"
                                    nameForm="clients"
                                    classesBtn="button button_big"
                                />

                                <span className="form__small main-form__small">
                        <sup>*</sup>Минимальный заказ 500шт
                    </span>
                                {/* /#main-form.form */}
                            </div>
                            {/* /.main-text__form */}
                            {/* /.main-text */}
                        </div>
                        {/* /.col-7 */}


                    </div>
                </div>
            </section>
        );
    }
}
