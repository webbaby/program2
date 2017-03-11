/**
 * Created by liuwei on 2017/3/11.
 */
window.onload=function(){
    var x=0;
    var oImg=document.getElementById ("img1");
    var aImg=document.getElementsByTagName ('img');
    var oLastImg=oImg;
    var i=0;
    var oLastX=0;
    var iSpeed=0;
    var timer=null;

    for(i=1;i<77;i++){         //图片预加载
        (function(oNewImg){
            var oImg=new Image();
            oImg.onload=function(){
                oNewImg .src=this.src;
            };
            oImg.src='img/miaov ('+i+').jpg';
            oNewImg.style.display='none';
            document.body.appendChild(oNewImg);
        })(document.createElement('img'));
    }
    document.onmousedown=function(ev){

        var oEvent=ev||event;
        disX=oEvent.clientX-x;
        clearInterval(timer);
        document.onmousemove=function(ev) {
            var oEvent = ev || event;
            x = oEvent.clientX - disX;
            document.title = x;
            move();

         //   oImg.src='img/miaov ('+l+').jpg';  这是改变图片链接的方式
            iSpeed=x-oLastX;
            oLastX=x;
            return false;

        };
            document.onmouseup=function(){
              timer=setInterval(function(){
                  x+=iSpeed;
                  if(iSpeed>0){
                      iSpeed--;
                  }
                  if(iSpeed<0){
                      iSpeed++;
                  }
                  if(iSpeed==0){
                      clearInterval(timer);
                  }

                 move();
                },30);
                document.onmousemove=null;
                document.onmouseup=null;

            };
          function move(){
              var l=parseInt(-x/10);    //除10是为了使转动更平滑
              if(l>0){
                  l=l%77;
              }
              else{
                  l=l+(-Math.floor(l/77))*77;
              }

              if(oLastImg !=aImg[l]){
                  oLastImg.style.display='none';
                  aImg[l].style.display='block';
                  oLastImg=aImg[l];
              }
          }
        return false;
    }
};