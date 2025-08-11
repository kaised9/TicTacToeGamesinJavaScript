let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGameButton=document.querySelector("#newGameButton");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");



let turnO = true;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

box.forEach((b)=> {
    b.addEventListener("click",() =>{
        console.log("Box was Clicked !!!");
        if(turnO){
            b.innerText = "O";
            changeColor();
            turnO = false;
        }
        else{
             b.innerText = "X";
             changeColor();
             turnO = true;
        }

        b.disabled = true;


        checkWinner();
      
    });

});


const checkWinner = () =>{
    for (let pattern of winPatterns){
        
        let pos1Val =  box[pattern[0]].innerText;
        let pos2Val =  box[pattern[1]].innerText;
        let pos3Val =  box[pattern[2]].innerText;
        console.log(pos1Val);
        
        if(pos1Val !="" && (pos2Val !="" && pos3Val!="")){
            console.log("dss");
            if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("Winner !!!",pos1Val);
            displayWinner(pos1Val);
            }
        }
    }
};


const displayWinner = (winner) =>{
    msg.innerText = (`Congratulations !!! \n
        .....Winner is ${winner}.....!!!`);
    msgContainer.classList.remove("hide");
    disabledButton();
};

const changeColor = () => {
  for (let b of box) {
    if (b.innerText === "X") {
      b.style.color = "red";    
    } 
    else if (b.innerText === "O") {
      b.style.color = "blue";   
    } 
    else {
      b.style.color = "white"; 
    }
  }
};


const disabledButton = () =>{
    for (let b of box ){
        b.disabled = true;
    }
};


const enabledButton = () =>{
    for (let b of box ){
        b.disabled = false;
        b.innerText="";
    }

};



const resetGame = () =>{
    turnO=true;
    enabledButton();
    msgContainer.classList.add("hide");  
    msg.innerText = ""
};

newGameButton.addEventListener("click",resetGame);

resetbtn.addEventListener("click",resetGame);

