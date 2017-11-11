$(document).ready(function(){
	/*自适应*/
	function adjustToFreezeWidth() {
    var windowWidth = $(window).width();

    var viewBoxVal = $("#GDS").getAttribute("viewBox");
    var viewBoxWidth = viewBoxVal.split(",")[2];
    var viewBoxHeight = viewBoxVal.split(",")[3];
    $("#GDS").removeAttribute("width");
    $("#GDS").removeAttribute("height");
    var setWidth = windowWidth;
    var setHeight = (setWidth * viewBoxHeight) / viewBoxWidth;
    $("#GDS").setAttribute("width", setWidth);
    $("#GDS").setAttribute("height", setHeight);
    }
	/*数据回填*/
	$(".province_GD").attr("d",map.province.path);
	for(var i=0;i<map.province.city.length;i++){
	   $(".city_"+i).attr("d",cityPath=map.province.city[i].path);
	}
    /*鼠标移入移出样式改变*/
    $(".colorChange").mouseover(function () {//移入
      $(this).attr({
                    "stroke":"#099",
                    "fill":"#099"
                    });
      $(this).removeAttr("stroke-dasharray");
     });
    $(".colorChange").mouseout(function () {//移出
            $(this).attr({
                            "stroke":"#999",
                            "fill":"transparent"
                        });
      $(this).attr("stroke-dasharray","1,6");
     });

})