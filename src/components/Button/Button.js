import React from 'react';
import '../Button/Button.css';
import { DiReact } from "react-icons/di";

function Button(props) {
   
    const isDisabled = props.disable === 'true' ? true : false;
    const isShadow = props.disableShadow === 'true' ? "hide-shadow" : '';
    const isColor = props.color ? props.color : 'default';
    const isVariant = props.variant ? props.variant : '';
    const isSize = props.size ? props.size : 'md';
    
    return (
        <div className='btn-box'>
            <label>{props.label}</label>
            <button className={`btn ${isVariant} ${isColor} ${isShadow} ${isSize}`} disabled={isDisabled}>
            {
                props.startIcon && (
                    <span
                        className='start-icon button-icon'
                    >{props.startIcon}</span>
                )
            }
                {props.value}
                {
                props.endIcon && (
                    <span
                        className='end-icon button-icon'
                    >{props.endIcon}</span>
                )
            }
                </button>
        </div>
    )
}

export default Button;
