import './Button.css';
import { useState } from "react";

const Button = (props) => {

   
    return <div>
        <button className="button" onClick={props.onClick} >{props.label}</button>
    </div>
}

export default Button