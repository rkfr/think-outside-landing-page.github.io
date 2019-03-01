// min.js

new WOW().init();

// parallax

if ($(window).width() > 960)
{
    $('body').parallax({
        'elements': [
            {
                'selector': '.header__model',
                'properties': {
                    'x': {
                        'right': {
                            'initial': 0,
                            'multiplier': 0.01,
                            'unit': 'px',
                            'invert': false
                        }
                    },
                    'y': {
                        'top': {
                            'initial': 0,
                            'multiplier': 0.01,
                            'unit': 'px',
                            'invert': true
                        }
                    }
                }
            }
        ]
    });
}

// scroll

$("a.nav-menu__link").click(function (e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
});

// slider

$(function() {
  $('.team__slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    appendArrows: $('.team__buttons'),
        prevArrow: '<button class="prev slider-arrow-style" type="button"><div class="prev-slide"></div></button>',
        nextArrow: '<button class="next slider-arrow-style" type="button"><div class="next-slide"></div></button>',
    responsive: [
      {
        breakpoint: 890,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });
})