let textbox = {
  "type": "textbox",
  "data": {
    "value": "",
    "label": "Label",
    "required": true,
    "maxlength": "10",
    "email": true,
    "textboxState": true
  }
};
console.log(textbox);
Formulation(textbox, "textbox");


$(document).ready(function() {
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


