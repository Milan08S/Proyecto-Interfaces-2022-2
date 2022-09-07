import React from "react";
import './Button.css'

function Button(props) {

    const onButtonClick = () =>{
        console.log('Click!')
    }

    return(
        <button
            onClick={onButtonClick} 
            className="btn">{props.name}
        </button>
        
    );

}


export default Button;