$(document).ready(function(){

	/*自适应*/
	function adjustToFreezeWidth() {
    var viewBoxVal = $(".GDS").getAttribute("viewBox");
    var setWidth = $(window).width();

    var viewBoxWidth = viewBoxVal.split(",")[2];
    var viewBoxHeight = viewBoxVal.split(",")[3];

    var setHeight = (setWidth * viewBoxHeight) / viewBoxWidth;
    $(".GDS").setAttribute("width", setWidth);
    $(".GDS").setAttribute("height", setHeight);
    }

	/*数据回填*/
	$(".province-GD").attr("d",map.province.path);
	for(var i=0;i<map.province.city.length;i++){
	   $(".city-"+i).attr("d",cityPath=map.province.city[i].path);
	}

    /*鼠标移入移出样式改变*/
    $(".colorChange").mouseover(function () {//移入
      $(this).removeClass("stroke-dasharray");
      $(this).css({
                    "stroke":"#099",
                    "fill":"#099"
                    });
     });
    $(".colorChange").mouseout(function () {//移出
            $(this).css({
                            "stroke":"#999",
                            "fill":"transparent",
                            "stroke-dasharray":"1,6"
                        });
     });

})