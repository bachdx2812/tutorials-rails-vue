// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import Vue from 'vue/dist/vue.esm';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './styles/application';

import axios from './axios';
Vue.prototype.$axios = axios;

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import store from './store';

document.addEventListener('DOMContentLoaded', () => {
  const vue = new Vue({
    el: "#app",
    store: store,
    components: {
      Notifications: () => import("./components/Ultilities/Notifications"),
      UsersIndexPage: () => import("./pages/users")
    }
  });
});
