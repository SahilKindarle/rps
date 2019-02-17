var userScore=0;
var computerScore=0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result_p = document.getElementById("resultp");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice()
{
    const choices = ['r', 'p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}
// console.log(getComputerChoice());


function convertToWord(letter){
    if(letter === "r") return "Rock";
    else if(letter === "p") return "Paper";
    else if(letter === "s") return "Scissors";

}
function win(userChoice, computerChoice)
{
    userScore++;
    console.log("win Executed");
    console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " Beats " +  convertToWord(computerChoice) + smallCompWord+ " You Win";
    document.getElementById(userChoice).classList.add('back-green'); 
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("back-green")
    },300);
}

function lose(userChoice, computerChoice)
{
    computerScore++;
    console.log("Lose Executed");
    console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " Looses " +  convertToWord(computerChoice) + smallCompWord+ " You Lost";
    document.getElementById(userChoice).classList.add('back-red'); 
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("back-red")
    },300);
}

function draw(userChoice, computerChoice)
{
    // userScore++;
    console.log("Draw Executed");
    // console.log(userScore);
    // userScore_span.innerHTML = userScore;
    // computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " Equals " +  convertToWord(computerChoice) + smallCompWord+ " It's a Draw";
    document.getElementById(userChoice).classList.add('back-orange'); 
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("back-orange")
    },300);
}

function game(userChoice)
{
    var computerChoice = getComputerChoice();
    // console.log("Computer Choice " + computerChoice);
    // console.log("User Choice " + userChoice);
    switch(userChoice + computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            // console.log(" User Wins");
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            // console.log("User Lossess");
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            // console.log("Draw");
            break;

    }
}

function main()
{
    rock_div.addEventListener("click", function() {
        game("r");
        console.log("u Clicked on Rock"); 
    })
    
    paper_div.addEventListener("click", function() {
        game("p");
        console.log("u Clicked on Paper"); 
    })
    
    scissors_div.addEventListener("click", function() {
        game("s");
        console.log("u Clicked on Scissors"); 
    })
}

main();