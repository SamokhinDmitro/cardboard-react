import React from "react";
import './ClientsItem.sass';

import * as Img from './images';


const ClientsItem = props => {
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="clients-block">
                <img src={Img[props.client.img]} alt={props.client.alt}/>
            </div>
        </div>
    );
}

export default ClientsItem;
