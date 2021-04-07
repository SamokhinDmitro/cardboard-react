import React from "react";
import './Products.sass';

import ProductsItem from "./ProductsItem/ProductsItem";

//Animate
import ScrollAnimation from 'react-animate-on-scroll'



export default class Products extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          products: [
              {
                  img: 'box1',
                  alt:  'Box1',
                  title: 'Гофрокороб 4-х клапанный'
              },
              {
                  img: 'box2',
                  alt:  'Box2',
                  title: 'Гофролоток'
              },
              {
                  img: 'box3',
                  alt:  'Box3',
                  title: 'Гофрокороб самосборный (сложная высечка)'
              },
              {
                  img: 'box4',
                  alt:  'Box4',
                  title: 'Листовой гофрокартон'
              },

          ]
        };
    }

    render() {
        return (
            <section className="products" id="products">

                <ScrollAnimation animateIn="fadeInDown" duration={2}>
                    <h2 className="section-title">Наша Продукция</h2>
                </ScrollAnimation>

                <div className="container">

                    <div className="row">

                        {this.state.products.map((product, index) => {
                            let delay = index * 100;
                            return (
                                <ProductsItem
                                    key={index}
                                    img={product.img}
                                    alt={product.alt}
                                    title={product.title}
                                    delay={delay}
                                    openModal = {this.props.openModal}
                                />
                            );
                        })}

                    </div>
                </div>

            </section>
        );
    }
}
