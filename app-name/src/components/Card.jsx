import React from "react";
import './Cards.css'

function Card(props) {


    return(
        <div className="card">
            <img src={props.direc} alt="Avatar" width="100%"></img>
            <div class="container">
                <h4><b>{props.nombre}</b></h4> 
                <p>{props.descripcion}</p>
            </div>
            <br/>
        </div>
    );
    
}

export default Card