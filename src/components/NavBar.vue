<template>
    <nav class="nav02">
        <ul>
            <li><router-link to=""><div><ion-icon name="grid-outline" class="mnic_cate"></ion-icon></div>카테고리</router-link>
                <ul>
                    <li><router-link to="/Market001">패션의류/잡화</router-link></li>
                    <li><router-link to="#">뷰티</router-link></li>
                    <li><router-link to="#">생활용품</router-link></li>
                    <li><router-link to="#">자동차용품</router-link></li>
                    <li><router-link to="#">식품</router-link></li>
                    <li><router-link to="#">도서/음반/DVD</router-link></li>
                    <li><router-link to="#">헬스/건강식품</router-link></li>
                    <li><router-link to="#">문구/오피스</router-link></li>
                    <li><router-link to="#">가전디지털</router-link></li>
                    <li><router-link to="#">반려동물상품</router-link></li>
                    <li><router-link to="#">기타상품</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="#">오픈마켓 서비스</router-link>
                <ul>
                    <li><router-link to="#">이달의 TOP10</router-link></li>
                    <li><router-link to="#">진행중인 이벤트</router-link></li>
                    <li><router-link to="#">등급별 회원혜택</router-link></li>
                    <li><router-link to="#">쿠폰/출석체크</router-link></li>
                    <li><router-link to="#" style="color:#00b9ef">물품 경매</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/Two">판매 등록하기</router-link>
            </li>
            <li><router-link to="">
                <div><ion-icon name="notifications-outline" class="mnic_notice"></ion-icon></div>알림 및 문의
                </router-link>
                <ul>
                    <li><router-link to="/Notice">공지사항</router-link></li>
                    <li><router-link to="#">1:1 문의</router-link></li>
                    <li><router-link to="#">F A Q</router-link></li>
                    <li><router-link to="#">기타 광고문의</router-link></li>
                </ul>
            </li>
            <li><router-link to="#">
                <div><ion-icon name="link-outline" class="mnic"></ion-icon></div>연계사이트
                </router-link>
                <ul>
                    <li><a href="https://www.daangn.com/" target="_blank">당근마켓</a></li>
                    <li><a href="https://www.gmarket.co.kr/">G마켓</a></li>
                </ul>
            </li>
            <li><router-link to="#">
                <div><ion-icon name="bag-handle-outline" class="mnic"></ion-icon></div>장바구니
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

};
</script>

<style>
@import url(../css/NavBar.css);
</style>
