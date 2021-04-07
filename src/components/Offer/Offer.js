import React from "react";
import './Offer.sass';
import Forms from "../UI/Forms/Forms";

//Animate
import ScrollAnimation from 'react-animate-on-scroll'


export default class Offer extends React.Component{

    render() {
        return (
            <section className="offer dark-bg" id="offer">
                <div className="container">
                    <ScrollAnimation animateIn="zoomIn" duration={2}>
                        <h2 className="offer-title">
                            Получите индивидуальное предложение
                            <span className="offer-title__subtitle">
            на производство и поставку изделий
        </span>
                        </h2>
                    </ScrollAnimation>


                    <div className="offer-form">


                        <Forms
                            idForm="offerForm"
                            nameForm="offerForm"
                            classesInput="form__input offer-form__input"
                            idInput="offer-phone"
                            classesBtn="button offer-form__btn"
                        >

                            <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200}>
                                <label htmlFor="offer-phone" className="offer-form__label">
                                    Введите ваш номер телефона:
                                </label>
                            </ScrollAnimation>

                        </Forms>

                        <span className="form__small main-form__small">
                        <sup>*</sup>Минимальный заказ 500шт
                    </span>

                    </div>

                </div>
            </section>
        );
    }
}
