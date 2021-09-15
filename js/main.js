$('.rg-home-slider').slick({
    dots: true,
});

$('.rg-home-newslider').slick({
    arrow: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

$('.rg-home-testm').slick({
    dots: true,
    arrows: false,
});

/*ham menu toggle*/

$('.rg-header-hamburger').on('click', function(e) {
  $('.rg-header-nav').toggleClass("show"); //you can list several class names 
  e.preventDefault();
});

/*accordin*/

//this is the button
var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length; i++) {
  //when one of the buttons are clicked run this function
  acc[i].onclick = function () {
    //variables
    var panel = this.nextElementSibling;
    var coursePanel = document.getElementsByClassName("accordion-collapse");
    var courseAccordion = document.getElementsByClassName("accordion-header");
    var courseAccordionActive = document.getElementsByClassName(
      "accordion-header active"
    );

    /*if pannel is already open - minimize*/
    if (panel.style.maxHeight) {
      //minifies current pannel if already open
      panel.style.maxHeight = null;
      //removes the 'active' class as toggle didnt work on browsers minus chrome
      this.classList.remove("active");
    } else {
      //pannel isnt open...
      //goes through the buttons and removes the 'active' css (+ and -)
      for (var ii = 0; ii < courseAccordionActive.length; ii++) {
        courseAccordionActive[ii].classList.remove("active");
      }
      //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
      for (var iii = 0; iii < coursePanel.length; iii++) {
        this.classList.remove("active");
        coursePanel[iii].style.maxHeight = null;
      }
      //opens the specified pannel
      panel.style.maxHeight = panel.scrollHeight + "px";
      //adds the 'active' addition to the css.
      this.classList.add("active");
    }
  }; //closing to the acc onclick function
} //closing to the for loop.


