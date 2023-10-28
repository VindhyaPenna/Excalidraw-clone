
const undo = document.getElementById("undo");
const redo = document.getElementById("redo");
let val ;
let redoarr = [];
let redoarr1 = [];

undo.addEventListener("click",()=>{
    
    if(history.length>0){
        console.log(history,"beforeundo");
        if(history.length!=1){
            val = history[history.length-2];
            c.putImageData(val,0,0);
            redoarr.push(history.pop());
        }
        else{
            c.clearRect(0,0,canvas.width,canvas.height);
            redoarr1.push(history.pop());
            console.log("hi in else of undo");
        }
    }
    else{
        return;
    }console.log(history,"afterundo");
})

redo.addEventListener("click",()=>{
   
    if(redoarr.length>0 | redoarr1.length>0){
        if(history.length==0 & redoarr1.length>0){
            c.putImageData(redoarr1[redoarr1.length-1],0,0);
            history.push(redoarr1.pop());
        }
        else if(val == history[history.length-1] & redoarr.length>0){
            c.putImageData(redoarr[redoarr.length-1],0,0);
            history.push(redoarr.pop());
            val = history[history.length-1];
        }
        else{
            redoarr = [];
            redoarr1 = [];
        } console.log(redoarr,redoarr1);
}
})