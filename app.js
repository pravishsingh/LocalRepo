let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
};
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
};
function levelUp() {
    userSeq = [] // set user sequence to empty value bcsz it again repeat the same pattern in next level
    level++;
    h2.innerText = `Level ${level}`;

    // Random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor)
    gameFlash(randBtn);
    console.log(gameSeq);
}

function checkAns(idx){
    // console.log("curr level :", level);
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){// here same index come when call the function
        // console.log("same value ");
        if(userSeq.length == gameSeq.length){
         setTimeout(levelUp,1000);
        }
    }
    else{
        // h2.innerText=`Game Over! press any key to start ${level}`;
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start the Game` ;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";

        },150);

        reset();
    }
}

function btnPress() {
    // console.log("btn was pressed");
    // console.log(this);//it show which btn was pressed
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

