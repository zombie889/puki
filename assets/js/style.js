$(function(){$("#loader").delay(500).fadeOut(300);$(".mask").delay(800).fadeOut(300);if(Modernizr.mq("screen and (max-width:768px)")){jQuery("body").toggleClass("body");}else{var s=skrollr.init({mobileDeceleration:1,edgeStrategy:'set',forceHeight:false,smoothScrolling:true,smoothScrollingDuration:300,easing:{WTF:Math.random,inverted:function(p){return 1-p;}}});}
var widthLess768=function(){if(Modernizr.mq("screen and (max-width:768px)")){$('.navbar .dropdown[data-init=onHover]').attr('data-init','onClick');skrollr.init().destroy();}else{$('.navbar .dropdown[data-init=onClick]').attr('data-init','onHover');$('.navbar .nav .search input').on('blur',function(){$(this).val('');});skrollr.init()}};widthLess768();$(".rotate-words").textrotator({animation:"flipUp",separator:",",speed:4000});
var owlbank = $('.owl-carousel.bankscroll');owlbank.owlCarousel({autoPlay: 5000,items: 5,itemsDesktop: false});
var projectsCarousel=$("#latest-results .owl-carousel");projectsCarousel.owlCarousel({autoPlay:3000,items:4,itemsDesktop:false,pagination:false});$("#latest-results .custom-navigation .next").click(function(){projectsCarousel.trigger('owl.next');})
$("#latest-results .custom-navigation .prev").click(function(){projectsCarousel.trigger('owl.prev');})
$('a[data-nivobox^="true"]').nivoLightbox({effect:'fade'});$('.twitter-feed').tweet({username:'envato',modpath:'./assets/js/vendor/tweet-js/',join_text:'',avatar_size:null,count:10,auto_join_text_default:' ',loading_text:'loading latest tweets...'});var clientsCarousel=$("#bank .owl-carousel");clientsCarousel.owlCarousel({items:5,pagination:false});$("#bank .custom-navigation .next").click(function(){clientsCarousel.trigger('owl.next');})
$("#bank .custom-navigation .prev").click(function(){clientsCarousel.trigger('owl.prev');})
var clientsFeedbackCarousel=$("#clients-feedback .owl-carousel");clientsFeedbackCarousel.owlCarousel({singleItem:true,pagination:false});$("#clients-feedback .custom-navigation .next").click(function(){clientsFeedbackCarousel.trigger('owl.next');})
$("#clients-feedback .custom-navigation .prev").click(function(){clientsFeedbackCarousel.trigger('owl.prev');})
var time=7;var $progressBar,$bar,isPause,tick,percentTime;var slider=$("#slider .owl-carousel");slider.owlCarousel({singleItem:true,stopOnHover:true,transitionStyle:"fade",addClassActive:true,afterMove:moved,afterInit:progressBar,startDragging:pauseOnDragging});function progressBar(){buildProgressBar();start();sliderAnimations();};function buildProgressBar(){$progressBar=$("<div>",{id:"progressBar"});$bar=$("<div>",{id:"bar"});$progressBar.append($bar).prependTo(slider);};function start(){percentTime=0;isPause=false;tick=setInterval(interval,10);};function interval(){if(isPause===false){percentTime+=1/time;$bar.css({width:percentTime+"%"});if(percentTime>=100){slider.trigger('owl.next')}}};function pauseOnDragging(){isPause=true;};function moved(){clearTimeout(tick);start();sliderAnimations();};slider.on('mouseover',function(){isPause=true;})
slider.on('mouseout',function(){isPause=false;});$("#slider .navigation .next").click(function(){slider.trigger('owl.next');})
$("#slider .navigation .prev").click(function(){slider.trigger('owl.prev');})
function sliderAnimations(){$('#slider .owl-item').not('active').find('.caption').each(function(){var caption=$(this),captionAnimation=caption.data('animation');caption.removeClass('animated'+' '+captionAnimation);});$('#slider .owl-item.active .caption').each(function(){var caption=$(this),captionAnimation=caption.data('animation'),captionDelay=0;captionDelay=caption.data('delay');window.setTimeout(function(){caption.addClass('animated'+' '+captionAnimation);},captionDelay);})}
$('.flickr-feed').append('<ul class="photo-stream"></ul>');$('.flickr-feed ul').jflickrfeed({limit:12,qstrings:{id:'12625534@N00'},itemTemplate:'<li><a href="{{image_b}}" title="{{title}}" data-nivobox="true" data-lightbox-gallery="photo-stream"><img src="{{image_s}}" alt="{{title}}" /></a><span class="photo-stream-overlay"><i class="fa fa-arrows-alt"></i></span></li>'},function(data){$('.flickr-feed li a').nivoLightbox({effect:'fade'});});var initTweetFeed=function(){!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");}
initTweetFeed();$('.progress').each(function(){$(this).appear(function(){$(this).find('.progress-bar').css({width:$(this).find('.progress-bar').data('percent')});});});$('.appear-el').each(function(){$(this).appear(function(){var animation=$(this).data('animation');$(this).delay(150).queue(function(next){$(this).addClass('animated'+' '+animation);next();});});});$('.navbar .dropdown').hover(function(){if($(this).attr('data-init')=='onHover'){$(this).find('.dropdown-menu').first().stop(true,true).slideToggle(200);$(this).addClass('open');}},function(){if($(this).attr('data-init')=='onHover'){$(this).find('.dropdown-menu').first().stop(true,true).slideToggle(200);$(this).removeClass('open');}});$('.navbar .dropdown').not('a').click(function(e){if($(e.target).hasClass('dropdown-toggle')){if($(this).attr('data-init')=='onHover'){return false;}}});$(window).resize(function(){widthLess768();});$(window).scroll(function(){if($(this).scrollTop()>200){$('.scroll-top').fadeIn('slow');}else{$('.scroll-top').fadeOut('slow');}});$('.scroll-top').click(function(){$('body,html').animate({scrollTop:0},800);return false;});})
$(window).bind('load',function(){parallaxInit();});function parallaxInit(){$('#twitter-parallax').parallax("50%",0.1);}
$(document).ready(function(){$("#liscroll").liScroll();$('#headerFixed').fixedHeaderTable({ footer: true, altClass: 'odd' });$("#modal-trigger").click();});