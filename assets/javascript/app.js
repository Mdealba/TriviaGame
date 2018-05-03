var questions = [{
    question: "Who loves orange soda?",
    answers: ["Bill Clinton", "Yo Mama", "Kel", "Tom from Myspace"],
    correctAnswer: "Kel"
},{
    questions: "What is Pandas real name",
    answers: ["Pedro Sandoval", "Pablo Sandoval", "Paco Taco", "Jose Sanchez"],
    correctAnswer: "Pablo Sandoval"
},{
    questions: "What number is Panda?",
    answers: ["23", "8", "42", "48"],
    correctAnswer: "48"
},
]

// function to set up my game (onclick)

// start game

// create a function for a timer (create the countdown)

// results function (display the losses, wins and questions unanswered)

// calculated results function (will calculate the results)

// capture the value of the radio button
 var timer;
var game = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    counter: 60,

    countDown: function(){
        game.counter--
        if (game.counter === 0){
            game.done()
        }
    },
    startGame: function() {
        timer = setInterval(game.countDown, 1000)
        if 
    },
    done: function() {
        //Do cool shit here
    }
}