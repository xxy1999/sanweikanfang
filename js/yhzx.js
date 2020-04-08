/**
 * Created by lenovo on 2018/9/11.
 */
$(document).ready(function(){
    //我的首页
    var news_li=$(".wdsy-ul li");
    news_li.click(function(){
        $(this).css("color","#6699ff").siblings("li").css("color","#000000");
    });
    //编辑资料
    var mes_li=$(".bjzl-ul li");
    var ch=$(".ch");
    mes_li.click(function(){
        $(this).css("color","#6699ff").siblings("li").css("color","#000000");
        ch.eq($(this).index()).show().siblings(".ch").hide();
    });
    //我的收藏
    var mycollection=$(".wdsc_ul li");
    mycollection.click(function(){
        $(this).css("color","#6699ff").siblings("li").css("color","#000000");
    });
	//我的订单
    var mycollection=$(".wdsc_ul li");
    mycollection.click(function(){
        $(this).css("color","#6699ff").siblings("li").css("color","#000000");
    });

    //内容切换
    var left_li=$(".left3-ul li");
    var right_li=$(".div-li");
    left_li.click(function(){
        $(this).attr("id","add-bg").siblings("li").attr("id","");
        right_li.eq($(this).index()).show().siblings(".div-li").hide();
    });
});