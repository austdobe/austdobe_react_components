import React from "react";

import "../../styles/global.css"
import "../../styles/Button.css"

export interface IButtonProp {
    label: string;
    classes?: string
}

const Button = (props:IButtonProp) => {
    
    return (
        <button data-testid="button" className={ `button ${props.classes ? props.classes ?? '' : ''}` } >
            {props.label}
        </button>
    )
}

export default Button