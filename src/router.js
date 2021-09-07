import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Market001 from "./views/Market001";
import PageTwo from "./views/PageTwo";
import Notice from "./views/Notice";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: Home},
        {path:"/Market001", component: Market001},
        {path:"/Two", component: PageTwo},
        {path:"/Notice", component: Notice},
    ]
})

export default router;