let startBtn = document.querySelector('#start-btn');
let mainTextH3 = document.querySelector('#main-text');
let playerArea = document.querySelector('#player-area');
let comp1Area = document.querySelector('#comp1-area');
let comp2Area = document.querySelector('#comp2-area');
let comp3Area = document.querySelector('#comp3-area');
let comp1Btn = document.querySelector('#comp1-btn');
let comp2Btn = document.querySelector('#comp2-btn');
let comp3Btn = document.querySelector('#comp3-btn');
let playerBtn = document.querySelector('#player-btn');
let mainText = '';
let position = 0;
startBtn.addEventListener('click',startTimer);


function startTimer(){
    let startTime = 5;
    this.innerHTML = startTime;
    let loop = setInterval(()=>{
        startTime--;
        startBtn.innerHTML = startTime;
        if(startTime === 0){
            clearInterval(loop);
            startBtn.style.display = "none";
           startGame();
        }
    },1000)
}

function startGame(){
   setUpRandomText();
   player1StartTyping();
   comp1StartTyping();
   comp2StartTyping();
   comp3StartTyping();

}

function player1StartTyping(){
    playerArea.focus();
    playerArea.addEventListener('keyup',function(e){
       if(e.code === "Enter"){
            if(playerArea.value.trim() === mainText){
                console.log('pogodak');
                position++;
                playerBtn.className = "btn btn-success form-control";
                playerBtn.innerHTML = "Position: "+position;
            }else{
                playerBtn.className = "btn btn-danger form-control";
                playerBtn.innerHTML = "Wrong typing";
            }
       }
    })
}

function comp1StartTyping(){
    let mainTextArray = mainText.split("");
    let loop = setInterval(()=>{
        if(mainTextArray.length > 0){
            comp1Area.value += mainTextArray.shift();
        }else{
            clearInterval(loop);
            position++;
            comp1Btn.className = "btn btn-success form-control";
            comp1Btn.innerHTML = "Position: "+position;

        }
    },340)
}
function comp2StartTyping(){
    let mainTextArray = mainText.split("");
    let loop = setInterval(()=>{
        if(mainTextArray.length > 0){
            comp2Area.value += mainTextArray.shift();
        }else{
            clearInterval(loop);
            position++;
            comp2Btn.className = "btn btn-success form-control";
            comp2Btn.innerHTML = "Position: "+position;
        }
    },240)
}
function comp3StartTyping(){
    let mainTextArray = mainText.split("");
    let loop = setInterval(()=>{
        if(mainTextArray.length > 0){
            comp3Area.value += mainTextArray.shift();
        }else{
            clearInterval(loop);
            position++;
            comp3Btn.className = "btn btn-success form-control";
            comp3Btn.innerHTML = "Position: "+position;
        }
    },210)
}



function setUpRandomText(){
    let rand = Math.floor(Math.random()*textForTyping.length); // 1
    mainText = textForTyping[rand];
    mainTextH3.innerHTML = mainText;
    mainTextH3.style.display = "block";
}

