$(document).ready(function() {
  console.log(Formulation);
  var stickyElement = $('.scroll');

  if (stickyElement && stickyElement.length > 0) {
    var stickyNavTop = stickyElement.offset().top;

    var stickyNav = function () {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > stickyNavTop) {
        stickyElement.addClass('on-scroll');
      } else {
        stickyElement.removeClass('on-scroll');
      }
    };

    stickyNav();

    $(window).scroll(function () {
      stickyNav();
    });
  }
});
