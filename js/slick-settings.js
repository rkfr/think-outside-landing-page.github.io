
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
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
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