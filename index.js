$('<img/>').attr('src', 'images/background.jpeg').on('load', function() {
	$(this).remove();
	$('body').css('background-image', 'url(images/background.jpeg)');
	$("header").css("visibility", "visible");
	$(".tabs").css("visibility", "visible");
	$(".loader").css("visibility", "hidden");
 });

$(document).ready(function() {
	
	//Yttre länkar öppnas i ett nytt fönster och den aktiva lilla bilden på tab1 markeras.
	$("a[href^='http://'], a[href^='https://']").attr("target","_blank");
	$("#filip1").css("opacity", "0.4");


	//Funktion som hanterar tab-byte, taben byts och den aktiva fliken markeras.
	//Taben får en aniemrad storleksbyttning.
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

	//Byter bild på tab1, när en liten bild klickas byts bilden i stora ramen ut mot den som är tryckt på i lilla
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


	//Variabler som behövs för att dynamiskt ändra storleken på en tab
	var innerImage;
	var originalHeight = $(".image").height();
	var originalWidth = $(".image").width();
	var tab = $("#tab3");
	var tabHeight = tab.height();

	//Vid tryck så animeras bilden och blir större samtidigt som en gif spelas upp. Storleken på en tab ändras också när bilden blir större.
	//Vid ett ytterligare tryck slutar gifen spela och bilden krymper igen.
	$(".image").click(function(){
		innerImage = $(this).find(".innerImage");
		if(!$(this).is(":animated") && $(this).width() == originalWidth){
			$(this).css("cursor", "zoom-out");
			$(this).animate({height: innerImage.height(), width: innerImage.width()}, {duration: 200, complete: function() {
				if(innerImage.attr("id") == "imageRocket"){
					innerImage.attr("src", "images/RocketMoving.gif");
				} else if(innerImage.attr("id") == "imageBlow"){
					innerImage.attr("src", "images/BlowMoving.gif");
				}
				
				}
			
			});
			tab.animate({height: tabHeight + (innerImage.height() - originalHeight)}, {duration: 200});
			
		} else if($(this).width() != originalWidth){
			$(this).animate({height: originalHeight, width: originalWidth}, {duration: 200, complete: function() {
				$(this).css("cursor", "zoom-in");
				ResetGif(innerImage.attr("id"));
		}
		
		});
	
		tab.animate({height: tabHeight}, {duration: 200});
		}
	});


	//Funktion som håller koll på återställning av gifen som står still.
	var gifRocket = $("#imageRocket");
	var gifBlow = $("#imageBlow");
	function ResetGif(id){
		if(id == "imageRocket"){
			gifRocket.attr("src", "images/RocketStill.gif");
		} else if(id == "imageBlow"){
			gifBlow.attr("src", "images/BlowStill.gif");
		}
	}

});
