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
			App.petInstance.age ++;
			App.hungerIncrement();
			console.log(App.petInstance.hunger);
			console.log(App.timerHandle);
			App.timerHandle += 1;
		}, 1000);
	},
	hungerIncrement: function(){	
		if (this.timerHandle % 3 === 0){
			console.log(this.petInstance.hunger);
			this.petInstance.hunger ++;
			} if (this.timerHandle %5 === 0){
				console.log(this.petInstance.boredom);
				this.petInstance.boredom ++;
			}
		},

}




	//petInstance.hunger increment w/ timer at x seconds
	//petInstance.boredom: increment w/ timer at x seconds
	//petInstance.sleepiness increment w/ timer at x seconds
	//petInstance.age: increment w/ timer at x seconds



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










