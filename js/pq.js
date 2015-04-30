$(function(){
	$(".sections .api-index").eq(0).show(1000);

	$(".xia>a").click(function(e){
		var xia = $(this).closest(".xia");
		if(!$(this).is(".full-screen .xia>a")){
			if(xia.hasClass("shang")){
				xia.removeClass("shang");
			}else{
				xia.addClass("shang");
			}
		}
		// xia.addClass("shang").find("ul").toggle(xia.hasClass("shang"),3000);
	})
	$(".api-list a").click(function(){
		$(".api-list .active").removeClass("active");
		$(this).addClass("active");
	});
	$(".sections h2").click(function(){
		$(this).next(".api-index").toggle("slow");
	});

	//全屏
	$(".util li.layout a").click(function(){
		if($("body").hasClass("full-screen")){
			$("body").removeClass("full-screen");
			$(this).text("Full Screen");
		}else{
			$("body").addClass("full-screen");
			$(this).text("Normal");
		}
	});
})