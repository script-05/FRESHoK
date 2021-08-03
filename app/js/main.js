$(function () {

  $('.catalog__btn, .catalog__items').on('mouseenter mouseleave', function(){
    $('.catalog__items').toggleClass('catalog__items--active');
    $('.catalog__btn').toggleClass('catalog__btn--active');
  });

  $('.slider__wrapper').slick({
    dots: false,
    arrows: true,
    nextArrow: '<button type="button" class="slick__btn slick__btn--next"></button>',
    prevArrow: '<button type="button" class="slick__btn slick__btn--prev"></button>',
    
  });
  
});
