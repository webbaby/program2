/**
 * Created by liuwei on 2017/6/13.
 */
$(function(){
    $(".form1").validate({
        rules:{
            username:{
                required:true,
                minlength:2,
                maxlength:10
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6

            }
        },

        messages:{
            username:{
                required:'*必填',
                minlength:'不能少于2个字符!',
                maxlength:'不能大于10个字符!'
            },
            password:{
                required:'*必填',
                minlength:'不能少于六位'
            },
            email:{
                required:'请输入电子邮件',
                email:'请检查邮件格式'
            }

        }
    });
    $('.sbm').bind("click",function(){
        $("input[type!=submit]").val("");
    })
});