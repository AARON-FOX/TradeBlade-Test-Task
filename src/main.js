import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';

import './main.css';
import 'swiper/css';
import 'swiper/css/scrollbar';

new Swiper('.past-transactions-swiper', {
  modules: [Scrollbar],
  slidesPerView: 'auto',
  spaceBetween: 8,
  grabCursor: true,
  direction: 'horizontal',
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16,
  scrollbar: {
    el: '.past-transactions-scrollbar',
    draggable: true,
  },
  breakpoints: {
    375: {
      spaceBetween: 8,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    },
    768: {
      spaceBetween: 8,
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
    },
    1024: {
      spaceBetween: 20,
      slidesOffsetBefore: 28,
      slidesOffsetAfter: 28,
    },
    1280: {
      spaceBetween: 20,
      slidesOffsetBefore: 80,
      slidesOffsetAfter: 80,
    },
  },
});
