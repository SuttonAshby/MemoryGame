import React, { Component } from 'react';
import Tile from './Tile/Tile';
import data from '../data.json'
 

export default class Game extends Component {

    state = {
        data,
        score: 0
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
    }


    render() {

        const shuffled = this.shuffleArray(this.state.data)

        const forDisplay = this.state.data.map((flag) =>{
            return <Tile key={flag.id} id={flag.id} name={flag.name}  image={flag.image}/>
        })
        return <div>
            <div>Score: {this.state.score}</div>
            <div> game space
                {/* <Tile id={data[0].id} name={data[0].name}  image={data[0].image}/> */}
                {forDisplay}
            </div>


        </div>
    }


}