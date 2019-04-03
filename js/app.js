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
                App.timerHandle += 1;
                App.hungerIncrement(); 
                App.boredomIncrement(); 
                App.sleepinessIncrement(); 
                App.deathFunction();
                console.log(App.petInstance)
            }, 300);
            if (this.petInstance.isAlive = false){
            	clearInterval(deathFunction());
            }
        },
        ageIncrement: function() {
            if (this.timerHandle % 10 === 0) {  //this
                // console.log(this.petInstance.age);
                this.petInstance.age +=1;
            }
        },
        hungerIncrement: function() {
            if (this.timerHandle % 3 === 0) { //this
                // console.log(this.petInstance.hunger);
                this.petInstance.hunger +=1;
            }
        },
        boredomIncrement: function() {  //this
            if (this.timerHandle % 5 === 0) {
                // console.log(this.petInstance.boredom);
                this.petInstance.boredom +=1;
            }
        },
        sleepinessIncrement: function() {
            if (this.timerHandle % 7 === 0) {
                // console.log(this.petInstance.sleepiness);
                this.petInstance.sleepiness +=1;
            }
        },
        deathFunction: function() {
                if (this.petInstance.hunger >= 10 || this.petInstance.boredom >= 10 || this.petInstance.sleepiness >= 10) {
                    // this.petInstance = null;
                    console.log('GAME OVER YOU LET YOUR PET DIE!');
                    this.isAlive === false;
                }


//Listeners / Handlers
$("#feed").on('click', (e) => {
    console.log('feed button was clicked');
    App.petInstance.hunger -= 1;
    // console.log(`Hunger is now: ${App.petInstance.hunger}`);
});

$("#toggleLights").on('click', (e) => {
    console.log('toggleLights button was clicked');
    App.petInstance.sleepiness -=1; //
    $("#screenContainer").css("backgroundColor", 'rgba(0,0,0,.7)');
    App.toggleLights === false; //===
    if (App.toggleLights === false) { //===
        App.toggleLights = true; //=
        // App.petInstance.sleepiness -= 1;
    } else {
       App.toggleLights = true; //false
       $("#screenContainer").css("backgroundColor", 'rgba(0,0,0,1)');
    }

});

$("#play").on('click', (e) => {
    console.log('play button was clicked');
    App.petInstance.boredom -= 1;
    // console.log(`Boredom is now: ${App.petInstance.boredom}`);
})
}}

$('#nameButton').on('click', () => {
	const petName = $('#nameBox').val();
	console.log(`${petName} IS ALIVE!! BE RESPONSIBLE!!`);
	App.playGame();
});

$('#boredomeOutput').change(function(){
	const boredOutput = $('#boredOutput').val();
	("#boredOutput").append(`${boredOutput.val()}`);
})





