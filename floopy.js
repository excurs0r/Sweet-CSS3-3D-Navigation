$(document).ready(function(){
	
	var position = $('#floopy-toggle').attr('data-position');
	var menuheight = $('.floopy-navigation').css('height')+$('.floopy-navigation').css('padding');;
	var menuwidth = $('.floopy-navigation').css('width')+$('.floopy-navigation').css('padding');

	$('#floopy-toggle').click(function(){
		$('#floopy-wrapper').toggleClass('floopy-wrapper-transform-'+position);

		switch (position){
		case 'top':
			if($('#floopy-wrapper').hasClass('floopy-wrapper-transform-'+position)){
				$('#floopy-wrapper').css({transform: "translateY("+menuheight+") rotateX(-3deg)"});
			}
			else{
				$('#floopy-wrapper').css({transform: "translateY(0)"});
			}
			
			break;
		case 'left':
			if($('#floopy-wrapper').hasClass('floopy-wrapper-transform-'+position)){
				$('#floopy-wrapper').css({transform: "translateX("+menuwidth+") rotateY(3deg)"});
			}
			else{
				$('#floopy-wrapper').css({transform: "translateX(0)"});
			}
			break;
		case 'right':
			if($('#floopy-wrapper').hasClass('floopy-wrapper-transform-'+position)){
				$('#floopy-wrapper').css({transform: "translateX(-"+menuwidth+") rotateY(-3deg)"});
			}
			else{
				$('#floopy-wrapper').css({transform: "translateX(0)"});
			}
			break;
		case 'bottom':
			if($('#floopy-wrapper').hasClass('floopy-wrapper-transform-'+position)){
				$('#floopy-wrapper').css({transform: "translateY(-"+menuheight+") rotateX(3deg)"});
			}
			else{
				$('#floopy-wrapper').css({transform: "translateY(0)"});
			}
			break;
		}
	});





});




