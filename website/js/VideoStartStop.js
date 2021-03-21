// JavaScript Document
$(document).ready(function(){

var height = $(document).height();


$(window).scroll(function(){
	var video = $(window).scrollTop();
	
	if(height>4000){
		if(video>2500){
			$("#video-gallery").play();
		}
		else{
			 console.log("video end");
		}
	}
	
	else if(height<4000)
			{
				if(video>1200)
					{
					   console.log("video start");
					}
				else{
			           console.log("video end");
			        }
			}
	
});
});