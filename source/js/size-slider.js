const sizeSlider = $('.size-slider__list');
let sliderTimer;
const updateTimeOut = 300;

const sliderSettings = {
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
};

const sliderUpdate = () => {
  if (!sizeSlider.hasClass('slick-initialized')) {
    sizeSlider.slick(sliderSettings);
  }
};

const sliderCheck = () => {
  if (sliderTimer) {
    clearTimeout(sliderTimer);
  }
  sliderTimer = setTimeout(sliderUpdate, updateTimeOut);
};

export default () => {
  sizeSlider.slick(sliderSettings);
  $(window).on('resize', sliderCheck);
};
