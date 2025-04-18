/* winning pattern -> (0,1,2) , (3,4,5) , (6,7,8) , (0,3,6) , (1,4,7) , (2,5,8) , (0,4,8) , (2,4,6) ->total 8 patterns (here numbers represent box) */

let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO = true; //playerO ,playerX

//1d array
// let arr=["apple","banana","litchi"];

//2d array     
// let arr2=[["apple","litchi"],["potato","mushroom"],["pants","shirts"]];

const winpatterns=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

let count=0; //to track draw

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO==true){ //playerO
            box.innerText="O";
            box.style.color="green";
            turnO=false;


        }else{           //playerX
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        

        box.disabled=true; //so that box disables and its value dont change on click
        
        count++;
        let isWinner=checkWinner();

        if(count===9 && !isWinner){
            //match draw
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    msg.innerText="match is draw";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=> {
    for(let pattern of winpatterns){
        // console.log([pattern[0]],[pattern[1]],[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
                return true;
                
            }
        }

        


    }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);





















































































