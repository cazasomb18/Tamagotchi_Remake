console.log("I'm an elf!");

//make a class which will create a tamagotchi class instance
class Pet {
	constructor(name) {
		this.name = name;
		this.boredom = Math.floor(Math.random()*3)+1;
		this.sleepiness = Math.floor(Math.random()*3)+1;
		this.boredom = Math.floor(Math.random()*3)+1;
		this.age = 0;
		this.lightsOn = true;
		this.isAlive = true;
	}
}

const tamagotchi = new Pet('Klyza'); /*create instance of pet*/





//make and object to put all your stuff into - sleepy, hungry, timer, methods(), etc. 
//don't try to write logic here!  Don't try to write methods in the global scale - too
//hard to rewrite things after declared in the global scale.



const App = {				//my app logic
	petInstance: null,
	playGame: function(){
		
	},
};






	// console.log(Pet.boredom);
	// console.log(Pet.sleepiness);
	// console.log(Pet.boredom);
	// console.log(Pet.age);




































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






















// class Barbarian {
//     constructor(name) {
//         this.name = name;
//         this.hunger = Math.random() * (10 - 1) + 1;
//         this.exhaustion = Math.random() * (10 - 1) + 1;
//         this.rage = 2;
//         this.age = Math.random() * (100 - 1) + 1;

//     }
//     attack() {
//         $('.slime').on('click', (e) => {
//             console.log('clicked!');
//             this.rage = this.rage + 1 ;
            
//         })
//         // this.rage = this.rage + 1;
//         console.log( this.name +  " attacks!!");
        
//         }
//     }

// const game = {
//     currentPlayer: null,
//     start: function() {
//         this.currentPlayer = new Barbarian('Barb');
//         console.log(this.currentPlayer);
//         this.currentPlayer.attack();
        
//     }


// }

// $('#barbarian').on('click', () => {
//     console.log("RAAAAAAGGGGGGEEEEEEEE!!!!!");
// })



// game.start()