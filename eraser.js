

const eraser = document.getElementById("eraser");
let isEraseActive = false;

eraser.addEventListener("click",()=>{
    sidebar.classList.add("hide");

    eraser.classList.add("active");
    isEraseActive = !isEraseActive;
    ispenActive = false;
    isLineActive = false;
    isRectActive = false;
    isCircleActive = false;

    pen.classList.remove("active");
    line.classList.remove("active");
    circle.classList.remove("active");
    rectbtn.classList.remove("active");


    if(isEraseActive |(!ispenActive & !isRectActive & !isCircleActive & !isLineActive)){
        canvas.removeEventListener("mousedown",onMouseDown);
        canvas.removeEventListener("mousedown",onRectDown);
        canvas.removeEventListener("mousedown",onCircDown);
        canvas.removeEventListener("mousedown",onLineDown);

        canvas.style.cursor = "auto";


        canvas.addEventListener("mousedown",onEraseDown);
    }
    else if(!isEraseActive |(ispenActive | isRectActive | isCircleActive |isLineActive)){
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown",onEraseDown);
    }
})

function onEraseDown(e){
    initialPosition = {x:e.clientX,y:e.clientY};
    startIndex = history.length-1;
    console.log("hi down");
    canvas.addEventListener("mousemove",onEraseMove);
    canvas.addEventListener("mouseup",onEraseUp);
}

function onEraseMove(e){
  const currentPosition = {x:e.clientX,y:e.clientY};
  console.log("hi move");
//   let width = currentPosition.x-initialPosition.x;
//   let height = currentPosition.y-initialPosition.y;
  c.clearRect(currentPosition.x,currentPosition.y,100,100);
//   c.closePath();
}

function onEraseUp(){
    history.push(c.getImageData(0,0,canvas.width,canvas.height));
    historyIndex++;
// resetToOriginalImage();
console.log("hi up");
    canvas.removeEventListener("mousemove",onEraseMove);
    canvas.removeEventListener("mouseup",onEraseUp);
}