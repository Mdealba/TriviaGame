var questions = [{
    questions: "What is Pandas real name",
    answers: ["Pedro Sandoval", "Pablo Sandoval", "Paco Taco", "Jose Sanchez"],
    correctAnswer: "Pablo Sandoval"
},{
    questions: "How old is Panda, as of May 2, 2018?",
    answers: ["31", "29", "33", "38"],
    correctAnswer: "31"
},{
    questions: "Where was Panda born?",
    answers: ["Colombia", "Venezula", "Puerto Rico", "Brazil"],
    correctAnswer: "Venezuela"
},{
    questions: "What number is Panda?",
    answers: ["23", "8", "42", "48"],
    correctAnswer: "48"
},{
    questions: "What position does Panda Play?",
    answers: ["RF", "CF", "3B", "2B"],
    correctAnswer: "3B"

},{
    questions: "What other team did Panda Play for?",
    answers: ["Red Socks", "White Socks", "Dodgers", "Tigers"],
    correctAnswer: "Red Socks"
},{
    questions: "How may home runs has Panda hit, as of May 2, 2018?",
    answers: ["126", "213", "153", "137"],
    correctAnswer: "126"
},{
    questions: "What World Series did Panda hit 3 home runs in game 1?",
    answers: ["2010", "2014", "2012", "2017"],
    correctAnswer: "2012"
},{
    questions: "How many World Champioships has Panda Won?",
    answers: ["4", "1", "6", "3"],
    correctAnswer: "3"
},{
    questions: "Who is Panda playing for, as of May 2, 2018?",
    answers: ["Dogers", "Giants", "Red Socks", "Tigers"],
    correctAnswer: "Giants"
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
    // startGame: function() {
    //     timer = setInterval(game.countDown, 1000)
    //     if 
    // },
    // done: function() {
        //Do cool stuff here
    // }
}