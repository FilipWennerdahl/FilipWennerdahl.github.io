$('<img/>').attr('src', 'images/background.jpeg').on('load', function() {
	$(this).remove();
	$("#background").css('background-image', 'url(images/background.jpeg)');
	$("header").css("visibility", "visible");
	$(".tabs").css("visibility", "visible");
	$(".loader").css("visibility", "hidden");
 });

$(document).ready(function() {

	//Expands the div and loads the game when the button is clicked
	var gameLoaded = false;	
	$("#outerGameContainer").click(function(){ 
		if(!gameLoaded) {
			gameLoaded = true;
			$(this).animate({height: "496px", width: "279px"}, {duration: 200, complete: function() {
					$("#gameContainer").css("text-indent", "0px");
					UnityLoader.instantiate("gameContainer", "https://rawgit.com/FilipWennerdahl/MobileSpaceGame/master/Game-WebGL/Build/Game%20-%20WebGL.json");				
				}	
			});	
		}		
	});	

	//New browser tab for external links
	$("a[href^='http://'], a[href^='https://']").attr("target","_blank");
	$("#filip1").css("opacity", "0.4");


	//Used to change and animate the active tab 
	var lastAttrValue = $(".active a").attr("href");
	$(".tabs .tab-links a").click(function(e){
		var currentAttrValue = $(this).attr("href");

		$(".tabs " + currentAttrValue).show().siblings().hide();

		var oldTabHeight = $(".tabs " + lastAttrValue).height();
		var newTabHeight = $(".tabs " + currentAttrValue).height();
		var distance = oldTabHeight - newTabHeight;
		distance = Math.abs(distance);

		if(oldTabHeight != newTabHeight){
			$(".tabs " + currentAttrValue).find(".content").hide();
			$(".tabs " + currentAttrValue).height(oldTabHeight);
			$(".tabs " + currentAttrValue).animate({height: newTabHeight}, {easing: "linear", duration: (distance / 1.5), complete: function(){
				$(".tabs " + currentAttrValue).find(".content").fadeIn(250);
				}

			});
		}

		$(this).parent("li").addClass("active").siblings().removeClass("active");
		lastAttrValue = $(this).attr("href");
		e.preventDefault();
	});

	//Used to change picture in the big picture frame on tab 1
	var selectedImage = $("#filip1");
	$(".imageFilip").click(function(){
		var imageClicked = $(this).attr("src");
		var mainImage = $("#mainFilip");
		if(mainImage.attr("src") != imageClicked){
			selectedImage.fadeTo("fast", 1);
			selectedImage = $(this);
			selectedImage.fadeTo("fast", 0.4);
			mainImage.fadeOut("fast", function(){
				mainImage.attr("src", imageClicked);
				mainImage.fadeIn("fast");
			});
		}
	});



	var innerImage;
	var originalHeight = $(".image").height();
	var originalWidth = $(".image").width();
	var tab = $("#tab3");
	var tabHeight = tab.height();

	//Used to enlarge and animate example images on tab 3
	$(".image").click(function(){
		innerImage = $(this).find(".innerImage");
		if(!$(this).is(":animated") && $(this).width() == originalWidth){
			$(this).css("cursor", "zoom-out");
			$(this).animate({height: innerImage.height(), width: innerImage.width()}, {duration: 200, complete: function() {
				if(innerImage.attr("id") == "imageRocket"){
					innerImage.attr("src", "images/RocketMoving.gif");
				} else if(innerImage.attr("id") == "imageBlow"){
					innerImage.attr("src", "images/BlowMoving.gif");
				} else if(innerImage.attr("id") == "imageCannon"){
					innerImage.attr("src", "images/CannonMoving.gif");
				} else if(innerImage.attr("id") == "imageTwoPlatforms"){
					innerImage.attr("src", "images/TwoPlatformsMoving.gif");
				} else if(innerImage.attr("id") == "imageBladeTrap"){
					innerImage.attr("src", "images/BladeTrapMoving.gif");
				}
				
				}
			
			});
			// tab.animate({height: tabHeight + (innerImage.height() - originalHeight)}, {duration: 200});
			
		} else if($(this).width() != originalWidth){
			$(this).animate({height: originalHeight, width: originalWidth}, {duration: 200, complete: function() {
				$(this).css("cursor", "zoom-in");
				ResetGif(innerImage.attr("id"));
		}
		
		});
	
		// tab.animate({height: tabHeight}, {duration: 200});
		}
	});


	//Help function to reset gif on tab 3
	var gifRocket = $("#imageRocket");
	var gifBlow = $("#imageBlow");
	var gifCannon = $("#imageCannon");
	var gifTwoPlatforms = $("#imageTwoPlatforms");
	var gifBladeTrap = $("#imageBladeTrap");
	function ResetGif(id){
		if(id == "imageRocket"){
			gifRocket.attr("src", "images/RocketStill.gif");
		} else if(id == "imageBlow"){
			gifBlow.attr("src", "images/BlowStill.gif");
		} else if(id == "imageCannon"){
			gifCannon.attr("src", "images/CannonStill.gif");
		} else if(id == "imageTwoPlatforms"){
			gifTwoPlatforms.attr("src", "images/TwoPlatformsStill.gif");
		} else if(id == "imageBladeTrap"){
			gifBladeTrap.attr("src", "images/BladeTrapStill.gif");
		}
	}

});
