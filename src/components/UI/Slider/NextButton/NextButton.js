import React from "react";
import './NextButton.sass';

const NextButton = props => {

    const cls = [props.cls];

    return (
        <button className={cls.join(' ')} onClick={props.onClick}>{props.children}</button>
    );


}

export default NextButton;
