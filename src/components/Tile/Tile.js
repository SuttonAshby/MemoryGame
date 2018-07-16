import React, { Component } from 'react';
import "./Tile.css";

const Tile = (props) => {
    return <div id={props.id} >
        <img src={props.image} />
            {props.name}
        </div>

}


export default Tile;

