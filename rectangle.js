

const rectbtn = document.getElementById("rect");
isRectActive = false;


rectbtn.addEventListener("click",()=>{
    console.log("hi");
    isLineActive=false;//making line false
    ispenActive=false;//making pen false
    isCircleActive = false;//making circle false
    isEraseActive = false;

    isRectActive = !isRectActive
    rectbtn.classList.add("active");
    line.classList.remove("active");//removing active fro m
    pen.classList.remove("active");//removing active frompen
    circle.classList.remove("active");
    eraser.classList.remove("active");

    //allowing the sidebar to appear
    sidebar.classList.remove("hide");


    if(isRectActive | (!ispenActive & !isLineActive & !isCircleActive &!isEraseActive)){
        //removing event listeners of others
        canvas.removeEventListener("mousedown",onMouseDown);
        canvas.removeEventListener("mousedown",onLineDown);
        canvas.removeEventListener("mousedown",onCircDown);
        canvas.removeEventListener("mousedown",onEraseDown)
        // canvas.removeEventListener("mouseup",onLineUp);
        canvas.style.cursor = "crosshair";

        //adding my own eventlisteners
        canvas.addEventListener("mousedown",onRectDown);
        // canvas.addEventListener("mouseup",onRectUp);
    }
    else if(!isRectActive | (ispenActive | isLineActive |isCircleActive | isEraseActive)){
        canvas.style.cursor="auto";
        //removing my own event listeners when others are selected or i am inactive
        canvas.removeEventListener("mousedown",onRectDown);
    }
})

function onRectDown(e){
    initialPosition = {x:e.clientX,y:e.clientY};
    startIndex = history.length-1;
    canvas.addEventListener("mousemove",onRectMove);
    canvas.addEventListener("mouseup",onRectUp);
}

function onRectMove(e){
    const currentPosition = {x:e.clientX,y:e.clientY};
    resetToOriginalImage();
    c.beginPath();
    let width = currentPosition.x-initialPosition.x;
    let height = currentPosition.y-initialPosition.y;
    c.strokeRect(initialPosition.x,initialPosition.y,width,height);
}

function onRectUp(e){
    history.push(c.getImageData(0,0,canvas.width,canvas.height));
    historyIndex++;

    canvas.removeEventListener("mousemove",onRectMove);
    canvas.removeEventListener("mouseup",onRectUp);
}












































































// const drawingHistory = [];

// let initialCount,pathCount = 0;
// let point1 ,point2;
// function onRectDown(e){
    
//     // c.strokeStyle = "red";
//     // c.lineWidth = 4;
     
//     // canvas.style.cursor="crosshair"
//     initialCount = pathCount;
//     point1 = [e.clientX,e.clientY];
//     canvas.addEventListener("mousemove",onRectMove);
//     canvas.addEventListener("mouseup",onRectUp)
// }

// function onRectMove(e){
//     point2 = [e.clientX,e.clientY];
// //    c.beginPath();
// //    c.moveTo(...point1);
// console.log(drawingHistory.length);
//    console.log(initialCount, pathCount );
// //     if(initialCount !== pathCount){
// //     console.log(initialCount-1);
// //     c.putImageData((drawingHistory[initialCount-1]),0,0);
// //     pathCount = initialCount;
// // }

 
// //  console.log(typeof(c.getImageData(0,0,canvas.width,canvas.height)));
//  drawingHistory.push(c.getImageData(0,0,canvas.width,canvas.height));
//  pathCount++;

// }

// function onRectUp(e){
//     let width = point2[0] - point1[0];
// let height = point2[1] - point1[1];
//     c.strokeRect(point1[0],point1[1],width,height);
//   canvas.removeEventListener("mousemove",onRectMove);
//   canvas.removeEventListener("mouseup",onRectUp); 
// //   drawingHistory.push(c.getImageData(0,0,canvas.width,canvas.height));
// //   pathCount++;
// }




























































// // function onLineDown(e){
// //     let {clientX:p1x,clientY:p1y} = e;
// //     c.beginPath();
// //     c.moveTo(p1x,p1y);
// //     c.strokeStyle = "red";
// //     c.lineWidth = 8;
// //     canvas.addEventListener("mouseUp",onLineUp);
// // }

// // function onLineUp(e){
// //     let {clientX:p2x,clientY:p2y} = e;
// //     c.lineTo(p2x,p2y);
// //     c.stroke();
// //     c.closePath();
// // }

