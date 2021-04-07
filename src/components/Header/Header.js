import React from "react";
import './Header.sass';

import Icon from '../../shared/img/header/header-btn-icon.png';


export default class Header extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            phones: [
                {ref: 'tel:+380981234567', title: '(098)123-45-67'},
                {ref: 'tel:+380971234567', title: '(097)123-45-67'}
            ]
        };
    }

    render() {
        return (
            <header className="header" id="header">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-2 offset-1 col-sm-2 offset-sm-1  col-md-4 offset-md-0 ">
                            <div className="header-logo"></div>
                        </div>

                        <div className="col-9 col-sm-9 col-md-8">
                            <div className="header-contacts">
                                <div className="header-contacts__phones">
                                    {this.state.phones.map((elem, index) => {
                                        return (
                                            <a key={index} href={elem.ref} className="header-contacts__phone">
                                                {elem.title}
                                            </a>
                                        );
                                    })}
                                </div>

                                <button className="button header-contacts__button button__cta" onClick={this.props.openModal}>
                                    <img src={Icon} alt="phone-icon-btn"/>
                                    <span className="hidden-mobile hidden-sm">Заказать звонок</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
