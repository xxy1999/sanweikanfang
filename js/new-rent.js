/**
 * Created by Administrator on 2018/8/30.
 */
$(document).ready(function(){
    // 条件筛选div5
    //区域与地铁找房切换
    var p1=$(".div5-p1");
    var p2=$(".div5-p2");
    var tr1=$(".tr-hide1");
    var tr2=$(".tr-hide2");
    p1.click(function(){
        tr1.attr("class","tr-hide1");
        tr2.attr("class","tr-hiden tr-hide2");
        p1.css({"background-color":"#6699ff"});
        p2.css("background-color","white");
    });
    p2.click(function(){
        tr1.attr("class","tr-hiden tr-hide1");
        tr2.attr("class","tr-hide2");
        p2.css({"background-color":"#6699ff"});
        p1.css("background-color","white");
    });
    // 表格效果
    var tr=$(".body table tbody tr");
    var foot=$("ul#foot li");
    tr.each(function(index){
        $(this).children("td").click(function(){
            $(this).css("color","#6699ff").siblings("td").css("color","#666666");
            foot.eq(index).css("display","inline-block").children("span").html($(this).html());
            foot.eq(index).children("i").click(function(){
                $(this).parent("li").css("display","none");
                tr.eq(index).children("td:first").addClass("colorBlue").siblings("td").removeClass("colorBlue");
            });
        })
    });
    $("#clear-img").click(function(){//清除所有
        foot.css("display","none");
        tr.each(function(){
            $(this).children("td:first").css("color","#6699ff").siblings("td").css("color","#666666");
        })
    });
    //更多选项
    var more=$("#moreSe");
    var hiden=$(".hiden");
    var flag2="true";
    more.click(function(){
        hiden.slideToggle("fast");
        if(flag2=="true"){
            more.html("收起选项"+"<i></i>");
            $("#moreSe i").css("background",'url("images/sum.png")no-repeat -102px -120px');
            flag2="false";
        }else if(flag2=="false"){
            more.html("更多选项"+"<i></i>");
            $("#moreSe i").css("background",'url("images/sum.png")no-repeat -80px -120px');
            flag2="true";
        }
    });

    //房源列表div6
    $(".header6 ul li").click(function(){
        $(this).attr("id","div6-colorBlue").siblings("li").attr("id"," ");
    });
    var flag="true";
    $("div.store i").click(function(){
        if(flag=="true"){
            $(this).css("background-position","-147px -105px");
            flag="false";
        }
        else if(flag=="false"){
            $(this).css("background-position","-147px -123px");
            flag="true";
        }
    });

    //猜你喜欢div8图片效果
    var img=$(".likeList ul li a");
    img.each(function(){
        $(this).mouseover(function(){
            $(this).animate({backgroundSize:'124%'},"slow")
        }).mouseout(function(){
            $(this).animate({backgroundSize:'120%'},"slow");
        });
    });
});