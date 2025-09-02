let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msg = document.querySelector(".hidden")
let turnO = true;
let turnX = false;
let winptr = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8],  
    [0, 4, 8],
    [2, 4, 6]];

 boxes.forEach(box=>{
  box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false;
        turnX =true;
    }else if(turnX){
        box.innerText="X";
        turnX=false;
        turnO =true;
    }
    box.disabled=true;
    checkWinner();
  })
 })

 let checkWinner = ()=>{
    for(pattern of winptr){
        pos0= boxes[pattern[0]];
        pos1= boxes[pattern[1]];
        pos2= boxes[pattern[2]];

        if(pos0.innerText!=""&&pos1.innerText!=""&&pos2.innerText!=""){
            if(pos0.innerText === pos1.innerText && pos1.innerText === pos2.innerText){
                boxes.forEach(box=> box.disabled = true);
                msg.innerText =  `Congrtulation Winner is Player: ${pos1.innerText}`
                msg.classList.remove("hidden");
                pos0.style.backgroundColor="#C8D5B9";             
                pos1.style.backgroundColor="#C8D5B9";              
                pos2.style.backgroundColor="#C8D5B9";              
            }
        }
    }
}
let enablebox = ()=>{
    boxes.forEach(box=>{
        box.disabled=false;
        turnO = true;
        box.innerText="";;
        msg.classList.add("hidden")
        box.style.backgroundColor="";
    });
}

newgame.addEventListener("click",enablebox);
reset.addEventListener("click",enablebox);