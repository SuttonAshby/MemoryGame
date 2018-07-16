import React, { Component } from 'react';
import "./Tile.css";

const Tile = (props) => {
    return <div
        className="tile"
        id={props.id} 
        onClick={()=>{props.handleInput(props.id)}}
        >
        <img src={props.image} />
        <div className="name">{props.name}</div>
                    {/* <button onClick={props.handleInput}
            >Increment</button> */}
        </div>

}


export default Tile;

