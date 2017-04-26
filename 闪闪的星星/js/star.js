/**
 * Created by liuwei on 2017/4/23.
 */
//定义一个类，用来绘制很多星星
var starObj=function(){
    this.x;
    this.y;
    this.picNo;
    this.timer;
    this.xSpd;
    this.ySpd;
};


starObj.prototype.init=function(){
    this.picNo=Math.floor(Math.random()*7);
    this.x=Math.random()*girlWidth+padLeft;
    this.y=Math.random()*girlHeight+padTop;
    this.timer=0;
    this.xSpd=Math.random()*3-1.5;
    this.ySpd=Math.random()*3-1.5;
};
starObj.prototype.update=function(){
    this.timer+=deltaTime;
    if(this.timer>50){
        this.picNo+=1;
        this.picNo%=7;
        this.timer=0;
    }
    this.x+=this.xSpd*deltaTime*0.003;
    this.y+=this.ySpd*deltaTime*0.003;
    if(this.x<150||this.x>650){
        this.init();
        return;
    }
    if(this.y<50||this.y>350){
        this.init();
        return;
    }
};
starObj.prototype.draw=function(){
    //save and restore 的作用是只改变这中间的效果
    ctx.save();
    ctx.globalAlpha=life;    //星星的透明度
    ctx.drawImage(starImg,this.picNo*7,0,7,7,this.x,this.y,7,7);
    ctx.restore();
};
function drawStars(){
    for(var i=0;i<num;i++){
        stars[i].update();
        stars[i].draw();
    }
}
function aliveUpdate(){
    if(switchy){
    //show star
        life+=0.03*deltaTime*0.05;
        if(life>1){
            life=1;
        }
    }else{
        //hide star
        life-=0.03*deltaTime*0.05;
        if(life<0){
            life=0;
        }
    }
}
