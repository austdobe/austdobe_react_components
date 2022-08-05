import React from "react";
import "../../styles/Card.css"

export interface ICardProp {
    classes?: string
    image?: string
    description: string
}

const Card = (props:ICardProp) => {

    return (
        <div className={`card ${props.classes ? props.classes ?? '' : ''}` }>
            {props.image && 
            <div className="image_wrapper">
                <img className="image" src={props.image} />
            </div>
            }
            <div className="description">{props.description}</div>
        </div>
    )
}

export default Card