import React from "react";
import { ReactDOM } from "react-dom";
import './src/App.css';

//establish die paramenters
const die= [
  {},
  {},

]
const dFour = [1, 2 , 3 ,4];
const dSix = [1, 2, 3, 4, 5, 6];
const dEight = [1, 2, 3, 4, 5, 6, 7, 8];
const dTen = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
const dTwelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const dTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 19, 20];

class Roller extends React.component

constructor(props) {
	super(props);

	this.state ={
		dice:'',
		currentRoll: ''
	};
	this.playSound = this.playSound.bind.this;
	this.onPress = this.onPress.bind.this;
};


//random roll withing die parameters

roll(dice){
	return dice[Math.floor((Math.random()*dice.length))];

};
//html button to initiate roll 

//radio buttons to select die


//reulting roll display


function App() {
  return (
   <div>
     <button onclick={() =>
        this.setState(dice.dFour)}>Select Die</button>
      <button onclick={() =>
        this.setState(dice.dSix)}>Select Die</button>
      <button onclick={() =>
        this.setState(dice.dEight)}>Select Die</button>
      <button onclick={() =>
        this.setState(dice.dTen)}>Select Die</button>
      <button onclick={() =>
        this.setState(dice.dTwelve)}>Select Die</button>
      <button onclick={() =>
        this.setState(dice.dTwenty)}>Select Die</button>
   </div>
  );
}

export default App;
