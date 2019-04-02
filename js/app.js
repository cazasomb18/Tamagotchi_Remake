console.log('CREATE A TAMAGOTCHI!');
console.log("I'm an elf!");

//make a class which will create a tamagotchi class instance
class Pet {
	constructor() {
		this.boredom = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 1;
		this.lightsOn = true;
		this.isAlive = true;
	}
}

const tamagotchi = new Pet();








const updatePet = () => {
	while (Pet.isAlive = true){
		
	}
	// console.log(Pet.boredom);
	// console.log(Pet.sleepiness);
	// console.log(Pet.boredom);
	// console.log(Pet.age);
}


























//make and object to put all your stuff into - sleepy, hungry, timer, methods(), etc. 
//don't try to write logic here!  Don't try to write methods in the global scale - too
//hard to rewrite things after declared in the global scale.


































//Listeners / Handlers
$("#feed").on('click', (e) => {
	console.log('feed button was clicked');
	app.hunger -= 3;
});

$("#turnOffLights").on('click', (e) => {
	console.log('turnOffLights button was clicked');
	app.lightsOn = false;
	app.sleepiness -= 3;
});

$("#play").on('click', (e) => {
	console.log('play button was clicked');
	app.boredom -= 3;
});


