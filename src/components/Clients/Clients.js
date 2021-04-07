import React from "react";
import './Clients.sass';

import ClientsItem from "./ClientsIItem/ClientsItem";
//Animate
import ScrollAnimation from 'react-animate-on-scroll';


export default class Clients extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            clients: [
                {img: 'client1', alt: 'Восход'},
                {img: 'client2', alt: 'Стерх'},
                {img: 'client3', alt: 'Серебряный снег'},
                {img: 'client4', alt: 'Авдон'},
                {img: 'client5', alt: 'Бройлер'},
                {img: 'client6', alt: 'Башкирское мороженое'},
                {img: 'client7', alt: 'Аллат молочные продукты'},
                {img: 'client8', alt: 'Альтернатива'},
                {img: 'client9', alt: 'Индюшкин'},
                {img: 'client10', alt: 'Халават'},
                {img: 'client11', alt: 'Молочный фермер'},
                {img: 'client12', alt: 'Меги'}
            ]
        };
    }

    render() {
        return (
            <section className="clients" id="clients">
                <ScrollAnimation animateIn="fadeInDown" duration={2}>
                    <h2 className="section-title clients-title">Наши клиенты</h2>
                </ScrollAnimation>

                <div className="container">
                    <div className="row">

                        {this.state.clients.map((client, index) => {
                                return (
                                    <ClientsItem key={index} client={client}/>
                                );
                            })
                        }

                    </div>
                </div>
            </section>
        );
    }
}
