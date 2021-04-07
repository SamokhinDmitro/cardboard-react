import React from "react";
import './Features.sass';

import Numbers from "./Numbers/Numbers";
import FeaturesItem from "./FeaturesItem/FeaturesItem";


export default class Features extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            numbers: [
                {title: '5 лет', descr: 'На рынке изделий из гофрокартона'},
                {title: 'до 5 000 000 кв м', descr: 'Ежемесячный объем производства гофрокартона'},
                {title: '4 000 кв м', descr: 'Площадь склада'}
            ],
            blocks: [
               
                {
                    img: 'img1',
                    alt: 'Производство',
                    title: 'Производство',
                    descr: '4 технологические линии способны выполнить любой заказ любой сложности'
                },
                
                {
                    img: 'img2',
                    alt: 'Бесплатные образцы',
                    title: 'Бесплатные образцы',
                    descr: ' Бесплатно делаем образцы гофроупаковки - это помогает заранее увидеть\n' +
                        '                                        упаковку'
                },
                {
                    img: 'img3',
                    alt: 'Стабильное качество',
                    title: 'Стабильное качество',
                    descr: 'Собственная лаборатория контролирует качество на каждом этапе производства'
                },
                {
                    img: 'img4',
                    alt: 'Страховой запас',
                    title: 'Страховой запас',
                    descr: '  Можем хранить запас гофро- продукции на своих складах и поставлять его\n' +
                        '                                        партиями'
                },
                {
                    img: 'img5',
                    alt: 'Флексопечать',
                    title: 'Флексопечать',
                    descr: 'Возможно нанесение вашего логотипа, текста или манипуляционных знаков'
                },

                {
                    img: 'img6',
                    alt: 'Гидрофобные добавки',
                    title: 'Гидрофобные добавки',
                    descr: 'На производстве реализована технология, которая позволяет гофрокартону стать\n' +
                        '                                        прочнее'
                },


            ]
        };

    }

    render() {
        return (
            <section className="features" id="features">
                <div className="container">
                    {/* Numbers */}
                    <div className="row">

                        {this.state.numbers.map((number, index) => {
                            return (
                                <Numbers key={index} title={number.title} descr={number.descr}/>
                            );
                        })}
                    </div>
                    {/* END Numbers */}


                    <div className="row">

                        {this.state.blocks.map((block, index) => {
                                let count = (index+1) * 100;

                            return (
                                <FeaturesItem
                                    key={index}
                                    img={block.img}
                                    alt={block.alt}
                                    title={block.title}
                                    descr={block.descr}
                                    delay = {count}
                                />
                            );
                        })}

                    </div>
                </div>
            </section>
        );
    }
}
