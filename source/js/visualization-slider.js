export default () => {
  $('.visualization-slider').slick({
    arrows: false,
    initialSlide: 1,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          initialSlide: 0,
          slidesToShow: 2,
          dots: false,
        },
      },
    ],
  });
};
