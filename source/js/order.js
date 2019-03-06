import ScreenWidth from './screen-width';

let pageWidth = $('html').width();

const OrderPart = {
  type: $('[data-type = "type"]'),
  size: $('[data-type = "size"]'),
  design: $('[data-type = "design"]'),
};

const typeSlider = $('.type-slider');
const designSlider = $('.visualization-slider');
const sizeSlider = $('.size-slider__list');

const typeSliderContainer = '.order__first-step';
const typeSliderValue = '.type-slide__cake-name';

const designSliderContainer = '.order__third-step';
const designSliderValue = '.visualization-slide__cake-name';

const sizeSliderContainer = '.order__second-step';

const sizeList = $('.size-slider__list');

const getSelectedSlide = sliderClass => $(`${sliderClass} .slick-current`);
const getSlideValueContainer = (slide, className) => slide.find(`${className}`);
const getValue = element => element.text();

const getCurrentValue = (slide, slideNameClass) => {
  const currentSlide = getSelectedSlide(slide);
  const nameContaner = getSlideValueContainer(currentSlide, slideNameClass);
  const name = getValue(nameContaner);
  return name;
};

const updateOrder = (slider, sliderNameContainer, sliderType) => {
  const currentName = getCurrentValue(slider, sliderNameContainer);
  sliderType.text(currentName);
};

const getDataSizeSlide = (slide) => {
  const currentSlide = getSelectedSlide(slide);
  const valueContainer = currentSlide.find('[data-size]');
  return valueContainer.attr('data-size');
};

const updateSize = () => {
  const currentValue = getDataSizeSlide(sizeSliderContainer);
  OrderPart.size.text(currentValue);
};

const updateType = () => updateOrder(typeSliderContainer, typeSliderValue, OrderPart.type);
const updateDesign = () => updateOrder(designSliderContainer, designSliderValue, OrderPart.design);

function changeSizeByClick() {
  sizeList.find('li.slick-current').removeClass('slick-current');
  $(this).addClass('slick-current');
  updateSize();
}

const addSizeSliderByWidth = () => {
  pageWidth = $('html').width();
  sizeList.find('li.slick-current').removeClass('slick-current');
  if (pageWidth < ScreenWidth.tablet) {
    sizeSlider.on('afterChange', updateSize);
  } else {
    sizeList.on('click', 'li', changeSizeByClick);
  }
};

const addOrderMenu = () => {
  typeSlider.on('afterChange', updateType);
  designSlider.on('afterChange', updateDesign);
  addSizeSliderByWidth();
};

const updateSizeSlider = () => {
  sizeSlider.off('afterChange', updateSize);
  sizeList.off('click', 'li', changeSizeByClick);
  addSizeSliderByWidth();
};

export default () => {
  updateType();
  updateDesign();
  $(window).on('resize', updateSizeSlider);
  addOrderMenu();
};
