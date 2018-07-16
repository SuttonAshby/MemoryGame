import React, { Component } from 'react';
import Tile from './Tile/Tile';
import data from '../data.json'
 

export default class Game extends Component {

    state = {
        data,
        score: 0,
        clicked: [],
        timesLost: 0,
        timesWon: 0
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
    }

    handleInput = (event) =>{

        if(this.state.clicked.includes(event)){

            let newLoss = this.state.timesLost
            newLoss++

            this.setState({timesLost: newLoss, score: 0}, ()=>{
                console.log(this.state.timesLost)
            })

        } else {
            let newScore = this.state.score
            newScore++

            this.setState({score: newScore,
            clicked: [...this.state.clicked, event ]}, ()=>{
                if(this.state.score >= 12){
                    let newWin = this.state.timesWon
                    newWin++
                    this.setState({timesWon: newWin, score: 0})
                }
            })
        }

        console.log(this.state.clicked)
    }



    render() {

    this.shuffleArray(this.state.data)
        const forDisplay = this.state.data.map((flag) => {
            return <Tile 
                key={flag.id} 
                id={flag.id} 
                name={flag.name}  
                image={flag.image}
                handleInput={this.handleInput}/>
        })
        return <div>
            {this.state.timesLost !== 0 ? <div>You've Lost {this.state.timesLost} time(s) </div> : <div /> }
            {this.state.timesWon !== 0 ? <div>You've Won {this.state.timesWon} time(s) </div> : <div /> }
            <div>Current Score: {this.state.score}</div>
            <div> game space
                {forDisplay}
            </div>
        </div>
    }


}