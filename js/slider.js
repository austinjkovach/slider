sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$('#slider >Img#1').fadeIn(300)
	startSlider();
});
function startSlider(){
	count=$("#slider >Img").size();

	loop = setInterval(function(){
		sliderNext = 1;
		sliderInt = 1;
		$("#slider >Img").fadeOut(300);
		$("#slider >Img" + sliderNext).fadeIn(300);

		sliderInt = sliderNext; 
		sliderNext = sliderNext+1;

	}, 3000)
}

function prev(){
	newSlide = sliderInt-1;
	showSlide(newSlide);
}

function next(){
	newSlide = sliderInt+1;
	showSlide(newSlide);
}

function showSlide(id){
	if()
}