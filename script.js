let gameSeq = [];
let userSeq = [];
let level = 0;
let btns = ["blue", "pink", "orange", "purple"];
let isStarted = false;

document.addEventListener("keypress", () => {
    if(isStarted == false){
        isStarted = true;
        
        levelUp();
    }
})

function flashBtn(btn){
    // console.dir(btn);
    btn.classList.add("white");
    setTimeout(() => {
        btn.classList.remove("white");
    }, 300);
}
function flashUserBtn(btn){
    // console.dir(btn);
    btn.classList.add("green");
    setTimeout(() => {
        btn.classList.remove("green");
    }, 150);
}
function levelUp(){
    // console.log("level up");
    userSeq = [];
    level++;
    document.querySelector("h2").innerText = `Level ${level}`;

    let randomidx = Math.floor(Math.random()*4);
    // console.log(randomidx);
    let randombtn = document.querySelector(`.${btns[randomidx]}`);
    
    flashBtn(randombtn);
    gameSeq.push(btns[randomidx]);
    console.log(`gameSeq ${gameSeq}`);
}

function checkAns(level){
    console.log(`curr level ${level}`);
    // let idx = level - 1;
    if(userSeq[level] === gameSeq[level]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        let h2 = document.querySelector("h2");
        h2.innerText = `Game Over !!! Your score is ${level + 1} ...Press any key to restart `;
        reset();
    }
}
function pressbtn(){
    let buttons = document.querySelectorAll(".box");
    buttons.forEach((btn) => {
        btn.addEventListener("click", function(){
            let colorClass = this.getAttribute("id");
            // console.log(colorClass);
            flashUserBtn(this);
            userSeq.push(colorClass);         
            console.log(`userSeq ${userSeq}`);
            checkAns(userSeq.length - 1);
        })
    })
}
pressbtn();

function reset(){
    isStarted = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}