$(function () {

  // На всякий случай 
  // $('.catalog__btn, .catalog__items').on('click', function(){
  //   $('.catalog__items').toggleClass('catalog__items--active');
  //   $('.catalog__btn').toggleClass('catalog__btn--active');
  // });

  $('.hero-slider__wrapper').slick({
    dots: false,
    arrows: true,
    nextArrow: '<button type="button" class="hero-slider__arrow hero-slider__arrow--next"></button>',
    prevArrow: '<button type="button" class="hero-slider__arrow hero-slider__arrow--prev"></button>',
    
  });
  
  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ddc35b",
    readOnly: true

  });

  var mixer = mixitup('.top-products__content');
  var mixer2 = mixitup('.features__content');

  
});
