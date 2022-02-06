import React from "react";
import './App.css';
import d20 from './imgs/d20.png'

//establish die paramenters
// const die= [
//   {},
//   {},
//
// ]
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
      diceImg: "../src/imgs/d20.png",
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
      return {rollLog: [], currentRoll: '', totalRoll: 0};
    })
  }

//dice img
  getDiceImage(dice) {
    console.log(dice)
    if (dice === dFour)
      return "imgs/d4.png";
    if (dice === dSix.length)
      return "./imgs/d6.png";
    if (dice === dEight.length)
      return "./imgs/d8.png";
    if (dice === dTen.length)
      return "./imgs/d10.png";
    if (dice === dTwelve.length)
      return "./imgs/d12.png";
    if (dice === dTwenty)
      return d20;
    if (dice === dHundred.length)
      return "./imgs/d100.png";
  }


//resulting roll display

  render() {
    const {dice, currentRoll, rollLog, sumRoll} = this.state; // You want to destructure dice and currentRoll from state so you can use it in your render method

    return (
        <div>
          <div id="dieTray" onChange={this.handleChange}>
            <div>
              <button id="d4" onClick={() =>
                  this.setState({dice: dFour, diceImg: "../src/imgs/d4.png"})}>
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
