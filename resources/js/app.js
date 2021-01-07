require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";
import Index from "./components/Index.vue";
import { values } from "lodash";
import moment from "moment";
import StarRating from "./components/shared/components/StarRating.vue";
window.Vue = require('vue');

Vue.use(VueRouter);

Vue.filter('fromNow', value => moment(value).fromNow());

Vue.component('star-rating', StarRating);

const app = new Vue({
    el: '#app',
    router: router,
    components: {
        "index": Index
    }
});
