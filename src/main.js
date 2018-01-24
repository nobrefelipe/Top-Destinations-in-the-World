import Vue from 'vue';
import App from './App.vue';
import store from './vuex/store'

import slideshow from './components/slideshow';
Vue.component('slideshow', slideshow);

import navigation from './components/navigation';
Vue.component('navigation', navigation);

import mainContent from './components/main-content';
Vue.component('mainContent', mainContent);

import links from './components/links';
Vue.component('links', links);


new Vue({

  el: '#app',

  store,

  render: h => h(App)

});
