import React, { Component } from 'react';
import "./Tile.css";

const Tile = (props) => {
    return <div
        id={props.id} 
        onClick={()=>{props.handleInput(props.id)}}
        >
            <img src={props.image} />
        {props.name}
                    {/* <button onClick={props.handleInput}
            >Increment</button> */}
        </div>

}


export default Tile;

