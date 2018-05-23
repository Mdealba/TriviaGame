$(document).ready(function() { 
    var doneBtn = $('<button>').addClass('done-btn').text('Done');

    var questionSet = [
        {
            question: "What is Pandas real name?",
            options: ["Pedro Sandoval", "Pablo Sandoval", "Paco Taco", "Jose Sanchez"],
            answer: "Pablo Sandoval", 
        },
        {
            question: "How old is Panda, as of May 2, 2018?",
            options: ["31", "29", "33", "38"],
            answer: "31",
        },
        {
            question: "Where was Panda born?",
            options: ["Colombia", "Venezula", "Puerto Rico", "Brazil"],
            answer: "Venezuela",
        },
        {
            question: "What number is Panda?",
            options: ["23", "8", "42", "48"],
            answer: "48",
        },
        {
            question: "What position does Panda Play?",
            options: ["RF", "CF", "3B", "2B"],
            answer: "3B",
        },
        {
            question: "What other team did Panda Play for?",
            options: ["Red Socks", "White Socks", "Dodgers", "Tigers"],
            answer: "Red Socks",
        },
        {
            question: "How may home runs has Panda hit, as of May 2, 2018?",
            options: ["126", "213", "153", "137"],
            answer: "126",
        },
        {
            question: "What World Series did Panda hit 3 home runs in game 1?",
            options: ["2010", "2014", "2012", "2017"],
            answer: "2012",
        },
        {
            question: "How many World Champioships has Panda Won?",
            options: ["4", "1", "6", "3"],
            answer: "3",
        },
        {
            question: "Who is Panda playing for, as of May 2, 2018?",
            options: ["Dogers", "Giants", "Red Socks", "Tigers"],
            answer: "Giants",
        }
        ]

    var userSelection = [];
    var right = 0;
    var wrong = 0;
    var unanswer = 0;    

    questionSet.forEach(function(x){
        userSelection.push(null);
    });

    $('#start-game').on('click', function(){
        $("#start-game").addClass('hide');
        startTimer();
        displayHTML();
       
    });

    $(document).on('click', '.done-btn', function(){
        clearInterval(timer)
        gameOver();
    });

    $(document).on('click', '.option', function(){
        var groupIndex = $(this).attr('data-question');
        var buttonVal = $(this).text();
        $('button[data-question="'+groupIndex+'"]').removeClass('selected');
        $(this).addClass('selected');
        userSelection.splice(groupIndex, 1, buttonVal);
    });

    $(document).on("click", "#reset", function(){
        resetGame();
    });

    function startTimer(){
        var timeRemaining = 100;
        $("#timer-wrap").removeClass('hide');
        timer = setInterval(function(){
            $('#timer').text("");
            timeRemaining--;
            $('#timer').text(timeRemaining);
            if(timeRemaining === 0) {
                clearInterval(timer);
                gameOver();
            }

        }, 1000);
    }

    function displayHTML(){
        $("#game-container").removeClass("hide");
        for (var i = 0; i < questionSet.length; i++){
            var currrentObj = questionSet[i];
            var questionWrap = $('<div>').addClass('q-wrap');
            var questionTitle = $('<h3>').text(currrentObj.question);
            var buttonWrap = $('<div>').addClass('b-wrap');
            for (var j = 0; j < currrentObj.options.length; j++){
                var currentOption = currrentObj.options[j]
                var button = $('<button>');
                button.addClass('option btn btn-primary');
                button.attr('data-index', j);
                button.attr('data-question', i);
                button.text(currentOption);
                $(buttonWrap).append(button);
            }
            $(questionWrap).append(questionTitle, buttonWrap);
            $('#game-questions').append(questionWrap, doneBtn);
        }
}

    function gameOver(){
        $('#game-questions').empty();
        evaluateResults();
        displayResults();
    }

     function evaluateResults(){
        for (var i = 0; i <questionSet.length; i++){
            if (userSelection[i] === null){
                unanswer++;
                wrong++
            }
            else if (userSelection[i] === questionSet[i].answers) {
                right++;
            }
            else {
                wrong++;
            }

        }
    }

    function displayResults(){
        var resultWrap = $("<div>").addClass("results");
        var correctText = $("<h3>").text("Right Answers: " + right);
        var wrongText  = $("<h3>").text("Wrong Answers: " + wrong);
        var unanswerText = $("<h3>").text("Unanswerd: "+ unanswer);
        var resetBtn = $("<button>").attr("id", "reset").addClass("btn reset").text("Start Over");
        $(resultWrap).append(correctText, wrongText, unanswerText, resetBtn);
        $("#game-results").append(resultWrap);
    }

    function resetGame(){
        right = 0;
        wrong = 0;
        unanswer = 0
        userSelection = [];
        questionSet.forEach(function(x){
            userSelection.push(null);
        });

        $("#game-questions, #game-results").empty();
        $("#game-container").addClass("hide");
        $("#timer-wrap").addClass("hide");
        $("#start-game").removeClass("hide");

    }
});