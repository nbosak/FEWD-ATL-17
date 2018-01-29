// JavaScript Document

$("form").on("submit_btn", function(e){
	
	e.preventDefault);
	
	var city = $('#city-type').val();
	
	$("img").attr("#update");
	
	$("#update").html(findCity(update));
	
});


// Take the value of the string or different name of string
// Remove the image from the body
// Add the image that is associated with string
// I understand .att can be used on a button but I am not sure how to use it here

function findCity(city) {
	if (string = "New York" || "New York City" || "NYC"){
		$('body').removeClass(img src=url(../images/citipix_skyline.jpg));
		$('body').addClass(img src="images/nyc.jpg" alt="NYC"); 
	}else if(string = "San Francisco" || "SF" || "Bay Area"){
		$('body').removeClass$('body').removeClass(img src=url(../images/citipix_skyline.jpg));
		$('body').addClass(img src="images/sf.jpg)" alt="SF"); 
	}else if(string = "Los Angeles" || "LA" || "LAX"){
		$('body').removeClass(img src=url(../images/citipix_skyline.jpg));
		$('body').addClass(img src="images/la.jpg" alt="LA"); 
	}else if(string = "Austin" || "ATX"){
		$('body').removeClass(img src=url(../images/citipix_skyline.jpg));
		$('body').addClass(img src="images/austin.jpg" alt="Austin"); 
	}else(string = "Sydney" || "SYD"){
		$('body').removeClass(img src=url(../images/citipix_skyline.jpg));
		$('body').addClass(img src="images/sydney.jpg" alt="Sydney"); 
	}
}