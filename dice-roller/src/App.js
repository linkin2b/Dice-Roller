import React from "react";
import './App.css';

//establish die paramenters
// const die= [
//   {},
//   {},
//
// ]
const dFour = [1, 2 , 3 ,4];
const dSix = [1, 2, 3, 4, 5, 6];
const dEight = [1, 2, 3, 4, 5, 6, 7, 8];
const dTen = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
const dTwelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const dTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 19, 20];
const dHundred = [...Array(100).keys()];
const rollLog= [];

class Roller extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dice: dHundred, // Sets an initial state
            currentRoll: '',
            };
        // this.playSound = this.playSound.bind.this;
        // this.onPress = this.onPress.bind.this;
    };


//random roll withing die parameters

    roll(dice) {
        this.setState(() => {
            return {currentRoll: dice[Math.floor((Math.random() * dice.length))]}
        });
        
        };




//html button to initiate roll




//resulting roll display

    render() {
        const {dice, currentRoll} = this.state; // You want to destructure dice and currentRoll from state so you can use it in your render method

        return (
            <div id="dieTray">
                <div i>
                    <button id="d4" onClick={() =>
                        this.setState({dice: dFour})}>
                    </button>
                </div>
                <div>
                    <button id="d6" onClick={() =>
                        this.setState({dice: dSix})}>

                    </button>
                </div>
                <div>
                    <button id="d8" onClick={() =>
                        this.setState({dice: dEight})}>
                    </button>
                </div>
                <div>
                    <button id="d10" onClick={() =>
                        this.setState({dice: dTen})}>
                    </button>
                </div>
                <div>
                    <button id="d12" onClick={() =>
                        this.setState({dice: dTwelve})}> 
                    </button>
                </div>
                <div>
                    <button id="d20" onClick={() =>
                        this.setState({dice: dTwenty})}>
                    </button>
                </div>
                <div>
                    <button id="d100" onClick={() =>
                        this.setState({dice: dHundred})}>
                    </button>
                </div>
                <div>
                    <button id="activate" onClick={() =>
                        this.roll(dice)}>Roll
                    </button>
                </div>
                <h2 id="rollDisplay">{currentRoll}</h2>
                <div>
                    <ul>{rollLog}</ul>
                </div>
            </div>
        );
    }
}

export default Roller;
