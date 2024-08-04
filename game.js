let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let ngame=document.querySelector(".new")
let msgcont=document.querySelector(".msg_container")
let msg=document.querySelector(".msg")
let click=0;
let turn=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button is clicked")
        if(turn){
            box.innerText="O"
            turn=false;
            click++;
        }
        else{
            box.innerText="X"
            turn=true;
            click++;
        }
        box.disabled=true;
        checkwinner();
        
    })
})
const resetgame=()=>{
    turn=true;
    boxesenable();
    msgcont.classList.add("hide")
    click=0;

}
const showwinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`
    msgcont.classList.remove("hide")
    boxesdisable();
}
const gamedraw=()=>{
    msg.innerText="IT'S A DRAW  ";
    msgcont.classList.remove("hide")
    
}
const boxesdisable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const boxesenable=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
}
const checkwinner=()=>{
    for(let pattern of winpattern){
    //     console.log(pattern[0],pattern[1],pattern[2])
    //    console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
       if(pos1!=""&&pos2!=""&pos3!=""){
           if(pos1===pos2&&pos2===pos3){
               console.log("winner")
               showwinner(pos1);
            //    turn=false;
                return
            }
            else {
                if(click===9){
                console.log("draw")
                // turn=true;
                gamedraw();
                }
            }
        }
    }
} 
reset.addEventListener("click",resetgame)
ngame.addEventListener("click",resetgame)