import React from "react";
import './Navigation.sass';

import { HashLink as Link } from 'react-router-hash-link';


export default class Navigation extends React.Component{

    render() {
        return (
            <section className="navigation">
                <div className="container">

                    <nav className="navigation-block" id="navigation-block">
                        <Link to="/#navigation-block" className="navigation-btn">
                            <span className="navigation-btn__line"></span>
                        </Link>
                        <ul className="navigation-block__list">
                            <li className="navigation-block__item">
                                <Link to="/#main" className="navigation-block__link">О компании</Link>
                            </li>
                            <li className="navigation-block__item">
                                <Link to="/#features" className="navigation-block__link">Преимущества</Link>
                            </li>
                            <li className="navigation-block__item">
                                <Link to="/#products" className="navigation-block__link">Продукция</Link>
                            </li>
                            <li className="navigation-block__item">
                                <Link to="/#offer" className="navigation-block__link">Предложение</Link>
                            </li>
                            <li className="navigation-block__item">
                                <Link to="/#production" className="navigation-block__link">Производство</Link>
                            </li>
                            <li className="navigation-block__item">
                                <Link to="/#clients" className="navigation-block__link">Клиенты</Link>
                            </li>
                            <li className="navigation-block__item">
                                <Link to="/#feedback" className="navigation-block__link">Отзывы</Link>
                            </li>
                            <li className="navigation-block__item">
                                <Link to="/#contacts" className="navigation-block__link">Контакты</Link>
                            </li>
                        </ul>
                        {/* /.navigation-block__list */}
                    </nav>
                </div>
            </section>
        );
    }
}
