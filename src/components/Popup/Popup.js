import React from "react";
import './Popup.sass';

import Forms from "../UI/Forms/Forms";




class Popup extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            title: 'Форма обратной связи',
            subTitle: 'Получите индивидуальное предложение',
            descr: 'на производство и поставку изделий',
        };
    }

    render() {





        return (
            <section className="popup" id="popup">

                        <div className="popup-content">
                            <h2 className="popup-content__title">{this.state.title}</h2>
                            <button className="popup-content__close" onClick={this.props.close}>&times;</button>
                            <div className="popup-form">
                                <h3 className="popup-form__title">{this.state.subTitle}</h3>
                                <span className="popup-form__subtitle">{this.state.descr}</span>

                                <Forms
                                    idForm="popupForm"
                                    classesForm="popup-form__form"
                                    nameForm="popupForm"
                                    idInput="popup-phone"
                                    classesInput="popup-form__input"
                                    classesBtn="button button_popup"
                                >
                                    <label htmlFor="popup-phone" className="popup-form__label">Введите ваш номер
                                        телефона:</label>
                                </Forms>
                                
                                <span className="form__small popup-form__small">
                        <sup>*</sup>Минимальный заказ 500шт
                    </span>
                            </div>
                        </div>
                        {/* /.popup-content */}
                    </section>
        );
    }
}

export default Popup;
