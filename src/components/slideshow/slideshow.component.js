import Vue from 'vue';

import axios from 'axios';

import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper);

export default  {

  name: 'slideshow',

  data() {
    return {

      slides: [],

      swiperOptionTop: {
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },

      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 4,
        touchRatio: 0.2,

        slideToClickedSlide: true
      }
      
    }
  },

  computed: {

    current_folder(){

      return this.$store.state.current_location;

    },

  },

  mounted(){

    //needs to be reactive in production
    this.getPictures();

  },

  methods: {

    initSlider(){

      this.$nextTick(() => {

        const swiperTop = this.$refs.swiperTop.swiper;

        const swiperThumbs = this.$refs.swiperThumbs.swiper;

        swiperTop.controller.control = swiperThumbs;

        swiperThumbs.controller.control = swiperTop;

      })

    },

    getPictures(){

      this.slides = [];

      axios.get('/src/assets/' + this.current_folder + '/slides').then( data => {

        this.slides.push(...data.data);

        this.initSlider();

      });

    }

  },

}

