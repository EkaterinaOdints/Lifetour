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

new Swiper('.promo-swiper-js', {
  modules: [Pagination],
  direction: 'horizontal',
  pagination: {
    el: '.promo-swiper-pagination-js',
    clickable: true,
  },
  loop: true,
});

new Swiper('.tours-swiper-js', {
  modules: [Navigation],
  direction: 'horizontal',
  navigation: {
    nextEl: '.tours-swiper-button-wrapper-js .swiper-button-next-js',
    prevEl: '.tours-swiper-button-wrapper-js .swiper-button-prev-js',
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

new Swiper('.trainers-swiper-js', {
  modules: [Navigation],
  direction: 'horizontal',
  navigation: {
    nextEl: '.trainers-swiper-button-wrapper-js .swiper-button-next-js',
    prevEl: '.trainers-swiper-button-wrapper-js .swiper-button-prev-js',
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

new Swiper('.reviews-swiper-js', {
  modules: [Navigation],
  direction: 'horizontal',
  navigation: {
    nextEl: '.reviews-swiper-button-wrapper-js .swiper-button-next-js',
    prevEl: '.reviews-swiper-button-wrapper-js .swiper-button-prev-js',
  },
  loop: false,
  slidesPerView: 'auto',
  breakpoints: {
    768: {
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 30,
    },
    1440: {
      spaceBetween: 90,
      slidesOffsetBefore: 115,
      slidesOffsetAfter: 115,
    }
  }
});

new Swiper('.advantages-swiper-js', {
  modules: [Navigation],
  direction: 'horizontal',
  navigation: {
    nextEl: '.advantages-swiper-button-wrapper-js .swiper-button-next-js',
    prevEl: '.advantages-swiper-button-wrapper-js .swiper-button-prev-js',
  },
  enabled: false,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
    },
    1440: {
      enabled: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 2,
      slidesPerGroup: 2,
    }
  }
});

new Swiper('.gallery-swiper-js', {
  modules: [Navigation],
  direction: 'horizontal',
  navigation: {
    nextEl: '.gallery-swiper-button-wrapper-js .swiper-button-next-js',
    prevEl: '.gallery-swiper-button-wrapper-js .swiper-button-prev-js',
  },
  slidesPerView: 'auto',
  loop: true,
  breakpoints: {
    768: {
    },
    1440: {
      enabled: false,
    }
  }
});
