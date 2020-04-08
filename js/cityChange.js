/**
 * Created by lenovo on 2018/9/2.
 */
$(document).ready(function(){
    //切换城市公用
    var i=$(".city-body i");
    var chooseCity=$(".chooseCity");
    var a=$("ul#cityName li a");
    var showCity=$("span#showCity");
    var flag="true";
    i.click(function(){
        chooseCity.slideToggle();
        if(flag=="true"){
            i.css("background",'url("images/fwcz_icon.png") no-repeat -60px -122px');
            flag="false";
        }else if(flag=="false"){
            i.css("background",'url("images/fwcz_icon.png") no-repeat -40px -122px');
            flag="true";
        }
    });
    a.click(function(){
        showCity.text($(this).text());
        i.css("background",'url("images/fwcz_icon.png") no-repeat -40px -122px');
        chooseCity.slideToggle();
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
});