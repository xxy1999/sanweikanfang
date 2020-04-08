/**
 * Created by lenovo on 2018/8/31.
 */
$(document).ready(function(){
    //单选点击效果
    var labels=$(".yorn");
    labels.click(function(){
        $(this).css({color:"#6699ff",borderColor:"#6699ff"}).siblings("label").css({color:"#999999",borderColor:"#999999"});
    });

    //房贷与税费切换效果
    var ul1=$("#main3-ul1");
    var ul3=$("#main3-ul3");
    var h2=$(".jsq a");
    var logo3=$(".logo3");
    var leftNum;
    var body3Width;
    var x;
    h2.each(function(index){
        $(this).click(function(){//动画效果
            leftNum=parseInt(logo3.css("left"));
            body3Width=parseInt($(".body3").width());
            x=leftNum/body3Width;
            if(x>0.73&&x<0.76){
                logo3.animate({left:'24.5%'},"slow");
            }else if(x>0.23&&x<0.26){
                logo3.animate({left:'74.5%'},"slow");
            }
            if(index==0){//内容切换
                ul3.show();
                ul1.hide();
            }else if(index==1){
                ul1.show();
                ul3.hide();
            }
        });
    });

    // 税费新房二手房切换
    var liNew=$("li.new");
    var liOld=$("li.old");
    var sel=$(".sel");
    sel.change(function(){
        if(sel.val()=="新房"){
            liNew.show();
            liOld.hide();
        }else if(sel.val()=="二手房"){
            liNew.hide();
            liOld.show();
        }
    });

});