import React from "react";
import './Footer.sass';

export default class Footer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            year: 2019,
            copy: 'Все права защищены',
          link: {
              href: 'http://google.com',
              title: 'www.gofra-dnepr.ua'
          }
        };
    }

    render() {
        return (
            <footer className="footer" id="footer">
                <div className="footer-block">
                    &copy;
                    <a href={this.state.link.href} className="footer-block__link">{this.state.link.title}</a>,
                    <span className="footer-block__year">{this.state.year}</span>,
                    <span className="footer-block__text">{this.state.copy}</span>
                </div>
            </footer>
        );
    }
}
