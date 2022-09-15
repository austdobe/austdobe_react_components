import React from "react";

import "../../styles/global.css"
import { Wrapper } from './Button.styles';

export interface IButtonProp {
    label: string;
    classes?: string
}

const Button = (props:IButtonProp) => {
    
    return (
        <Wrapper data-testid="button" className={ `button ${props.classes ? props.classes ?? '' : ''}` } >
            {props.label}
        </Wrapper>
    )
}

export default Button