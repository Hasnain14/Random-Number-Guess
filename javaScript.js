//start event
const startButton = document.getElementById("start-Button");
startButton.addEventListener('click', function(){
    const startArea = document.getElementById("start-Area");
    startArea.style.display = "none";

    const inputSection = document.getElementById("input-Area");
    inputSection.style.display="block";

})

//random value generate
let randValue = Math.floor(Math.random()*100);

//counter set
let counterSet = 20;

//submit event
const submitButton = document.getElementById("submit-Button");
submitButton.addEventListener('click',function(){
    const yourNumber = parseFloat(document.getElementById("your-number").value);
    if (yourNumber>randValue) {
        document.getElementById("second-heading").innerText = "your guess is higher !!";
    } else if(yourNumber==randValue){
        document.getElementById("input-Area").style.display="none";

        showScore(counterSet);
    } else{
        document.getElementById("second-heading").innerText = "your guess is lower !!";
    }
    

    if (counterSet == 1) {
        counterSet--;
        document.getElementById("input-Area").style.display="none";

        showScore(counterSet);

    } else {
        counterSet--;

        document.getElementById("counter-set").innerText = counterSet;
    
        document.getElementById("your-number").value = "";
    }
})

//score event
function showScore(counterSet){
    document.getElementById("score-area").style.display="block";

    document.getElementById("score-show").innerText = counterSet;
}