/**
 * Created by lenovo on 2018/8/31.
 */
$(document).ready(function(){
   //房源甄选收藏效果
    var flag="true";
    $(".ul3-i2").click(function(){
        if(flag=="true"){
            $(this).css("background-position","-147px -105px");
            flag="false";
        }
        else if(flag=="false"){
            $(this).css("background-position","-147px -123px");
            flag="true";
        }
    });
    //图片悬停放大效果
    $(".ul3-i1").mouseover(function(){
        $(this).animate({backgroundSize:'105%'},"slow");
    }).mouseout(function(){
        $(this).animate({backgroundSize:'100%'},"slow");
    });
    $(".ri-footer").mouseover(function(){
        $(this).animate({backgroundSize:'105%'},"fast");
    }).mouseout(function(){
        $(this).animate({backgroundSize:'100%'},"fast");
    });
    //主体内容div3 header效果
    $("ul.header-top-ul1 li a").mouseover(function(){
        $(this).parent("li").attr("id","border-top-blue").siblings("li").attr("id","");
    });
});