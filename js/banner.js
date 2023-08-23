
$("#ba_left").on('click','li a',function(e){
	e.preventDefault();
	$(this).parent().addClass("show").siblings(".show").removeClass("show");
	$(this).removeClass("in").addClass("col");
	$(this).parent().siblings("li").children().removeClass("col");
	var n=this.innerHTML;
	document.querySelector(".index-s").innerHTML="&gt;"+n;
	var t=$(this).attr('href');
	$(t).addClass("show").siblings("div").removeClass("show");
});
