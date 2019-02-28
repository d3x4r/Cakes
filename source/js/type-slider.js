export default () => {
  $('.type-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          // slidesToShow: 3,
          // slidesToScroll: 3,
          // infinite: true,
          dots: false
        }
      }
    ]
  });
};
