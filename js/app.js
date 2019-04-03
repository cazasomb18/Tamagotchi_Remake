console.log("JS UP AND RUNNING");


/*create instance of pet*/
class Pet {
	constructor(name) {
		this.name = name;
		this.hunger = Math.floor(Math.random()*3);
		this.boredom = Math.floor(Math.random()*3);
		this.sleepiness = Math.floor(Math.random()*3);
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
            const tamagotchi = new Pet('Klyza');
            this.petInstance = tamagotchi;
            setInterval(function() {
                console.log(App.petInstance)
                App.hungerIncrement();
                App.boredomIncrement();
                App.sleepinessIncrement();
                App.ageIncrement();
                App.deathFunction();
                App.timerHandle += 1;
            }, 300);
        },
        ageIncrement: function() {
            if (this.timerHandle % 10 === 0) {
                // console.log(this.petInstance.age);
                this.petInstance.age++;
            }
        },
        hungerIncrement: function() {
            if (this.timerHandle % 3 === 0) {
                // console.log(this.petInstance.hunger);
                this.petInstance.hunger++;
            }
        },
        boredomIncrement: function() {
            if (this.timerHandle % 5 === 0) {
                // console.log(this.petInstance.boredom);
                this.petInstance.boredom++;
            }
        },
        sleepinessIncrement: function() {
            if (this.timerHandle % 7 === 0) {
                // console.log(this.petInstance.sleepiness);
                this.petInstance.sleepiness++;
            }
        },
        deathFunction: function() {
                if (this.petInstance.hunger >= 10 || this.petInstance.boredom >= 10 || 
                	this.petInstance.sleepiness >= 10) {
                    this.petInstance = null;
                }


$("#feed").on('click', (e) => {
    console.log('feed button was clicked');
    App.petInstance.hunger -= 1;
    console.log(`Hunger is now: ${App.petInstance.hunger}`);
});

$("#toggleLights").on('click', (e) => {
    console.log('toggleLights button was clicked');
    App.petInstance.sleepiness -=1; //
    $("#screenContainer").css("backgroundColor", 'rgba(0,0,0,.7)');
    App.toggleLights === false; //===
    if (App.toggleLights === false) { //===
        App.toggleLights = true; //=
        App.petInstance.sleepiness -= 1; //-=1
    } else {
       App.toggleLights = true; //false
       $("#screenContainer").css("backgroundColor", 'rgba(0,0,0,1)');
    }

});

$("#play").on('click', (e) => {
    console.log('play button was clicked');
    App.petInstance.boredom -= 1;
    console.log(`Boredom is now: ${App.petInstance.boredom}`);
})
}
}

$('#nameButton').on('click', () => {
	console.log('click works')
	const valueOfInput = $('#nameBox').val();
	console.log(valueOfInput);
	App.playGame();
});


// $('#begin-btn').on('click', () => {
//     const tamaName = $('#input-box').val();
//     $('h2').text(`${tamaName} is ALIVE! Keep it that way!!`); 
//     game.startTimer()
// });


//timer: set interval - within set interval have it do other things:
//will have timer after every time is goes through will call bunch of functions




//Listeners / Handlers




// $("#toggleLights").on(function(e) {
// 	console.log('Lights off!  First handler for .toggle() called.')
// 	App.toggleLights = false;
// 	App.petInstance.sleepiness -= 1;
// 	$("#screenContainer").css('backgroundColor', 'rgba(0,0,0,.6');
// 	console.log(`Lights off! Sleepiness is now ${App.petInstance.sleepiness}`);
// }, function(e) {
// 	console.log('Lights on!  First handler for .toggle() called.')
// 	App.toggleLights = true;
// 	App.petInstance.sleepiness += 1;
// 	$("#screenContainer").css('backgroundColor', 'rgba(0,0,0,1)');
// 	console.log(`Lights on! Sleepiness is now ${App.petInstance.sleepiness}`);
// });