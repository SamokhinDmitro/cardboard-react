import React from "react";
import './FeedBack.sass';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PrevButton from "../UI/Slider/PrevButton/PrevButton";
import NextButton from "../UI/Slider/NextButton/NextButton";

//Animate
import ScrollAnimation from 'react-animate-on-scroll';

import * as Img from './images';

export default class FeedBack extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {img: 'feedback1', alt: 'Feedback1'},
                {img: 'feedback2', alt: 'Feedback2'},
                {img: 'feedback3', alt: 'Feedback3'},
                {img: 'feedback1', alt: 'Feedback4'}
            ]
        };
    }

    //Отрисовка слайда
    renderSlides = () => {
        return this.state.slides.map((slide, index) => {
            return (
                <div key={index} className="feedback-slider__item">
                    <img src={Img[slide.img]} alt={slide.alt}/>
                </div>
            );
        })
    }

    render() {

        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: true,
            //fade: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        //rows: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        prevArrow: <PrevButton cls="slider-btn slider-btn__prev">&lt;</PrevButton>,
                        nextArrow: <NextButton cls="slider-btn slider-btn__next">&gt;</NextButton>
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ],

            prevArrow: <PrevButton cls="feedback-btn feedback-btn__prev">
                <img src={Img.prev} alt="prev"/>
            </PrevButton>,
            nextArrow: <NextButton cls="feedback-btn feedback-btn__next">
                <img src={Img.next} alt="next"/>
            </NextButton>,
            autoplay: true,
            autoplaySpeed: 2000,
            rows: 1
        };

        return (
            <section className="feedback" id="feedback">
                <ScrollAnimation animateIn="fadeInDown" duration={2}>
                    <h2 className="section-title feedback-title">Отзывы о сотрудничестве</h2>
                </ScrollAnimation>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Slider
                                className="feedback-slider"
                                {...settings}
                            >
                                {this.renderSlides()}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
