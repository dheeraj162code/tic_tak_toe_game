let boxes = document.querySelectorAll(".box");
let game=document.querySelector(".container")
let reset = document.querySelector("#reset");
let win=document.querySelector(".winner");
let newe=document.querySelector(".newgame");
let turnO = true;
const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.style.color="red";
      box.innerText = "O";
      turnO = false;
    } else {
      box.style.color="blue";
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    chechWinner();
  });
});
const chechWinner = () => {
  for (pattern of winningPattern) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;
    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 == p2 && p2 == p3) {
        disabledb();
        console.log(p1+" is awinner");
        document.querySelector(".h").innerText=`Congratulation!,${p1} is the Winner`;
        game.style.display="none";
        reset.style.display="none";
        document.querySelector(".headd").style.display="none";
        win.style.display="block";
      }
    }
  }
};
let disabledb=()=>{
 for(box of boxes){
    box.disabled=true;
 }
}
let resetgame=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        win.hidden=true;
    }
}
reset.addEventListener("click",resetgame);
newe.addEventListener("click",()=>{
    resetgame();
    game.style.display="block";
    reset.style.display="block";
    document.querySelector(".headd").style.display="block";
})