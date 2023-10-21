const pen = document.getElementById("pen");
let ispenActive = false;




function onPenClick(){
    pen.classList.toggle("active");
    ispenActive = !ispenActive;

    if(ispenActive){
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown",onMouseDown);
    }
    else{
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown", onMouseDown);
    }
}

pen.addEventListener("click",onPenClick);