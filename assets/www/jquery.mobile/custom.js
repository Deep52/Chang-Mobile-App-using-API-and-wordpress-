$(document).ready(function(){
	//Keeping logo in center
	setTimeout(function(){
		var h = $(window).outerHeight();
		var l = $('img.center-logo').height();
		var f = (h-l)/2;
		$('img.center-logo').css('margin-top', f + 'px');
	});
});

$(window).resize(function(){
	//Keeping logo in center
	setTimeout(function(){
		var h = $(window).outerHeight();
		var l = $('img.center-logo').height();
		var f = (h-l)/2;
		$('img.center-logo').css('margin-top', f + 'px');
		
	});
	
});

$(document).ready(function(){
	//Keeping logo in center
	setTimeout(function(){
		var h = $(window).outerHeight();
		var l = $('ul.buttons1, .middle').height();
		var f = (h-l)/3;
		$('ul.buttons1, .middle').css('margin-top', f + 'px');
	});
});

$(window).resize(function(){
	//Keeping logo in center
	setTimeout(function(){
		var h = $(window).outerHeight();
		var l = $('ul.buttons1').height();
		var f = (h-l)/3;
		$('ul.buttons1, .middle').css('margin-top', f + 'px');
	});
});

$(document).on('click','.ui-btn-text a',function(){
$(this).parents('.ui-btn-text a').find('span').toggle();
});


// Select Country

/* Transition page after splash has been shown for alot of time */



$(document).ready(function(){

$(document).on('click','.ui-btn-text a',function(){
$(this).parents('.ui-btn-text a').find('span').toggle();
});

	setTimeout(function(){
		$('img.logo').removeClass('center-logo');
		$('img.logo').css('margin-top', '');
	}, 2000);
	setTimeout(function(){
		$('.logo_slogan').fadeIn(300);
	}, 3000);
	setTimeout(function(){
		$('ul.buttons').fadeIn(1000);
	}, 4000);
});
