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
    var rolled = dice[Math.floor((Math.random() * dice.length))]
    console.log(rolled);
    
    if(document.getElementById('plusFive').checked){
      rolled= rolled + 5;
    } if(document.getElementById('plusTwo').checked){
      rolled= rolled +2;
    } if (document.getElementById('plusOne').checked) {
      rolled = rolled +1;
    } if(document.getElementById('minusOne').checked){
      rolled= rolled - 1;
    } if(document.getElementById('minusTwo').checked){
      rolled= rolled - 2;
    } if (document.getElementById('minusFive').checked){
      rolled = rolled - 5;
    }
    ;
console.log(rolled);
    this.setState(() => {
      return {
        currentRoll: rolled,
        rollLog: [...rollLog, {rolled, diceRolled: dice}], 
        sumRoll: sumRoll + rolled 
      };
      

    });
  }

//advantage roll
advRoll(dice) {
  const {rollLog, sumRoll} = this.state
  let x = dice[Math.floor((Math.random() * dice.length))]
  let y = dice[Math.floor((Math.random() * dice.length))]
  var highRoll = Math.max(x,y)
  
  this.setState(() => {
    return {
      currentRoll: highRoll,
      rollLog: [...rollLog, {rolled: highRoll, diceRolled: dice}],
      sumRoll: sumRoll + highRoll
    };
    
  });

console.log(this.state.currentRoll, x, y);
}


//disadvantage roll
disRoll(dice) {
  const {rollLog, sumRoll} = this.state
  let x = dice[Math.floor((Math.random() * dice.length))]
  let y = dice[Math.floor((Math.random() * dice.length))]
  var lowRoll = Math.min(x,y)
  
  this.setState(() => {
    return {
      currentRoll: lowRoll,
      rollLog: [...rollLog, {rolled: lowRoll, diceRolled: dice}],
      sumRoll: sumRoll + lowRoll
    };
    ;
  });
console.log(this.state.currentRoll, x, y)
}


//clear roll log

  clear() {
    this.setState(() => {
      return {rollLog: [], currentRoll: '', totalRoll: 0, sumRoll: 0};
    })
  }

//dice img
  getDiceImage(dice) {
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
              <button id="d4" title="D4" onClick={() =>
                  this.setState({dice: dFour, diceImg:d4})}>
              </button>
             </div>
            <div>
              <button id="d6" title="D6" onClick={() =>
                  this.setState({dice: dSix, diceImg:d6})}>
              </button>
             </div>
            <div>
              <button id="d8" title="D8" onClick={() =>
                  this.setState({dice: dEight, diceImg:d8})}>
               </button>
             </div>
            <div>
              <button id="d10" title="D10" onClick={() =>
                  this.setState({dice: dTen, diceImg:d10})}>
              </button>
             </div>
            <div>
              <button id="d12" title="D12" onClick={() =>
                  this.setState({dice: dTwelve, diceImg:d12})}>
              </button>
             </div>
            <div>
              <button id="d20" title="D20" onClick={() =>
                  this.setState({dice: dTwenty, diceImg:d20})}>
              </button>
             </div>
            <div>
              <button id="d100" title="D100" onClick={() =>
                  this.setState({dice: dHundred, diceImg:d100})}>
              </button>
             </div>
           </div>
          <div>
            <div>
              <button id="rollbtn" title="Roll" className="roll" onClick={() =>
                  this.roll(dice)}>Roll
              </button>
            </div>
                
            <div>
           <div id="radioBox"><label >Modifiers</label><br/>
             
           <label> <input type="radio" name="plus" id="plusFive" title="+5"  value="+5"></input> +5</label> 
           <label> <input type="radio" name="plus" id="minusFive" title="-5"  value="-5"></input>-5</label>
           <label><br/>
           <input type="radio" name="plus" id="plusTwo" title="+2" value="+2"></input> +2</label>
           <label>
             <input type="radio" name="plus" id="minusTwo" value="-2"></input> -2</label>
             <label><br/>
             <input type="radio" name="plus" id="plusOne" title="+1" value="+1"></input> +1</label>
             <label>
           <input type="radio" name="plus" id="minusOne" title="-1" value="-1"></input>-1</label>
             <label><br/>
             <input type="radio" name="plus" id="zero" title="0"  value="0" defaultChecked></input>0</label>
             
             
      
             <br/>
           
           </div>
              <button id="advan" title="Advantage" onClick={() =>
              this.advRoll(dice)}>Advantage</button>
              <button id="disadvan" title="Disadvantage" onClick={() =>
              this.disRoll(dice)}>Disadvantage</button>
            </div>
            <div>
              <button id="clearbtn" title="Clear" className="clear" onClick={() =>
                  this.clear(rollLog)}>clear
              </button>
           </div>
          </div>
           <div className="box" id="rollBox">
            <h1 id="sumRoll" title="Total" alt="Total Of Rolls">{sumRoll} </h1>
            <h1 id="rollDisplay" title="Current Roll" >{currentRoll} </h1>
          

            <ul id="rollRecord" title="Rolls Made" className="container">
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
