$(function(){
	$(".sections .api-index").eq(0).show(1000);

	$(".xia>a").click(function(e){
		var xia = $(this).closest(".xia");
		if(!$(this).is(".full-screen .xia>a")){
			xia.toggleClass("shang").find("ul").slideToggle("slow");
		}
	})
	$(".api-list a").click(function(){
		$(".api-list .active").removeClass("active");
		$(this).addClass("active");
	});
	$(".sections h2").click(function(){
		$(this).next(".api-index").slideToggle("slow");
	});

	//全屏
	$(".util li.layout a").click(function(){
		if($("body").hasClass("full-screen")){
			$("body").removeClass("full-screen");
			$(this).text("Full Screen");
			$(this).attr("title","全屏显示");
			$(".sections .api-index").slideUp("slow");
		}else{
			$("body").addClass("full-screen");
			$(this).text("Normal");
			$(this).attr("title","正常显示");
			$(".sections .api-index").slideDown("slow");
		}
	});
})