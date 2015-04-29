$(function(){
	$(".sections .api-index").eq(0).show(1000);

	$(".xia>a").click(function(e){
		var xia = $(this).closest(".xia");
		if(xia.hasClass("shang")){
			xia.removeClass("shang").find("ul").hide(1000);
		}else{
			xia.addClass("shang").find("ul").show(1000);
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
	$(".util li a").eq(1).click(function(){
		$("body").addClass("full-screen");
	});
})