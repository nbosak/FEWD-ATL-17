// JavaScript Document
$(document).ready(function() {
	
	//Select city from drop down and change background-image using cityImage function
	
	$("#submit_btn").change(function(){
		$(this).css("background-image", "cityImage");
	});
	
	//Select city from drop down and .append cityImage to body
	
	$("#submit-btn").click(function(){
		$("body").append("cityImage");
	});
	
	//if else statement to remove the background image from the body and replace by string each city name
	//Adds each new image by city class
	
	function cityImage(string) {
	if (string ="New York City"){
		$('body').removeClass(background: url(../images/citipix_skyline.jpg));
		$('body').addClass('nyc'); 
	}else if(string ="San Francisco"){
		$('body').removeClass(background: url(../images/citipix_skyline.jpg));
		$('body').addClass('sf');
	}else if(string ="Los Angeles"){
		$('body').removeClass(background: url(../images/citipix_skyline.jpg));
		$('body').addClass('la');
	}else if(string ="Austin"){
		$('body').removeClass(background: url(../images/citipix_skyline.jpg));
		$('body').addClass('austin');
	}else(string ="Sydney"){
		$('body').removeClass(background: url(../images/citipix_skyline.jpg));
		$('body').addClass('sydney');
	}
	}
});
	