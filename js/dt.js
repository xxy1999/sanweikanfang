/**
 * Created by lenovo on 2018/8/20.
 */
window.onload=function(){
    // 获取元素
    var inputContent=document.getElementsByClassName('in-tex').value;
    var searchBtn=document.getElementsByClassName('in-but');
    var cityName;

    //设置城市
    var a=$("#cityName li a");
    a.click(function(){
        cityName=$("#showCity").text();
        map.setCity(cityName);
    });


    //
    // city.click(function(){
    //     cityName=$("#showCity").html();
    //
    // });


    // //初始化地图对象，加载地图
    // ////初始化加载地图时，若center及level属性缺省，地图默认显示用户当前城市范围
    //
    // //地图中添加地图操作ToolBar插件
    // map.plugin(['AMap.ToolBar'], function() {
    //     //设置地位标记为自定义标记
    //     var toolBar = new AMap.ToolBar();
    //     map.addControl(toolBar);
    // });


    // 搜索

    AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 5,
            pageIndex: 1,
            city: cityName, //城市
            map: map,
            panel: "panel"
        });
        //关键字查询
        searchBtn[0].click=function(){
            placeSearch.search(inputContent[0]);
        }

    });

    //地铁-区域切换
    var btns=$(".area-subway");
    btns.click(function(){
        $(this).attr("id","finding-way").siblings().attr("id","");
    });
};