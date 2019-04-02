console.log("JS UP AND RUNNING");


/*create instance of pet*/
class Pet {
	constructor(name) {
		this.name = name;
		this.hunger = Math.floor(Math.random()*3);
		this.boredom = Math.floor(Math.random()*3);
		this.sleepiness = Math.floor(Math.random()*3);
		this.age = 0;
		this.lightsOn = true;
		this.isAlive = true;
	}
}

// const tamagotchi = new Pet('kid-Goku');put this in App object and make the input name 
//editable onscreen, and have the button pushed start the game

// console.log(tamagotchi); 



//make an object to put all your stuff into it - sleepy, hungry, timer, methods(), etc. 
//don't try to write logic here!  Don't try to write methods in the global scale - too
//hard to rewrite things after declared in the global scale.



const App = {
	timerHandle: 0,
	lightsOn: true,
	petInstance: null,
	playGame: function(){
		const tamagotchi = new Pet('Klyza');
		this.petInstance = tamagotchi;
		console.log(this.petInstance.age);
		setInterval (function() {
			console.log(App.petInstance)
			App.hungerIncrement();
			App.boredomIncrement();
			App.sleepinessIncrement();
			App.ageIncrement();
			App.timerHandle += 1;
		}, 100);
		this.deathFunction();
		if (this.petInstance.isAlive === false)
		return "GAME OVER!"
	},
	ageIncrement: function(){
		if (this.timerHandle % 10 === 0){
			// console.log(this.petInstance.age);
			this.petInstance.age ++;
		}
	},
	hungerIncrement: function(){	
		if (this.timerHandle % 3 === 0){
			// console.log(this.petInstance.hunger);
			this.petInstance.hunger ++;
		}
	},
	boredomIncrement: function(){
		if (this.timerHandle % 5 === 0){
			// console.log(this.petInstance.boredom);
			this.petInstance.boredom ++;
		}
	},
	sleepinessIncrement: function(){
		if (this.timerHandle % 7 === 0){
			// console.log(this.petInstance.sleepiness);
			this.petInstance.sleepiness ++;
		}
	},
	deathFunction: function(){
		if (this.petInstance.hunger >= 10 || this.petInstance.boredom >= 10 || this.petInstance.sleepiness >=10){
			this.petInstance.isAlive === false;
			console.log(App.petInstance.isAlive);
		}
	}  /*if (App.petInstance.isAlive = false)*/
}



//timer: set interval - within set interval have it do other things:
//will have timer after every time is goes through will call bunch of functions





























//Listeners / Handlers
$("#feed").on('click', (e) => {
	console.log('feed button was clicked');
	App.petInstance.hunger -= 1;
	console.log(`Hunger is now: ${App.petInstance.hunger}`);
});

$("#turnOffLights").on('click', (e) => {
	console.log('turnOffLights button was clicked');
	App.lightsOn = false;
	App.petInstance.sleepiness -= 1;
	// css("backgroundImage") trying to take the opacity down in the background image everytime lights are turned off
	console.log(`Lights off! Sleepiness is now ${App.petInstance.sleepiness}`);
});

$("#play").on('click', (e) => {
	console.log('play button was clicked');
	App.petInstance.boredom -= 1;
	console.log(`Boredom is now: ${App.petInstance.boredom}`);
});

$("")










