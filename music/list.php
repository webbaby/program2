<?php

$list=array(

    array('id'=>1,'pid'=>1,'text'=>'小苹果'),
	array('id'=>2,'pid'=>2,'text'=>'蒲公英的约定'),
	array('id'=>3,'pid'=>3,'text'=>'pretty boy'),
	array('id'=>4,'pid'=>3,'text'=>'see you agin'),
	array('id'=>5,'pid'=>2,'text'=>'再见 我的爱人'),
	array('id'=>6,'pid'=>1,'text'=>'不要说再见'),
	array('id'=>7,'pid'=>4,'text'=>'韩语歌')


);
$type=$_GET['type'];  //1 2 3 4
$temp=array();
foreach($list as $key=>$val){
   if($type==$val['pid']){
      $temp[]=$val;
   }
}

echo json_encode($temp);
 

 