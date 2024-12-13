// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const body = document.querySelector('body');
const navigation = body.querySelector('.main-navigation-js');
const navButton = navigation.querySelector('.main-navigation-button-js');

const closeMenu = () => {
  body.classList.remove('overlay');
  navigation.classList.remove('main-navigation--oppened');
};

const onLinkClick = (e) => {
  if (e.target.tagName === 'A') {
    closeMenu();
  }
};

const toggleMenu = () => {
  body.classList.toggle('overlay');
  navigation.classList.toggle('main-navigation--oppened');

  if (body.classList.contains('overlay') || navigation.classList.contains('main-navigation--oppened')) {
    navigation.removeEventListener('click', onLinkClick);
    navigation.addEventListener('click', onLinkClick);
  }
};

navButton.addEventListener('click', toggleMenu);

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
});


