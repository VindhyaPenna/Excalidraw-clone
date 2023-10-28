const canvas = document.getElementById("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
c.lineWidth = 2;
let initialPosition = null;
const history = [];
let historyIndex = -1;
let startIndex = history.length-1;
 
