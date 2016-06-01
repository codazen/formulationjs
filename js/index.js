let textbox = {
  "elements": [
    {
      "type": "textbox",
      "data": {
        "value": "",
        "label": "Label",
        "required": true,
        "maxlength": "10",
        "email": true,
        "textboxState": true
      }
    }
  ]
};
let obj1 = new Render(textbox);
obj1.render("example1");

let textarea = {
  "elements": [
    {
      "type": "textarea",
      "data": {
        "value": "",
        "label": "Label",
        "required": true,
        "maxlength": "300",
        "textareaState": true
      }
    }
  ]
}

let obj2 = new Render(textarea);
obj2.render("example2");

let checkbox = {
  "elements": [
    {
      "type": "checkbox",
      "data": {
        "value": ["1"],
        "groupLabel": "Checkbox group label",
        "required": true,
        "options": [
          {
            "name": "Option 1",
            "value": 1
          },
          {
            "name": "Option 2",
            "value": 2
          }
        ]
      }
    }
  ]
}

let obj3 = new Render(checkbox);
obj3.render("example3");

let dropdown = {
  "elements": [
    {
      "type": "dropdown",
      "placeholder": "Select...",
      "data": {
        "label": "Dropdown Label",
        "options": [
          {
            "name": "Option 1",
            "value": 1
          },
          {
            "name": "Option 2",
            "value": 2
          }
        ],
        "value": "",
        "required": true
      }
    }
  ]
}

let obj4 = new Render(dropdown);
obj4.render("example4");

let datepicker = {
  "elements": [
    {
      "type": "datepicker",
      "data": {
        "label": "Please select a due date",
        "value": null,
        "dateFormat": "DD/MM/YYYY",
        "placeholderText": "dd/mm/yyyy",
        "maxlength": "10",
        "required": "false",
        "range": "false"
      }
    }
  ]
}

let obj5 = new Render(datepicker);
obj5.render("example5");

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


