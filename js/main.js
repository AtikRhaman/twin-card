(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();

/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 

/*--------------------------
 Time-based Background
---------------------------- */ 
$(document).ready(function(){
  var d = new Date();
  var n = d.getHours();
  if (n > 18 || n < 6)
    // If time is after 7PM or before 6AM, apply night theme to ‘body’
    document.getElementById("dayNight").className = "night";
  else
    // Else use ‘day’ theme
    document.getElementById("dayNight").className = "day";
});


/*--------------------------
 Smooth Scroll
---------------------------- */	
smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: true, // Boolean. If true, update the URL hash on scroll
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});

/*----------------------------
 owl active
------------------------------ */  
// Product & Solutions Carousel
  $(".product-solutions-carousel").owlCarousel({
    autoPlay: false, 
    slideSpeed:700,
    pagination:true,
    navigation:true,    
    items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='ti-arrow-circle-left'></i>","<i class='ti-arrow-circle-right'></i>"],
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });

  // Program Carousel
  $(".program-carousel").owlCarousel({
    autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
    items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
    itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
  
  // Micro-Creditors Carousel
  $(".mc-carasousal").owlCarousel({
    autoPlay: true, 
    items : 3,
    pagination:false,
    navigation:true,  
    slideSpeed : 1000,
    navigationText:["<i class='ti-arrow-left '></i>","<i class='ti-arrow-right '></i>"],  
  });


/*--------------------------
 WMGridfolio
---------------------------- */ 
$('.my-grid').WMGridfolio({
    thumbnail : {
        columns : 3,
        margin   : 12
    },
    details : {
        minHeight : 267
    }
});  


/*----------------------------
 jportilio
------------------------------ */
// $(function () {
//     $('#jprt-ind').jportilio({ratio: 1});
// });

$(function () {

  $('.jprt-container').jportilio({

  filter: [],

  // the ratio of item's width to item's height 
  ratio: "0.74",

  // number of items in row for small devices 
  // <768px 
  ws_xs: 1,

  //  768px < x < 992px 
  ws_sm: 2,

  // 992px < x < 1200px 
  ws_md: 3,

  // 1200px < x
  ws_lg: 3
  
  }); 

});
 

 



})(jQuery); 