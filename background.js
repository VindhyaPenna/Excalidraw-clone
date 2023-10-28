const canvasBg = document.getElementById("canvas");
const sidebar = document.getElementById("sidebar")

const menubtn = document.getElementById("hamburger-button")
 menubtn.addEventListener("click",(evvent)=>{
    console.log(evvent.target);
    sidebar.classList.add("hide");
})



var btn1 = document.getElementById("colorbtn1").addEventListener("click",onSelecting);
var btn2 = document.getElementById("colorbtn2").addEventListener("click",onSelecting);
var btn3 = document.getElementById("colorbtn3").addEventListener("click",onSelecting);
var btn4 = document.getElementById("colorbtn4").addEventListener("click",onSelecting);
var btn5 = document.getElementById("colorbtn5").addEventListener("click",onSelecting);
var finbtn = document.getElementById("finalBtn")

var selectedColor;
// 



function onSelecting(event){
    selectedColor = event.target.style.backgroundColor;
    finbtn.style.backgroundColor = selectedColor;
    canvasBg.style.backgroundColor = selectedColor;
}