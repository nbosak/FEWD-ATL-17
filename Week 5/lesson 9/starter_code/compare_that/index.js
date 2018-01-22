// JavaScript Document
$(document).ready(function () {
	
	"use strict";
	
	$("#submit").click(compare);
	
	function compare () {
		var comparision;
		var a = $("#a").val();
		var b = $("#b").val();
	
		if (a < b) {
			comparision = "<";
		} else if (a > b) { 
			comparision = ">";
		} else if (a === b) {
			comparision = "===";
		} else {
			comparision = "N/A";
		}
		
		$("#comparision").html(comparision);
		
	}
});