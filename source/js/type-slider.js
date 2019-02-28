export default () => {
  $('.type-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          prevArrow: $('.slider-controls__item--prev'),
          nextArrow: $('.slider-controls__item--next'),
          dots: false,
        },
      },
    ],
  });
};
