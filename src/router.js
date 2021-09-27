import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Market001 from "./views/Market001";
import OnetoOne from "./views/OnetoOne";
import Notice from "./views/Notice";
import FAQ from "./views/FAQ";
import Adver from "./views/Adver"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: Home}, // 메인홈화면
        {path:"/Market001", component: Market001}, // 상품진열 1번 패션
        {path:"/Notice", component: Notice}, // 공지사항
        {path:"/OnetoOne", component: OnetoOne}, // 1:1문의
        {path:"/FAQ", component: FAQ}, // 자주묻는질문
        {path:"/Adver", component: Adver}, // 광고문의
    ]
})

export default router;