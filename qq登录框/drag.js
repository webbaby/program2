/**
 * Created by liuwei on 2017/3/16.
 */
//选择状态
window.onload=function(){
    var stateChoose=document.getElementById("stateChoose");
    var stateA=document.getElementById("stateA");
    var oUl=document.getElementById("ul2");
    var oLi=stateChoose.getElementsByTagName("li");
    stateChoose.onclick=function(){
        oUl.style.display="block";
    };
    for(var i=0;i<oLi.length;i++){
        oLi[i].onmouseover=function(){
            this.style.background="#678";
        };
        oLi[i].onmouseout=function(){
            this.style.background="#fff";
        };
        oLi[i].onclick=function(e){
            e=event||window.event;
            if(e.stopPropagation)
                e.stopPropagation();
            else e.cancelBubble=true;
            oUl.style.display="none";
            stateA.innerHTML=this.innerHTML;

        }
    }
//拖拽登录框
    var oDiv=document.getElementById('content');
    var oTitle=oDiv.getElementsByTagName('header')[0];
    setDrag();

    function setDrag(){
        oTitle.onmousedown=function(ev){
            var oEvent=ev||event;
            var disX=oEvent.clientX-oDiv.offsetLeft ;
            var disY=oEvent.clientY-oDiv.offsetTop ;
            document.onmousemove=function(ev){
                var oEvent=ev||event;
                oDiv.style.left=oEvent.clientX-disX+'px';
                oDiv.style.top=oEvent.clientY-disY-'200'+'px';
                oDiv.style.position='absolute';

            };
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
            };
            return false;
        };
    }


};


