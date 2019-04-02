console.log('CREATE A TAMAGOTCHI!');
console.log("I'm an elf!");

//make a class which will create a tamagotchi class instance
class Tamagotchi {
	constructor() {
		// this.boredom = ''; scale of 1-10
		// this.hunger = ''; scale of 1-10
		// this.sleepiness = ''; scale of 1-10

	}
}

































//make and object to put all your stuff into - sleepy, hungry, timer, methods(), etc. 
//don't try to write logic here!  Don't try to write methods in the global scale - too
//hard to rewrite things after declared in the global scale.
const app = {
	update_pet(){
		boredom: "";
		hunger: "";
		sleepiness: "";
	}
}


































//Listeners / Handlers
$("#feed").on('click', (e) => {
	console.log('feed button was clicked');
});

$("#turnOffLights").on('click', (e) => {
	console.log('turnOffLights button was clicked');
});

$("#play").on('click', (e) => {
	console.log('play button was clicked');
});



































