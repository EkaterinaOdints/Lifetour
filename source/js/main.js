const useMenu = () => {
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
};

useMenu();


import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const promoSwiper = new Swiper('.promo-swiper-js', {
  modules: [Pagination],
  direction: 'horizontal',
  pagination: {
    el: '.promo-swiper-pagination-js',
    clickable: true,
  },
  loop: true,
});

const toursSwiper = new Swiper('.tours-swiper-js', {
  modules: [Navigation],
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const trainersSwiper = new Swiper('.trainers-swiper-js', {
  modules: [Navigation],
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: false,
  initialSlide: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
      initialSlide: 0,
      spaceBetween: 20,
    }
  }
});


