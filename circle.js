
const circle = document.getElementById("circle");
isCircleActive = false;


circle.addEventListener("click",()=>{
    isLineActive = false;
    isPenActive = false;
    isRectActive = false;
    isEraseActive = false;

    isCircleActive = !isCircleActive

    circle.classList.add("active");

    eraser.classList.remove("active");
    line.classList.remove("active");
    pen.classList.remove("active");
    rectbtn.classList.remove("active");

    sidebar.classList.remove("hide");



    if(isCircleActive | (!isPenActive & !isLineActive & !isRectActive & !isEraseActive)){

        canvas.removeEventListener("mousedown",onMouseDown);
        canvas.removeEventListener("mousedown",onLineDown);
        canvas.removeEventListener("mousedown",onRectDown);
        canvas.removeEventListener("mousedown",onEraseDown)
        canvas.style.cursor = "crosshair";


        canvas.addEventListener("mousedown",onCircDown)
    }
    else if(!isCircleActive | (ispenActive |isLineActive |isEraseActive | isRectActive)){
        canvas.style.cursor = "auto"
        canvas.removeEventListener("mousedown",onCircDown)
    }
})

function onCircDown(e){
    initialPosition = {x:e.clientX,y:e.clientY};
    startIndex = history.length-1;

    canvas.addEventListener("mousemove",onCircMove);
    canvas.addEventListener("mouseup",onCircUp);
}

function onCircMove(e){
    const currentPosition  = {x:e.clientX,y:e.clientY};
    resetToOriginalImage();
    c.beginPath();
    const radius = Math.sqrt((currentPosition.x-initialPosition.x)**2+(currentPosition.y-initialPosition.y)**2);
    c.arc(initialPosition.x,initialPosition.y,radius,0,2*Math.PI,true);
    c.stroke();
}

function onCircUp(e){
    history.push(c.getImageData(0,0,canvas.width, canvas.height));
    historyIndex++;

    canvas.removeEventListener("mousemove",onCircMove);
    canvas.removeEventListener("mouseup",onCircUp);
}