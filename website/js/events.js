// JavaScript Document

$(document).ready(function(){

//first event
	
$("#april-27").css("backgroundColor","green");
$("#april-27").css("color","white");
$("#april-27").css("fontWeight","bolder");
	
$("#april-27").on("mouseover",function(){
	$("#event-title").html("Animal feed");
	$("#event-msg").html("On April 27 we will visit the animal center in the city of Thessaloniki to feed various animals. Anyone can come with us and carry food with them to feed the animals. Participation is 15 euros.");
	
});
	

	
////
	
$("#april-12").css("backgroundColor","green");
$("#april-12").css("color","white");
$("#april-12").css("fontWeight","bolder");
	
$("#april-12").on("mouseover",function(){
	$("#event-title").html("Zoo visiting");
	$("#event-msg").html("On the 12th of April, we will organize a trip to a new Zoo near our town. We accept applications! A portion of the incomes will be used for the animals of the organization.");
	
});


////
	
$("#march-29").css("backgroundColor","green");
$("#march-29").css("color","white");
$("#march-29").css("fontWeight","bolder");
	
$("#march-29").on("mouseover",function(){
	$("#event-title").html("Open day");
	$("#event-msg").html("On March 29 we will be open for visits to anyone who wishes. You will be able to see all our animals, feed them and play with them. Admission is open to all free of charge.");
	
});

	
});