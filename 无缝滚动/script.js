/**
 * Created by liuwei on 2017/3/2.
 */
window.onload=function () {
    oDiv=document.getElementById('roll');
    oUl=oDiv.getElementsByTagName ('ul')[0];
    oLi=oUl.getElementsByTagName('li');
    var timer=null;
    var a=-5;
    var oBtn1=oDiv .getElementsByClassName('button-left')[0];
    var oBtn2=oDiv .getElementsByClassName('button-right')[0];
    oUl.style.width=oLi[0].offsetWidth*oLi.length+'px';
    timer=setInterval(function(){
        oUl.style.left=oUl.offsetLeft+a+'px';
        if(oUl.offsetLeft<-oUl.offsetWidth/2){
            oUl.style.left=0;
        }
        else if (oUl.offsetLeft>0){
            oUl.style.left=-oUl .offsetWidth /2+'px';
        };
    },30);
    oUl.onmouseover =function(){
        clearInterval (timer);
    };
    oUl.onmouseout=function (){
        timer=setInterval(function(){
            oUl.style.left=oUl.offsetLeft+a+'px';
            if(oUl.offsetLeft<-oUl.offsetWidth/2){
                oUl.style.left=0;
            }
            else if (oUl.offsetLeft>0){
                oUl.style.left=-oUl .offsetWidth /2+'px';
            };
        },30);
    };
    oBtn1.onclick=function(){
        a=-5;
    };
    oBtn2.onclick=function(){
        a=5;
    };

}