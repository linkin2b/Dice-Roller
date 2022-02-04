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



class Roller extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dice: dTwenty, // Sets an initial state
            currentRoll: '',
            rollLog: [],
            diceImg: "../src/imgs/d20.png",
            totalRoll: [] ,
            sumRoll: 69
            };
    };

   
//random roll withing die parameters

    roll(dice) {
        var rolled = dice[Math.floor((Math.random() * dice.length))]

        this.setState(() => {
            return {currentRoll: rolled}
        }); 
        this.setState(() => {
            return {rollLog: [ ...this.state.rollLog, rolled]}; 
          
        });
         console.log(this.state.rollLog, rolled);
        };

//dice multiplier


//totalRoll addition

sumRoll () {
    const { totalRoll } = this.state;
    let sumRoll = 0;

    for( let i = 0; i < totalRoll.length; i++ ) {
       sumRoll += totalRoll[i];
    }

    this.setState(() => {
        return {sumRoll: sumRoll};
    });    
}

//clear roll log

    clear(rollLog) {
        this.setState(() => {
            return {rollLog: [], currentRoll: '', totalRoll: 0};
        })
    }

//dice img
getDiceImage(dice){
    if (this.state.dice === dFour)
    return "../src/imgs/d4.png";
    if (this.state.dice === dSix)
    return "../src/imgs/d6.png";
    if (this.state.dice === dEight)
    return "./src/imgs/d8.png";
    if (this.state.dice === dTen)
    return "./src/imgs/d10.png";
    if (this.state.dice === dTwelve)
    return "./src/imgs/d12.png";    
    if (this.state.dice === dTwenty)
    return "./src/imgs/d20.png";
    if (this.state.dice === dHundred)
    return "./src/imgs/d100.png";
}


//resulting roll display

    render() {
        const {dice, currentRoll, rollLog, sumRoll} = this.state; // You want to destructure dice and currentRoll from state so you can use it in your render method

        return (
            <div>
                <div id="dieTray" onChange={this.handleChange}>
                <div>
                    <button id="d4" onClick={() =>
                        this.setState({dice: dFour, diceImg:"../src/imgs/d4.png"})}>
                    </button>
                </div>
                <div>
                    <button  id="d6" onClick={() =>
                        this.setState({dice: dSix})}>

                    </button>
                </div>
                <div>
                    <button  id="d8" onClick={() =>
                        this.setState({dice: dEight})}>
                    </button>
                </div>
                <div>
                    <button  id="d10" onClick={() =>
                        this.setState({dice: dTen})}>
                    </button>
                </div>
                <div>
                    <button  id="d12" onClick={() =>
                        this.setState({dice: dTwelve})}> 
                    </button>
                </div>
                <div>
                    <button  id="d20" onClick={() =>
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
                    <button  id="rollbtn" class="roll" onClick={() =>
                        this.roll(dice)}>Roll
                    </button>
                </div>
                <div>
                    <button id="clearbtn" class ="clear"onClick={() =>
                        this.clear(rollLog)}>clear
                    </button>
                </div>
                </div>
                <div class="box"> 
               <h1 id="sumRoll" alt="Total Of Rolls">{sumRoll} Total</h1> 
               <h2 id="rollDisplay">{currentRoll}  <br/> Current</h2>

         
                <ul id="rollRecord" class="container">
                    {rollLog.slice(0).reverse().map(i => (
                    <div class=""> 
                    
                   <li id="card">{i}<br/> <img src={this.state.diceImg}></img></li>
                     </div>                   
                  ))}
                </ul>
              
                </div> 
            </div>   
               
        );
    }
}

export default Roller;
