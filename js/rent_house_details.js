/**
 * Created by lenovo on 2018/9/18.
 */
$(document).ready(function(){
    // 楼盘主页div5
    var a=$(".div5 ul li a");
    a.each(function(){
        $(this).mouseover(function(){
            $(this).attr("id","colorWhite-bgBlue");
            var otherli=$(this).parent("li").siblings("li");
            otherli.each(function(){
                $(this).children("a").attr("id"," ");
            });
        });
        $(this).mouseout(function(){
            $(this).attr("id"," ");
            $(".div5 ul li a:first").attr("id","colorWhite-bgBlue");
        })
    });
});