require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";
import Index from "./components/Index.vue";

window.Vue = require('vue');

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component(
//     'example-two', 
//     require('./components/ExampleTwo.vue').default
//     );

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router: router,
    components: {
        "index": Index
    }
});
