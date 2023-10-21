const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const c = canvas.getContext("2d");

let prevPosition = null;

function onMouseDown(event){
    
    prevPosition = [event.offsetX,event.offsetY];console.log(prevPosition)
    c.strokeStyle = "black";
    c.lineWidth  = 2;
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mouseup",onMouseUp);
}

function onMouseMove(e){
    
    let currentPosition = [e.offsetX, e.offsetY];
    console.log(currentPosition);
    c.beginPath();
    c.moveTo(...prevPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();

    prevPosition = currentPosition;
}

function onMouseUp(event){
    canvas.removeEventListener("mousemove",onMouseMove);
}