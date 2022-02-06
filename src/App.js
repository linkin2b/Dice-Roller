import React from "react";
import './App.css';
import d4 from './imgs/d4.png'
import d6 from './imgs/d6.png'
import d8 from './imgs/d8.png'
import d10 from './imgs/d10.png'
import d12 from './imgs/d12.png'
import d20 from './imgs/d20.png'
import d100 from './imgs/d100.png'


const dFour = [1, 2, 3, 4];
const dSix = [1, 2, 3, 4, 5, 6];
const dEight = [1, 2, 3, 4, 5, 6, 7, 8];
const dTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dTwelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const dTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 19, 20];
const dHundred = [...Array(100).keys()];


class Roller extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dice: dTwenty, // Sets an initial state
      currentRoll: '',
      rollLog: [],
      diceImg: d20,
      totalRoll: [],
      sumRoll: 0
    };
  };

//random roll withing die parameters

  roll(dice) {
    const {sumRoll, rollLog} = this.state
    const rolled = dice[Math.floor((Math.random() * dice.length))]

    this.setState(() => {
      return {
        currentRoll: rolled,
        rollLog: [...rollLog, {rolled, diceRolled: dice}], // Use an object for each item in rollRog. That way you can track which kind of die was rolled and use that to display the proper image. See how it's being used below
        sumRoll: sumRoll + rolled // Just add the rolled to the current state of sumRoll and use that to update sumRoll state
      };

    });
    console.log(rollLog);
  };

//dice multiplier


//clear roll log

  clear() {
    this.setState(() => {
      return {rollLog: [], currentRoll: '', totalRoll: 0, sumRoll: 0};
    })
  }

//dice img
  getDiceImage(dice) {
    console.log(dice)
    if (dice === dFour)
      return d4;
    if (dice === dSix)
      return d6;
    if (dice === dEight)
      return d8;
    if (dice === dTen)
      return d10;
    if (dice === dTwelve)
      return d12;
    if (dice === dTwenty)
      return d20;
    if (dice === dHundred)
      return d100;
  }


//resulting roll display

  render() {
    const {dice, currentRoll, rollLog, sumRoll} = this.state; // You want to destructure dice and currentRoll from state so you can use it in your render method

    return (
        <div>
          <div id="dieTray" onChange={this.handleChange}>
            <div>
              <button id="d4" onClick={() =>
                  this.setState({dice: dFour, diceImg:d4})}>
              </button>
            </div>
            <div>
              <button id="d6" onClick={() =>
                  this.setState({dice: dSix, diceImg:d6})}>

              </button>
            </div>
            <div>
              <button id="d8" onClick={() =>
                  this.setState({dice: dEight, diceImg:d8})}>
              </button>
            </div>
            <div>
              <button id="d10" onClick={() =>
                  this.setState({dice: dTen, diceImg:d10})}>
              </button>
            </div>
            <div>
              <button id="d12" onClick={() =>
                  this.setState({dice: dTwelve, diceImg:d12})}>
              </button>
            </div>
            <div>
              <button id="d20" onClick={() =>
                  this.setState({dice: dTwenty, diceImg:d20})}>
              </button>
            </div>
            <div>
              <button id="d100" onClick={() =>
                  this.setState({dice: dHundred, diceImg:d100})}>
              </button>
            </div>
          </div>
          <div>
            <div>
              <button id="rollbtn" className="roll" onClick={() =>
                  this.roll(dice)}>Roll
              </button>
            </div>
            <div>
              <button id="clearbtn" className="clear" onClick={() =>
                  this.clear(rollLog)}>clear
              </button>
            </div>
          </div>
          <div className="box">
            <h1 id="sumRoll" alt="Total Of Rolls">{sumRoll} Total</h1>
            <h2 id="rollDisplay">{currentRoll} <br/> Current</h2>


            <ul id="rollRecord" className="container">
              {rollLog.slice(0).reverse().map((i, index) => (
                    <div className="" key={i*index}>
                      <li id="card">{i.rolled}<br/>
                        <img style={{maxWidth: 28}} src={this.getDiceImage(i.diceRolled)}/>
                      </li>
                    </div>
                ))
              }
            </ul>

          </div>
        </div>

    );
  }
}

export default Roller;
