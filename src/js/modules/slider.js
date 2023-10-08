import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    loop: true,

    navigation: {
        nextEl: '#btnNext',
    },

    pagination: {
        el: '.swiper-pagination',
      },
});

export default swiper;