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
          prevArrow: $('.order__type-item--prev'),
          nextArrow: $('.order__type-item--next'),
          dots: false,
        },
      },
    ],
  });
};
