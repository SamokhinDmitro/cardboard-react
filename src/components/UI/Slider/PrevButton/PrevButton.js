import React from "react";
import './PrevButton.sass';

const PrevButton = props => {
    const cls = [props.cls];

    return (
        <button className={cls.join(' ')} onClick={props.onClick}>{props.children}</button>
    );


}

export default PrevButton;
