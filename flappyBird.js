const cvs = document.getElementById("canvas")
const ctx = cvs.getContext("2d"); 

// create variables

var gap = 75; 
const constant = pipeNorth.height + gap; 

// load images

const bird = new Image(); 
const bg = new Image(); 
const fg = new Image();  
const pipeNorth = new Image(); 
const pipeSouth = new Image();  

bird.src = "";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";


// draw images 

function draw(){

    ctx.drawImage(bg, 0, 0); 

    ctx.drawImage(pipeNorth, 100, 0); 
    ctx.drawImage(pipeSouth, 100, 0 + constant)
}

draw(); 



