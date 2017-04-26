/**
 * Created by liuwei on 2017/4/22.
 */

var ctx;
var canvas;
var w;
var h;
var girlImg=new Image();
var padLeft=150;
var padTop=50;
var girlWidth=500;
var girlHeight=300;
var starImg=new Image();
var num=60;
var stars=[];
var lastTime;
var deltaTime;
var switchy=false;//开关变量，控制星星的出现
var life=0;
function init(){
    canvas=document.getElementById('myCanvas');
    ctx=canvas.getContext('2d');
    w=canvas.width;
    h=canvas.height;
    girlImg.src='src/girl.jpg';
    starImg.src='src/star.png';
    document.addEventListener('mousemove',mousemove,false);
    
    //use class
    for(var i=0;i<num;i++){
        var obj=new starObj();
        stars.push(obj);
        stars[i].init();
    }
    drawBg();
    lastTime=Date.now();
    gameLoop();   //不断刷新绘制内容
    
}
 
document.body.onload=init;


function gameLoop(){
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    window.requestAnimationFrame(gameLoop);
    drawBg();
    drawGirl();
    drawStars();
    aliveUpdate();

}
    function drawBg(){
        ctx.fillStyle="#ccc";
        ctx.fillRect(0,0,w,h);
    }
    function drawGirl(){
        ctx.drawImage(girlImg,padLeft,padTop,girlWidth,girlHeight);
    }
  function mousemove(e){
      if(e.offsetX||e.layerX){
          var px=e.offsetX==undefined ? e.layerX:e.offsetX;
          var py=e.offsetY==undefined ? e.layerY : e.offsetY;
      }
      if(px>150&&px<650&&py>50&&py<350){
          switchy=true;
      }else{
          switchy=false;
      }
      
  }

   
