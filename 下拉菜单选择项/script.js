/**
 * Created by liuwei on 2017/3/17.
 */
window.onload=function(){
    var oSelect=document.getElementById('select');
    var oTitle=document.getElementById('title');
    var oUl=oSelect.getElementsByTagName('ul')[0];
    var oLi=oSelect.getElementsByTagName('li');
    oTitle.onclick=function(event){
        event=event||window.event;   //阻止事件冒泡
        if(event.stopPropagation){
            event.stopPropagation();
        }else if(event.cancelBubble){
            event.cancelBubble=true;
        }
        oUl.style.display='block';
    };
    for(var i=0;i<oLi.length;i++){
        oLi[i].onmouseover=function(){
            this.style.background="#ccc";
        };
        oLi[i].onmouseout=function(){
            this.style.background="#fff";
        };
        oLi[i].onclick=function(){
            oTitle.innerHTML=this.innerHTML;
            oUl.style.display='none';
        }
    }
    document.onclick=function(){
        oUl.style.display='none';
    }
};