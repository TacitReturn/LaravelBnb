import VueRouter from "vue-router";

import  ExampleComponent  from "./components/ExampleComponent.vue";
import  ExampleTwo  from "./components/ExampleTwo.vue";

const routes = [
    {
        path: "/",
        component: ExampleComponent,
        name: "home"
    },

    {
        path: "/second",
        component: ExampleTwo,
        name: "exampletwo"
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
})

export default router;