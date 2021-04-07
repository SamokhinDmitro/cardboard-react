import React from "react";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ProductionSlider.sass';
import ProductionSlide from "./ProductionSlide/ProductionSlide";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

import PrevButton from "../../UI/Slider/PrevButton/PrevButton";
import NextButton from "../../UI/Slider/NextButton/NextButton";

export default class ProductionSlider extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            slides: [
                {img: 'big1', alt: 'Product1'},
                {img: 'big2', alt: 'Product2'},
                {img: 'big3', alt: 'Product3'},
                {img: 'big4', alt: 'Product4'},
                {img: 'big5', alt: 'Product5'}
            ],
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    //Отрисовка слайдов
    renderSlideToTop = () => {
        return this.state.slides.map((slide, index) => {
           return (
               <div className="production-slider-top__item" key={index}>
                   <ProductionSlide slide={slide}/>
               </div>
           );
        });

    }

    //Отрисовка слайдов bottom
    renderSlideToBottom = () => {
        return this.state.slides.map((slide, index) => {
            return (
                <div className="production-slider-bottom__item" key={index}>
                    <ProductionSlide slide={slide}/>
                </div>
            );
        })
    }

    render() {

        //Настройки большого слайдера
        const settingBigSlider = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            responsive: [

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ],
            autoplay: true,
            autoplaySpeed: 3000,
            arrows : false
        };

        const settingsSecondSlider = {
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }

            ],

            prevArrow: <PrevButton cls="slider-btn slider-btn__prev">&lt;</PrevButton>,
            nextArrow: <NextButton cls="slider-btn slider-btn__next">&gt;</NextButton>,
            autoplay: true,
            autoplaySpeed: 3000
        };

        return (
            <Auxiliary>
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    {...settingBigSlider}
                    className="production-slider-top hidden-mobile hidden-sm hidden-md"
                >
                    {this.renderSlideToTop()}
                </Slider>
                {/* /.production-slider-top */}

                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    {...settingsSecondSlider}
                    className="production-slider-bottom"
                >
                    {this.renderSlideToBottom()}
                </Slider>

                {/* /.production-slider-bottom */}
            </Auxiliary>
        );
    }
}
