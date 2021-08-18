import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home"
import PageOne from "./views/PageOne"
import PageTwo from "./views/PageTwo";
import PageThree from "./views/PageThree";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: Home},
        {path:"/One", component: PageOne},
        {path:"/Two", component: PageTwo},
        {path:"/Three", component: PageThree},
    ]
})

export default router;