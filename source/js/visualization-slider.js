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
          arrows: true,
          prevArrow: '<button class="slider-controls__button visualization-slide__controls slider-controls__button-prev" type="button" aria-label="Предыдущий слайд"></button>',
          nextArrow: '<button class="slider-controls__button visualization-slide__controls slider-controls__button-next" type="button" aria-label="Следующий слайд"></button>',
        },
      },
    ],
  });
};
