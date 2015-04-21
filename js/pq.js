$(function(){
	$(".sections .api-index").eq(0).show(3000);

	$(".xia>a").click(function(e){
		var xia = $(this).closest(".xia");
		if(xia.hasClass("shang")){
			xia.removeClass("shang").find("ul").hide();
		}else{
			xia.addClass("shang").find("ul").show();
		}
	})
	$(".api-list a").click(function(){
		$(".api-list .active").removeClass("active");
		$(this).addClass("active");
	});
	$(".sections h2").click(function(){
		$(this).next(".api-index").toggle("slow");
	});
})