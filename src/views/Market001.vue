<template>
    <div>
        <div class="markethead"> <div>패션의류/잡화<ion-icon name="shirt-outline" class="icct_img"></ion-icon></div>
            <div class="sidemenu" @click="sidecheck=true"><ion-icon name="menu-outline"></ion-icon></div>
                <transition name="slide-fade">
                    <div class="menu_modalout" v-if="sidecheck">
                        <div class="menu_modalin">
                            <div class="seboo_cate"> &nbsp;세부 카테고리</div>
                            <div class="side_xxx" @click="sidecheck=false">x</div>
                            <div class="seboo_cate_a">남성의류<ion-icon name="caret-forward" class="ic_po"></ion-icon>
                                <div class="seboo_cate_b">
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">상의</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">하의</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">신발</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">모자</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">모자</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">속옷/잠옷</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">한벌옷</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">정장Set</div></router-link>
                                </div>
                            </div>
                            <div class="seboo_cate_a">여성의류<ion-icon name="caret-forward" class="ic_po"></ion-icon>
                                <div class="seboo_cate_b">
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">상의</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">하의</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">신발</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">모자</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">모자</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">속옷/잠옷</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">한벌옷</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">정장Set</div></router-link>
                                </div>
                            </div>
                            <div class="seboo_cate_a">유아동<ion-icon name="caret-forward" class="ic_po3"></ion-icon>
                                <div class="seboo_cate_b">
                                    <router-link to=""><div class="seboo_cate_c" @click="sidecheck=false">유아기 한벌옷</div></router-link>
                                    <router-link to=""><div class="seboo_cate_c" @click="sidecheck=false">유아기 상의</div></router-link>
                                    <router-link to=""><div class="seboo_cate_c" @click="sidecheck=false">유아기 하의</div></router-link>
                                    <router-link to=""><div class="seboo_cate_c" @click="sidecheck=false">유아기 모자</div></router-link>
                                    <router-link to=""><div class="seboo_cate_c" @click="sidecheck=false">유아기 가방/잡화</div></router-link>
                                    <router-link to=""><div class="seboo_cate_c" @click="sidecheck=false">유아기 신발</div></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
        </div>
        <div class="marketlist">
            <div class="cate_top10">이달의 패션아이템 TOP10</div>
            <ul>
                <li :key="item.id" v-for="item in items">
                    <a href="">
                        <div class="screen">
                            <div class="top">{{ item.stitle }}</div>
                            <div class="bottom">판매자 : {{ item.maker }} <br> 클릭하면 해당상품 페이지로 이동합니다.</div>
                            <img :src="item.img" />
                        </div>
                        <div>
                            <h3>{{ item.btitle }}</h3>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Market001',
        data() {
            return {
                items : [
                    {id: 1 , stitle : 'Code .001', maker: 'INSEONG', btitle: 'Item 001', img: require('../assets/listimg/image01.jpg')},
                    {id: 2 , stitle : 'Code .002', maker: 'INSEONG', btitle: 'Item 002', img: require('../assets/listimg/image02.jpg')},
                    {id: 3 , stitle : 'Code .003', maker: 'INSEONG', btitle: 'Item 003', img: require('../assets/listimg/image03.jpg')},
                    {id: 4 , stitle : 'Code .004', maker: 'INSEONG', btitle: 'Item 004', img: require('../assets/listimg/image04.jpg')},
                    {id: 5 , stitle : 'Code .005', maker: 'INSEONG', btitle: 'Item 005', img: require('../assets/listimg/image05.jpg')},
                    {id: 6 , stitle : 'Code .006', maker: 'INSEONG', btitle: 'Item 006', img: require('../assets/listimg/image06.jpg')},
                    {id: 7 , stitle : 'Code .007', maker: 'INSEONG', btitle: 'Item 007', img: require('../assets/listimg/image07.jpg')},
                    {id: 8 , stitle : 'Code .008', maker: 'INSEONG', btitle: 'Item 008', img: require('../assets/listimg/image07.jpg')},
                    {id: 8 , stitle : 'Code .008', maker: 'INSEONG', btitle: 'Item 008', img: require('../assets/listimg/image07.jpg')},
                    ],
                sidecheck: false,
            }
        }
}
</script>

<style>
@import url(../css/Market001.css);
</style>