console.log("JS UP AND RUNNING");


/*create instance of pet*/
class Pet {
	constructor(name) {
		this.name = name;
		this.hunger = 0;
		this.boredom = 0;
		this.sleepiness = 0;
		this.age = 0;
		this.toggleLights = true;
		this.isAlive = true;
		this.secondAvatar = 'images/goku_nimbus.png';
	}
}

const App = {
        timerHandle: 0,
        toggleLights: true,
        petInstance: null,
        playGame: function() {
            const tamagotchi = new Pet($('#nameBox').val());
            this.petInstance = tamagotchi;
            setInterval(function() {
                App.ageIncrement();
                App.hungerIncrement(); 
                App.boredomIncrement(); 
                App.sleepinessIncrement(); 
                App.timerHandle += 1;
                App.deathFunction();
                App.displayName();
                App.displayHunger();
                App.displaySleepiness();
                App.displayAge();
                App.displayBoredom();
                App.morphAvatar();
                console.log(App.petInstance);
            }, 300)
            if (this.petInstance.isAlive = false){
            	clearInterval(deathFunction());
            }
        },
        ageIncrement: function() {
            if (this.timerHandle % 10 === 0) {  //this
                console.log(this.petInstance.age);
                this.petInstance.age += 1;
            }
        },
        hungerIncrement: function() {
            if (this.timerHandle % 3 === 0) { //this
                console.log(this.petInstance.hunger);
                this.petInstance.hunger += 1;
            }
        },
        boredomIncrement: function() {  //this
            if (this.timerHandle % 5 === 0) {
                console.log(this.petInstance.boredom);
                this.petInstance.boredom += 1;
            }
        },
        sleepinessIncrement: function() {
            if (this.timerHandle % 7 === 0) {
                console.log(this.petInstance.sleepiness);
                this.petInstance.sleepiness += 1;
            }
        },
        deathFunction: function() {
                if (this.petInstance.hunger >= 10 || this.petInstance.boredom >= 10 || 
                	this.petInstance.sleepiness >= 10) {
                    this.petInstance = null;
                    this.isAlive === false;
                    this.stopTimer();
                    console.log('GAME OVER YOU LET YOUR PET DIE!');
                }
			},
		displayName: function (){
			const $petName = $('#nameBox').val();
			$('#nameDisplay').text(`${this.petInstance.name}`).val();
			},
		displayHunger: function(){
			$('#hungerOutput').text(`${this.petInstance.hunger}`);
			$('#hungerOutput').val('');
			},
		displaySleepiness: function(){
			$('#sleepinessOutput').text(`${this.petInstance.sleepiness}`);
			$('#sleepinessOutput').val('');
		},
		displayAge: function(){
			$('#ageOutput').text(`${this.petInstance.age}`);
		},
		displayBoredom: function(){
			$('#boredomOutput').text(`${this.petInstance.boredom}`);
			$('#boredomOutput').val('');
		},
		morphAvatar: function (){
			// const $image = $('#image');
			if (this.petInstance.age % 5 === 0){
				let a = Math.random();
				$("#tamagotchiAvatar").css("opacity", `${a}`);
				} else ($("#tamagotchiAvatar").css("opacity", '1'));
			},
		stopTimer: function (){
			const stopCondition = App.playGame(setInterval);
			clearInterval(stopCondition);
		},
	};

//Listeners / Handlers

$("#feed").on('click', (e) => {
    console.log('feed button was clicked');
    App.petInstance.hunger -= 1;
    console.log(`Hunger is now: ${App.petInstance.hunger}`);
});

$("#toggleLights").on('click', (e) => {
            console.log('toggleLights button was clicked');
            App.petInstance.sleepiness -= 1; //
            $("#screenContainer").css("backgroundColor", 'rgba(0,0,0,.7)');
            App.toggleLights === false;
            if (App.toggleLights === false) {
                App.toggleLights = true;
            	$("#screenContainer").css("backgroundColor", 'rgb(0,0,0)');
                App.petInstance.sleepiness -= 1;
            } else {
                App.toggleLights = true;
            }
});

$("#play").on('click', (e) => {
    console.log('play button was clicked');
    App.petInstance.boredom -= 1;
    console.log(`Boredom is now: ${App.petInstance.boredom}`);
})

$('#nameButton').on('click', () => {
	const petName = $('#nameBox').val();
	console.log(`${petName} IS ALIVE!! BE RESPONSIBLE!!`);
	App.playGame();
});







		// // animateAvatar: function (){
		// // 	$("#image").getBoundingClientRect();
		// // 	if (this.petInstance.isAlive || this.petInstance.boredom >= 10 ||
		// // 	 this.petInstance.sleepiness >=10 || this.petInstance.hunger >= 10){
		// // 		App.clearInterval();
		// // 	}
		// },
