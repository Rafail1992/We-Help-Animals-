// JavaScript Document
//calender
$(document).ready(function(){
	


//left buttons
$("#left-1").click(function(){
	$("#march").removeClass("d-block");
	$("#march").addClass("d-none");
	$("#july").removeClass("d-none");
	$("#july").addClass("d-block");
});

$("#left-5").click(function(){
	$("#july").removeClass("d-block");
	$("#july").addClass("d-none");
	$("#june").removeClass("d-none");
	$("#june").addClass("d-block");
});

$("#left-4").click(function(){
	$("#june").removeClass("d-block");
	$("#june").addClass("d-none");
	$("#may").removeClass("d-none");
	$("#may").addClass("d-block");
});

$("#left-3").click(function(){
	$("#may").removeClass("d-block");
	$("#may").addClass("d-none");
	$("#april").removeClass("d-none");
	$("#april").addClass("d-block");
});

$("#left-2").click(function(){
	$("#april").removeClass("d-block");
	$("#april").addClass("d-none");
	$("#march").removeClass("d-none");
	$("#march").addClass("d-block");
});


//right buttons

$("#right-1").click(function(){
	$("#march").removeClass("d-block");
	$("#march").addClass("d-none");
	$("#april").removeClass("d-none");
	$("#april").addClass("d-block");
});

$("#right-2").click(function(){
	$("#april").removeClass("d-block");
	$("#april").addClass("d-none");
	$("#may").removeClass("d-none");
	$("#may").addClass("d-block");
});

$("#right-3").click(function(){
	$("#may").removeClass("d-block");
	$("#may").addClass("d-none");
	$("#june").removeClass("d-none");
	$("#june").addClass("d-block");
});

$("#right-4").click(function(){
	$("#june").removeClass("d-block");
	$("#june").addClass("d-none");
	$("#july").removeClass("d-none");
	$("#july").addClass("d-block");
});

$("#right-5").click(function(){
	$("#july").removeClass("d-block");
	$("#july").addClass("d-none");
	$("#march").removeClass("d-none");
	$("#march").addClass("d-block");
});


//find the current day
var day = new Date();
var date = day.getDate();
var month = day.getMonth();

for (var i=1; i<13; i++){
	switch(i){
		case 1:
			month = 'january';
		break;
		
		case 2:
			month = "february";
		break;
		
		case 3:
			month = "march";
	}
	
}

//check new date

var value = month+"-"+date;

var date_change = document.getElementById(value);
date_change.classList.add("table-active");
date_change.style.fontWeight = "bold";

});