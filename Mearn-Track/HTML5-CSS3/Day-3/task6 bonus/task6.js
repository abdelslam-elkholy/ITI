var canvas = document.getElementById("drawing-board");
var toolbar = document.getElementById("toolbar");
var ctx = canvas.getContext('2d');

var canvasOffsetX = canvas.offsetLeft;
var canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click',element =>{
    if(element.target.id === 'clear'){
        ctx.clearRect(0,0,canvas.width , canvas.height);
    }
});

toolbar.addEventListener('change',element =>{
    if(element.target.id === 'stroke'){
        ctx.strokeStyle = element.target.value;
    }
    if(element.target.id === 'lineWidth'){
        lineWidth = element.target.value;
    }
});

var draw = (e)=>{
    if(!isPainting){
        return;
    }
    
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX - canvasOffsetX, e.clientY)
        ctx.stroke();
}

canvas.addEventListener('mousedown' , (ele) => {
    isPainting = true;
    startX = ele.clientX;
    startY = ele.clientY;
});

canvas.addEventListener('mouseup' , ele => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove' , draw);


//variable , micsine,nested,inhertinse 




