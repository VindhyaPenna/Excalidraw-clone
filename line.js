

let line = document.getElementById("line");
let isLineActive  = false;

function onLineClick(){
  //allowing side bar to appear on clicking this
  sidebar.classList.remove("hide");

  line.classList.add("active");
  isLineActive = !isLineActive;
  isEraseActive = false;
  ispenActive =false;//making pen false
  isRectActive = false;//making rect false
  isCircleActive = false;
  rectbtn.classList.remove("active")//removing active from rect
  pen.classList.remove("active");//removing active from pen
  circle.classList.remove("active");
  eraser.classList.remove("active");

  if(isLineActive |(!ispenActive & !isRectActive & !isCircleActive & !isEraseActive)){
    //removing the eventlisteners of others
      canvas.removeEventListener("mousedown",onRectDown);
      canvas.removeEventListener("mousedown",onCircDown);
      canvas.removeEventListener("mousedown",onEraseDown);
      canvas.removeEventListener("mousedown",onMouseDown);//it means when line is selected or penisnot selected 
      //and rect is not selected we are removing the main event of pen
      
      canvas.style.cursor = "crosshair";
  
      console.log("hi in th if of line");

    //adding my own event listeners
    canvas.addEventListener("mousedown",onLineDown);
  }
  else if(!isLineActive | (ispenActive | isRectActive | isCircleActive | isEraseActive)){
    canvas.style.cursor ="auto";
    canvas.removeEventListener("mousedown",onLineDown);//when line is not selected or pen is selected we are removing the events of my own
  }
}

function resetToOriginalImage(){
  if(startIndex !==-1){
    c.putImageData(history[startIndex],0,0);
  }
  else{
    c.clearRect(0,0,canvas.width ,canvas.height);
  }
}

line.addEventListener("click",onLineClick);


function onLineDown(e){
  initialPosition = {x:e.clientX,y:e.clientY};
  startIndex = history.length-1;
 canvas.addEventListener("mousemove",onLineMove);
 canvas.addEventListener("mouseup",onLineUp);
}

function onLineMove(event){
  const currentPosition = {x:event.clientX,y:event.clientY};
  resetToOriginalImage();
  c.beginPath();
  c.moveTo(initialPosition.x,initialPosition.y);
  c.lineTo(currentPosition.x,currentPosition.y);
  c.stroke();
  c.closePath();
}

function onLineUp(e){
 history.push(c.getImageData(0,0,canvas.width,canvas.height));
 historyIndex++;
 canvas.removeEventListener("mousemove",onLineMove);
 canvas.removeEventListener("mouseup",onLineUp);
}
