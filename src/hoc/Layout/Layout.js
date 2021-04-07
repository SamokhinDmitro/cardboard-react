import React from "react";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Main from "../../components/Main/Main";
import Features from "../../components/Features/Features";
import Products from "../../components/Products/Products";
import Offer from "../../components/Offer/Offer";
import Production from "../../components/Production/Production";

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Clients from "../../components/Clients/Clients";
import FeedBack from "../../components/FeedBack/FeedBack";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";

import ScrollToTop from "../../components/UI/ScrollToTop/ScrollToTop";

import {withCookies, Cookies} from 'react-cookie';
import {instanceOf} from "prop-types";



class Layout extends React.Component{


    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            popup: false
        };
    }

    componentDidMount() {
        this.getPopupStatus();
    }

    closePopup = () => {
        this.setState({
            popup: false
        });
    }

    showPopup = () => {

        const { cookies } = this.props;

        const date = new Date();

        //Устанавливаем время хранение cookies
        const newDate = new Date(date.setDate(date.getDate() + 1));
        cookies.set('status', true, { path: '/', expires: newDate });

        this.setState({
            popup: true
        });
    }

    //Проверка наличия куки
    getPopupStatus = () => {
        const { cookies } = this.props;

        if(cookies.get('status') === undefined){
            setTimeout(() => this.showPopup(), 3000);
        }
    }

    render() {

        return (
            <Auxiliary>

                <Navigation/>
                {/* /.navigation */}

                {/* HEADER */}
                <Header openModal={this.showPopup}/>
                {/* END HEADER */}

                <Main/>
                {/* /#main.main */}

                <Features/>
                {/* /#features.features */}

                <Products openModal={this.showPopup}/>
                {/* /#products.products */}

                <Offer/>
                {/* /#offer.offer */}

                <Production/>
                {/* /#production.production */}

                <Clients/>
                {/* /#clients.clients */}

                <FeedBack/>
                {/* /#feedback.feedback */}

                <Contacts openModal={this.showPopup}/>
                {/* /#contacts.contacts */}


                <Footer/>
                {/* /footer */}

                {this.state.popup
                    ? <Popup close={this.closePopup}/>
                    : null
                }
                {/* /.popup */}

                <ScrollToTop/>
                {/* /Button Scroll to top */}

            </Auxiliary>
        );
    }
}

export default withCookies(Layout);
