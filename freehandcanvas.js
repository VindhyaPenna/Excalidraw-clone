const pen = document.getElementById("pen");
const midnav = document.getElementById("navmid");
let ispenActive = false;




function onPenClick(){
    // console.log(ispenActive);
    pen.classList.add("active");
    sidebar.classList.toggle("navmidActive")
    midnav.classList.toggle("navmidActive");
    ispenActive = !ispenActive;

    circle.classList.remove("active");
    line.classList.remove("active");
    rectbtn.classList.remove("active");
    eraser.classList.remove("active");
    isLineActive=false;
    isRectActive = false;
    isCircleActive = false;
    isEraseActive = false;

    //allowing sidebar to appear on choosing pen
    sidebar.classList.remove("hide");
    // console.log(isLineActive);
    
    
    if(ispenActive | (!isLineActive & !isRectActive & !isCircleActive & !isEraseActive)){
        //isLineActive=false;

       
        canvas.removeEventListener("mousedown",onRectDown);
        canvas.removeEventListener("mousedown",onEraseDown)
        canvas.removeEventListener("mousedown",onLineDown);
        canvas.removeEventListener("mousedown",onCircDown);
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown",onMouseDown);
    }
    else if(!ispenActive  | (isLineActive | isRectActive |isCircleActive | isEraseActive)){
        console.log("iM IN if else OF pen block");
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown",onMouseDown)
    }
}

pen.addEventListener("click",onPenClick);

let prevPosition = null;

function onMouseDown(e){
   initialPosition = {x:e.clientX,y:e.clientY};
   startIndex = history.length-1;

   canvas.addEventListener("mousemove",onMouseMove);
   canvas.addEventListener("mouseup",onMouseUp);
}

function onMouseMove(e){
   const currentPosition = {x:e.clientX,y:e.clientY};
    c.beginPath();
    c.moveTo(initialPosition.x,initialPosition.y);
    c.lineTo(currentPosition.x,currentPosition.y);
    c.lineCap = "round"
    c.lineJoin = "round"
    c.stroke();
    c.closePath();
    initialPosition = currentPosition;
}

function onMouseUp(){
    console.log("hi");
    history.push(c.getImageData(0,0,canvas.clientWidth,canvas.height));
    historyIndex++;
    canvas.removeEventListener("mousemove",onMouseMove);
    canvas.removeEventListener("mouseup",onMouseUp)
}

