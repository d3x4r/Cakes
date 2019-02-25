const menuButton = $('.hamburger');

const classToggle = () => {
  menuButton.toggleClass('is-active');
};

export default () => {
  menuButton.on('click', classToggle);
};
