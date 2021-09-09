import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Market001 from "./views/Market001";
import OnetoOne from "./views/OnetoOne";
import Notice from "./views/Notice";
import FAQ from "./views/FAQ";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: Home},
        {path:"/Market001", component: Market001},
        {path:"/Notice", component: Notice},
        {path:"/OnetoOne", component: OnetoOne},
        {path:"/FAQ", component: FAQ},
    ]
})

export default router;