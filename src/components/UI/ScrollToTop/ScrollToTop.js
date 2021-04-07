import React from "react";
import './ScrollToTop.sass';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";


export default class ScrollToTop extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };
    }

    componentDidMount() {
        let scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility = () => {
        if(window.pageYOffset > document.documentElement.clientHeight) {
            this.setState({
                isVisible: true
            })
        }else{
            this.setState({
                isVisible: false
            });
        }

    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <Auxiliary>
                {this.state.isVisible
                    ? <button className="button button_up" onClick={this.scrollToTop}>
                        &#9650;
                    </button>
                    : null
                }
            </Auxiliary>
        );
    }
}
