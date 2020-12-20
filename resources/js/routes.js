import VueRouter from "vue-router";

import Bookables from "./components/bookables/Bookables.vue";
import Bookable from "./components/bookables/Bookable.vue";


const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path: "/bookable/:id",
        component: Bookable,
        name: "bookable"
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
})

export default router;
