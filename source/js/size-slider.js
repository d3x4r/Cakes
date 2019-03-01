export default () => {
  $('.size-slider__list').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick',
        dots: false,
      },
    ],
  });
};
