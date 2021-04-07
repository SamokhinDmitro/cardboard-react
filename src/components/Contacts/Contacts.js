import React from "react";
import './Contacts.sass';

import mapsIcon from './icons/maps-icon.png';
import GoogleMaps from "../UI/GoogleMaps/GoogleMaps";
export default class Contacts extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            office: ' г. Днепр, ул. Песочная, 23',
            store: ' г. Днепр, ул. Магистральная, 4',
            email: 'dnepr.karton@gmail.com',
            phones: [
                {href: 'tel:+380981234567', title: '38 (098)-123-45-67'},
                {href: 'tel:+380961234567', title: '38 (096)-123-45-67'}
            ],
            maps: {
                title: 'Добрый картон',
                icon: mapsIcon,
                position: {
                    lat: 48.489829,
                    lng: 35.142450
                }
            }
        };
    }

    render() {
        return (
            <section className="contacts" id="contacts">

                <div className="contacts-block">
                    <h2 className="contacts-block__main-title section-title">Контакты</h2>
                    <div className="contacts-block__address contacts-block__text">

            <span className="contacts-block__title">
                Адрес офиса
            </span>
                        {this.state.office}
                        <span className="contacts-block__title">
                Адрес склада
            </span>
                        {this.state.store}
                    </div>

                    <div className="contacts-block__phone contacts-block__text">
            <span className="contacts-block__title">
                Тел. отдела продаж:
            </span>
                        {this.state.phones.map((phone, index) => {
                            return (
                                <a key={index} href={phone.href} className="contacts-block__link">{phone.title}</a>
                            );

                        })}
                    </div>

                    <div className="contacts-block__cta contacts-block__text">
                        <button className="button button__cta" onClick={this.props.openModal}>Заказать звонок</button>
                    </div>

                    <div className="contacts-block__mail contacts-block__text">
            <span className="contacts-block__title">
                Е-mail
            </span>
                        <a href="mailto:dnepr.karton@gmail.com"
                           className="contacts-block__link">{this.state.email}</a>
                    </div>
                </div>
                {/* /.contacts-block */}

                {/*<div id="map"></div>*/}
                {/*{this.renderMaps()}*/}

                <GoogleMaps
                    id={'map'}
                    icon={this.state.maps.icon}
                    title={this.state.maps.title}
                    position={this.state.maps.position}
                />

            </section>
        );
    }
}
