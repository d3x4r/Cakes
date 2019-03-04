const typeSlider = $('.type-slider');
const designSlider = $('.visualization-slider');
const sizeSlider = $('.size-slider__list');

const typeSliderContainer = '.order__first-step';
const typeSliderValue = '.type-slide__cake-name';

const designSliderContainer = '.order__third-step';
const designSliderValue = '.visualization-slide__cake-name';

const sizeSliderContainer = '.order__second-step';
const sizeSliderValue = '.size-slider__size-footnote';

const getSelectedSlide = sliderClass => $(`${sliderClass} .slick-current`);
const getSlideValueContainer = (slide, className) => slide.find(`${className}`);
const getValue = element => element.text();

const getCurrentValue = (slide, slideNameClass) => {
  const currentSlide = getSelectedSlide(slide);
  const nameContaner = getSlideValueContainer(currentSlide, slideNameClass);
  const name = getValue(nameContaner);
  return name;
};

const OrderPart = {
  type: $('[data-type = "type"]'),
  size: $('[data-type = "size"]'),
  design: $('[data-type = "design"]'),
};

const updateOrder = (slider, sliderNameContainer, sliderType) => {
  const currentName = getCurrentValue(slider, sliderNameContainer);
  sliderType.text(currentName);
};

const updateType = () => updateOrder(typeSliderContainer, typeSliderValue, OrderPart.type);
const updateDesign = () => updateOrder(designSliderContainer, designSliderValue, OrderPart.design);
const updateSize = () => updateOrder(sizeSliderContainer, sizeSliderValue, OrderPart.size);

const sizeList = $('.size-slider__list');

function fn() {
  // sizeList.find('.slick-current').removeClass('slick-current');
  $(this).addClass('slick-current');
}

export default () => {
  typeSlider.on('afterChange', updateType);
  designSlider.on('afterChange', updateDesign);
  sizeSlider.on('afterChange', updateSize);
  sizeList.on('click', 'li', fn);
};
