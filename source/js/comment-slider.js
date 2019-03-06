const commentSlider = $('.comment__slider');

const sliderCounter = $('.comment__current-index');
const slides = $('.comment__slide');
const slidesQuantity = slides.length;
const slidesQuantityContainer = $('.comment__count');

const addCommentSlider = () => {
  commentSlider.slick({
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

const countUpdate = () => {
  const activeSlide = $('.comment .slick-current');
  const activeIndex = activeSlide.index();
  sliderCounter.text(activeIndex);
  slidesQuantityContainer.text(slidesQuantity);
};

const addCountUpdate = () => {
  $(document).ready(() => {
    countUpdate();
  });

  commentSlider.on('afterChange', countUpdate);
};

export default () => {
  addCommentSlider();
  addCountUpdate();
};
