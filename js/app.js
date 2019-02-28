$(function() {
  var viewImg = $("#Viewer");
  $("#work").on("click", "img", function() {
  	var hd_img = this.src.replace(".jpg", "_hd.jpg");
  	viewImg.attr("src", hd_img);
  });
  $('.menu').onePageNav();

  var top = $(".header").next().height()
	$(".header").affix({
	  offset:{ 
	  	top: top, 
	  	bottom: -100 
	  }
	});

  $(".button").on("click", "a", function(){
    var topPos = $("#work").offset().top;
    $('html, body').animate({
        scrollTop: topPos
    }, 750)
    return false;
  });
});
