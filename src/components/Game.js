import React, { Component } from 'react';
import Tile from './Tile/Tile';
import data from '../data.json'
 

export default class Game extends Component {

    state = {
        data,
        score: 0
    }

    render() {
        return <div>
            <div>Score: {this.state.score}</div>
            <div> game space
                <Tile id={data[0].id} name={data[0].name}  image={data[0].image}/>
            </div>


        </div>
    }


}