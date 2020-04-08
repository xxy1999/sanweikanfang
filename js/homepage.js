/**
 * Created by lenovo on 2018/9/2.
 */
$(document).ready(function(){
    //城市切换效果
    var citySelecter=$(".citySelecter p");
    var chooseCity=$(".chooseCity");
    var a=$("#cityName li a");
    var showCity=$(".citySelecter p span");
    var flag="true";
    citySelecter.click(function(){
        if(flag=="true"){
            $(".citySelecter img").attr("src","images/sy-shangla.png");
            flag="false";
        }
        else if(flag=="false"){
            $(".citySelecter img").attr("src","images/sy-xiala.png");
            flag="true";
        }
        chooseCity.slideToggle("slow");
    });
    a.click(function(){
        showCity.text($(this).text());
        $(".citySelecter img").attr("src","images/sy-xiala.png");
        chooseCity.slideToggle();
    });

    //图片悬停放大效果
    $(".newImgs").mouseover(function(){
        $(this).animate({width:'103%'},"fast");
    }).mouseout(function(){
        $(this).animate({width:'101%'},"fast");
    });


    //登录注册脚本
    var login=$("#login");
    var register=$("#register");
    var reg=$("#reg");
    var log=$("#log");
    var logClose=$("#log-close");
    var regClose=$("#reg-close");
    login.click(function(){
        log.css("display","block");
    });
    register.click(function(){
        reg.css("display","block");
    });
    logClose.click(function(){
        log.css("display","none");
    });
    regClose.click(function(){
        reg.css("display","none");
    });
	
	var loginDl=$("#inputDl");
	var ulul=$("#ululul");
	var divdiv=$("#divdiv");
	loginDl.click(function(){
		ulul.css("display","none");
		divdiv.css("display","block");
		log.hide();
		alert("登录成功！");
		
	})
	
});