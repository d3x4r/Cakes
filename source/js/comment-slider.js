
export default () => {
  $('.comment__slider').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          dots: false,
          prevArrow: '<button class="slider-controls__button comment__button comment__button--prev" type="button" aria-label="Предыдущий слайд"></button>',
          nextArrow: '<button class="slider-controls__button comment__button comment__button--next" type="button" aria-label="Следующий слайд"></button>',
        },
      },
    ],
  });
};
