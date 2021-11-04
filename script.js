$(document).ready(function () {

// set var to record which question user is on (.progress)
let questNum = 0;

// Set var for how many correct answers user has(.counter)
let correct = 0;

// Storing blank value for answer
let ans;

// questions are in an array, the options are also in an array
const questionArr = [
    {
        title: "What does a tornado warning mean?",
        options: ["That it's the best time to fly a kite", "The conditions are right for a tornado to occur", "A tornado has been spotted by observers or weather radar"],
        correct: "2"
    },
    {
        title: "You're indoors during an earthquake, where should you hide?",
        options: ["Under a sturdy piece of furniture", "Under a load-bearing doorframe", "In a bedroom away from windows"],
        correct: "0"
    },
    {
        title: "You're outside during a tornado, what is your best option?",
        options: ["Run and hide under a bridge", "Get in a car and drive away", "Lay flat in a ditch and protect your head"],
        correct: "2"
    },
    {
        title: "It's a Wednesday night and wouldn't you know it, you've been stabbed. What do you do?",
        options: ["Take out the object as it could lead to infection, call the ambulance, apply pressure, and try to relax", "Leave the object in, call the ambulance, apply pressure, and try to relax", "Check your calendar because you swear that you scheduled this for Thursday"],
        correct: "1"
    },
    {
        title: "OH NO! Your friend broke their arm in two places!",
        options: ["Immobilize the injury, apply ice packs for swelling, treat for shock", "Tell them to stop going to those places", "Get better friends with stronger bones"],
        correct: "0"
    },
    {
        title: "How much water should your emergency kit have?",
        options: ["One gallon per person", "One gallon", "One gallon per person, per day"],
        correct: "2"
    },
    {
        title: "An earthquake hits while you're driving! You should:",
        options: ["Pull over and get away from your car", "Pull over and stay in your car", "Keep driving, earthquakes can't get you if you're moving"],
        correct: "1"
    }]

// Hide the quiz for the splash screen
$(".start").on("click", function () {
    $(".quizWrap").toggleClass("quizWrap quizWrap-show");
    $(".splash").hide();
})

// Display question function
const displayQ = (q) => {
    // Showing quiz progress
    $(".progress").text(questNum + 1);
    // displaying number of questions
    $(".num").text(questionArr.length);
    // Rendering the question text
    $(".question").text(questionArr[q].title);
    // Rendering the options
    $("#option1").text(questionArr[q].options[0])
    $("#option2").text(questionArr[q].options[1])
    $("#option3").text(questionArr[q].options[2])
    // storing answer from the array
    ans = questionArr[q].correct
}
// making sure first question shows up
displayQ(questNum);

// Event listener for submit
$("form").on("submit", function (e) {
    // Stop form from refreshing page
    e.preventDefault()
    // hide submit button
    $(".submit").hide();
    // Show next question button
    $("button.nextQ").show();
    // Check answer
    ansCheck();
    // show score
    $(".scoreNum").text(correct);
})

// Set function to check for answers
function ansCheck() {
    // sets userInput var
    userInput = $("input[name='options']:checked").val();
    if (userInput == ans) {
        // changes imagery
        $(".quizWrap-show").toggleClass("correct");
        $(".body-neutral").toggleClass("body-neutral body-correct");
        // adds to correct count
        correct = correct + 1;
    } else {
        // changes imagery
        $(".quizWrap-show").toggleClass("incorrect");
        $(".body-neutral").toggleClass("body-neutral body-incorrect");
    }
}

// Event listener for "Next question" button
$("button.nextQ").on("click", function () {
    // resets so that no answers are checked for next question
    $("input[name='options']").prop("checked", false);
    // resets all visual styles
    $(".quizWrap-show").removeClass("correct incorrect");
    $(".body-correct").toggleClass("body-neutral body-correct");
    $(".body-incorrect").toggleClass("body-neutral body-incorrect");
    // shows submit button and hides "next question" button
    $(".submit").show();
    $(".nextQ").hide();
    // moves on to the next question number
    questNum = questNum + 1;

    // checking to see if there are more questions
    if (questNum < questionArr.length) {
        // If yes, move on to the next question
        displayQ(questNum)
    } else {
        // If there aren't any more questions, hide quiz and show scoreboard
        $("main.quizWrap-show").toggleClass("quizWrap-show quizWrap");
        $(".board").toggleClass("board-show");
        // show the score
        $(".score").text(correct);
        // Show the "again?" button
        $(".again").toggleClass("again-show");
        // Setting different messages depending on how well user did on the quiz
        if (correct == questionArr.length) {
            $(".message").text("questions correct! Wow, you are prepared for anything!")
        } else if (correct == 0) {
            $(".message").text("questions correct; maybe try again? I won't tell.")
        } else if (correct == 1) {
            $(".message").text("question correct; It's a good start!")
        } else {
            $(".message").text("questions correct! Wonderful!")
        };
    }
})

// If user clicks "again?" button, page will refresh
$("button.again").on("click", function () {
    location.reload();
})

})

    // Extra (to be done with more time)
        // Deliver questions in randomized order
        // Change the radio buttons
        // Add sounds(?)
        // Preload the images somehow?

