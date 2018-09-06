$(document).ready(function(){

$(".select").on("click", function(){
	$(".select-list").slideToggle(500);
});

// =========================burger menu========================
$(".burger-trigger").on("click", function(){
	$(".burger-body").slideToggle(500);
});
// =============================== tabs =======================

$(".header-menu .submenu span").on("click", function(event){
	var content = $(".header-menu .submenu .sub-cont"),
		actvCont = content.eq($(this).parent().index());
	actvCont.slideToggle(500);
	

	
});


// ==========================deal-slider=======================
var trigger = $(".hot-deals>.title-deal>div"),
	bodyDeal = $(".hot-deals>.body-deal")

trigger.on("click",function() {
	trigger.removeClass("orangeActive");
	$(this).addClass("orangeActive");

	bodyDeal.removeClass("bodyActive");
	bodyDeal.eq(($(this).index())-1).addClass("bodyActive");
});


// ============================ad-slider========================
var adSlider = $(".ad-polosa"),
	adButLeft = $(".ad-slider .arrow-left");
	adButRight = $(".ad-slider .arrow-right");
	leftAd = 0;   

adButLeft.on("click", adSlideLeft);
adButRight.on("click", adSlideRight);

function adSlideRight(){
	leftAd = leftAd - 845;
	if(leftAd < -1690){
		leftAd = 0;
	}
	adSlider.css({
		"left": leftAd + "px"
	})
}

function adSlideLeft(){
	leftAd = leftAd + 845;
	if(leftAd > 0){
		leftAd = -1690;
	}
	adSlider.css({
		"left": leftAd + "px"
	})
}


// ===================blog slider=========================


var blogSlider = $(".blog-polosa"),
	blogButLeft = $(".blog-slider .arrow-left");
	blogButRight = $(".blog-slider .arrow-right");
	left = 0;   

blogButLeft.on("click", blogSlideLeft);
blogButRight.on("click", blogSlideRight);

function blogSlideRight(){
	left = left - 199;
	if(left < -796){
		left = 0;
	}
	blogSlider.css({
		"left": left + "px"
	})
}

function blogSlideLeft(){
	left = left + 199;
	if(left > 0){
		left = -796;
	}
	blogSlider.css({
		"left": left + "px"
	})
}


//====================gallrey slider========================


var galSlider = $(".gal-polosa"),
	galButLeft = $(".gal-slider .arrow-left");
	galButRight = $(".gal-slider .arrow-right");
	leftGal = 0;   

galButRight.on("click", galSlideRight);
galButLeft.on("click", galSlideLeft);

function galSlideRight(){
	leftGal -= 88;
	if(leftGal < -528){
		leftGal = 0;
	}
	galSlider.css({
		"left": leftGal + "px"
	})
}

function galSlideLeft(){
	leftGal += 88;
	if(leftGal > 0){
		leftGal =- 528;
	}
	galSlider.css({
		"left": leftGal + "px"
	})
}


});