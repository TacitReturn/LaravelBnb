import VueRouter from "vue-router";

import  ExampleComponent  from "./components/ExampleComponent.vue";
import  ExampleTwo  from "./components/ExampleTwo.vue";
import Bookables from "./components/bookables/Bookables.vue";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },

    {
        path: "/second",
        component: ExampleTwo,
        name: "second"
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
})

export default router;