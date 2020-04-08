/**
 * Created by lenovo on 2018/9/16.
 */

    var URL='121.43.59.5:8080/home/saleroom/list/1026';
    //新房列表信息
    var SRName=$(".hh h3");
    var Address=$(".hh p");
    var area=$("#area");
    var date=$("#date");
    var price=$("#price");
    var houseType=$("#houseType");
//入口函数
function init(){
    var dataList;
    $.ajax({
        type:"get",
        url:URL,
        data:'',
        dataType: "json",
        success: function (){
            if(data.code=="200"){
                SRName=data.SaleRoomName;
                Address=data.address;
                area=data.area;
                date=data.date;
                price=data.price;
            }
        },
        error: function(err){
            console.log(err);
        }
    });
}
$(document).ready(function(){
    init();
});