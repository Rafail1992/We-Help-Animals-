// JavaScript Document
$("#news1").addClass("d-block");
$("#news2").addClass("d-none");
$("#news3").addClass("d-none");

//btn 3 load 3rd news

$("#news-link-3").click(function(){
	
	$("#news1").removeClass("d-block");
	$("#news1").addClass("d-none");
    $("#news2").addClass("d-none");
	$("#news2").removeClass("d-block");
    $("#news3").removeClass("d-none");
	$("#news3").addClass("d-block");
	
	
});

//btn 2 load 2nd news

$("#news-link-2").click(function(){
	
	$("#news1").addClass("d-none");
	$("#news1").removeClass("d-block");
    $("#news2").addClass("d-block");
	$("#news2").removeClass("d-none");
    $("#news3").addClass("d-none");
	$("#news3").removeClass("d-block");
	
	
});

//btn 1 load 1st news

$("#news-link-1").click(function(){
	
	$("#news1").addClass("d-block");
	$("#news1").removeClass("d-none");
    $("#news2").addClass("d-none");
	$("#news2").removeClass("d-block");
    $("#news3").addClass("d-none");
	$("#news3").removeClass("d-block");
	
	
});

//next function

$("#next").click(function(){
	if($("#news1").hasClass("d-block")){
		$("#news1").addClass("d-none");
		$("#news1").removeClass("d-block");
		$("#news2").addClass("d-block");
		$("#news2").removeClass("d-none");
		$("#news3").addClass("d-none");
		$("#news3").removeClass("d-block");
	}
	else if($("#news2").hasClass("d-block")){
		$("#news1").removeClass("d-block");
		$("#news1").addClass("d-none");
		$("#news2").addClass("d-none");
		$("#news2").removeClass("d-block");
		$("#news3").removeClass("d-none");
		$("#news3").addClass("d-block");
	}
	else {
		$("#news1").addClass("d-block");
		$("#news1").removeClass("d-none");
		$("#news2").addClass("d-none");
		$("#news2").removeClass("d-block");
		$("#news3").addClass("d-none");
		$("#news3").removeClass("d-block");
	}
	
});


//next function

$("#prev").click(function(){
	if($("#news3").hasClass("d-block")){
		$("#news1").addClass("d-none");
		$("#news1").removeClass("d-block");
		$("#news2").addClass("d-block");
		$("#news2").removeClass("d-none");
		$("#news3").addClass("d-none");
		$("#news3").removeClass("d-block");
	}
	else if($("#news1").hasClass("d-block")){
		$("#news1").removeClass("d-block");
		$("#news1").addClass("d-none");
		$("#news2").addClass("d-none");
		$("#news2").removeClass("d-block");
		$("#news3").removeClass("d-none");
		$("#news3").addClass("d-block");
	}
	else {
		$("#news1").addClass("d-block");
		$("#news1").removeClass("d-none");
		$("#news2").addClass("d-none");
		$("#news2").removeClass("d-block");
		$("#news3").addClass("d-none");
		$("#news3").removeClass("d-block");
	}
	
});