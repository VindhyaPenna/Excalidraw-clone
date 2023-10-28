
//adding and changing colors as per selected
let strokecolor;

 document.getElementById("strokeColorbtn1").addEventListener("click",onChoosing);
 document.getElementById("strokeColorbtn2").addEventListener("click",onChoosing);
 document.getElementById("strokeColorbtn3").addEventListener("click",onChoosing);
 document.getElementById("strokeColorbtn4").addEventListener("click",onChoosing);
 document.getElementById("strokeColorbtn5").addEventListener("click",onChoosing);

var lastbtn = document.getElementById("strokeColorbtn6");

function onChoosing(event){
    strokecolor = event.target.style.backgroundColor;
    lastbtn.style.backgroundColor = strokecolor;
    c.strokeStyle = strokecolor
    // canvasBg.style.backgroundColor = strokecolor;
}



//adding stroke width as per selected

let strokewidth;

const size1 = document.getElementById("strokeWidthbtn1").addEventListener("click",onFixing);
const size2 = document.getElementById("strokeWidthbtn2").addEventListener("click",onFixing);
const size3 = document.getElementById("strokeWidthbtn3").addEventListener("click",onFixing); 
const size4 = document.getElementById("strokeWidthbtn4").addEventListener("click",onFixing); 
const endBtn = document.getElementById("strokeWidthbtn5"); 
function onFixing(event){
    c.lineWidth= event.target.innerText;
    endBtn.innerText = event.target.innerText;
    // console.log(strokewidth);
}


let opacityRange = document.getElementById("opacityRange");
// console.log(opacityRange);
opacityRange.addEventListener('input', () => {
    
    // console.log(opacityRange.value);
   c.globalAlpha = opacityRange.value;
  });



  const paint = document.getElementById("paint");
  paint.addEventListener("click",()=>{

    if(ispenActive|isRectActive | isLineActive | isCircleActive){
        sidebar.classList.toggle("show");
        paint.classList.toggle("active")
    }
  })