// const documentWidth = $('html').width();
const menuButton = $('.hamburger');

const classToggle = () => {
  menuButton.toggleClass('is-active');
};

export default () => {
  // if (documentWidth >= 1220) {
  //   menuButton.off('click', classToggle);
  //   return;
  // }
  menuButton.on('click', classToggle);
};
