/**
 * Created by lenovo on 2018/8/31.
 */
$(document).ready(function(){
    //头部字体放大
    $(".header3 ul li a").mouseover(function(){
        $(this).attr("id","boldFont").parent("li").siblings("li").children("a").attr("id","");
    }).mouseout(function(){
        $(this).attr("id","");
        $(".header3 ul li a.c").attr("id","boldFont");
    });

    //单选效果
    var label=$(".fylx");
    label.click(function(){
        $(this).css({"color":"#6699ff","border":"1px solid #6699ff"}).siblings("label").css({"color":"#999999","border":"1px solid #999999"});
    });
});