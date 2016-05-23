$(document).ready(function() {
  var stickyNavTop = $('.scroll').offset().top;
   
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
          
    if (scrollTop > stickyNavTop) { 
        $('.scroll').addClass('on-scroll');
    } else {
        $('.scroll').removeClass('on-scroll'); 
    }
  };
   
  stickyNav();
   
  $(window).scroll(function() {
    stickyNav();
  });
});
