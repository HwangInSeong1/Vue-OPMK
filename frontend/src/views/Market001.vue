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
                    <router-link :to=" item.area ">
                        <div class="screen">
                            <div class="top">{{ item.stitle }}</div>
                            <div class="bottom">판매자 : {{ item.maker }} <br> 클릭하면 해당상품 페이지로 이동합니다.</div>
                            <img :src="item.img" />
                        </div>
                        <div>
                            <h3 v-html='item.btitle.replace("\n", "<br />")'></h3>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div style="max-width:1360px;width:1360px;border-top:1px solid gray;margin:0 auto;margin-top:-30px;padding-top:20px;"></div>
        <div class="marketlist">
            <div class="cate_subtitle">남성의류 / 정장</div>
            <ul>
                <li :key="item2.id" v-for="item2 in items2">
                    <a href="">
                        <div class="screen">
                            <div class="top">{{ item2.stitle }}</div>
                            <div class="bottom">판매자 : {{ item2.maker }} <br> 클릭하면 해당상품 페이지로 이동합니다.</div>
                            <img :src="item2.img" />
                        </div>
                        <div>
                            <h3 v-html='item2.btitle.replace("\n", "<br />")'></h3>
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
                    {id: 1 , stitle : 'Code .T001',area:'/' ,maker: 'INSEONG', btitle: '[니]NII 남녀 맨투맨 외 + 추가중복쿠폰혜택 - <b style="color:#008793;">76,000원</b>', img: require('../assets/listimg/top10/image01.jpg')},
                    {id: 2 , stitle : 'Code .T002',area:'#' , maker: 'INSEONG', btitle: '남성의류 자료이미지 예시 1번 - <b style="color:#008793;">32,000원</b>', img: require('../assets/listimg/top10/image02.jpg')},
                    {id: 3 , stitle : 'Code .T003',area:'#' , maker: 'INSEONG', btitle: '남성의류 자료이미지 예시 2번 - <b style="color:#008793;">35,000원</b>', img: require('../assets/listimg/top10/image01.jpg')},
                    {id: 4 , stitle : 'Code .T004',area:'#' , maker: 'INSEONG', btitle: '남성의류 자료이미지 예시 3번 - <b style="color:#008793;">35,000원</b>', img: require('../assets/listimg/top10/image02.jpg')},
                    {id: 5 , stitle : 'Code .T005',area:'#' , maker: 'INSEONG', btitle: '남성 슬렉스바지 - <b style="color:#008793;">30,000원</b>', img: require('../assets/listimg/top10/image03.jpg')},
                    {id: 6 , stitle : 'Code .T006',area:'#' , maker: 'INSEONG', btitle: '스파이더 기능성 티 \n - <b style="color:#008793;">20,000원</b>', img: require('../assets/listimg/top10/image04.jpg')},
                    {id: 7 , stitle : 'Code .T007',area:'#' , maker: 'INSEONG', btitle: '스톤아일랜드 티셔츠 1번 - <b style="color:#008793;">70,000원</b>', img: require('../assets/listimg/top10/image05.jpg')},
                    {id: 8 , stitle : 'Code .T008',area:'#' , maker: 'INSEONG', btitle: '스톤아일랜드 티셔츠 1번 - <b style="color:#008793;">70,000원</b>', img: require('../assets/listimg/top10/image05.jpg')},
                    {id: 9 , stitle : 'Code .T009',area:'#' , maker: 'INSEONG', btitle: '스톤아일랜드 티셔츠 1번 - <b style="color:#008793;">70,000원</b>', img: require('../assets/listimg/top10/image05.jpg')},
                    {id: 10 , stitle : 'Code .T010',area:'#' , maker: 'INSEONG', btitle: '예시', img: require('../assets/listimg/top10/image05.jpg')},
                    ],
                items2 : [
                    {id: 1 , stitle : 'Code .SU001', maker: 'INSEONG', btitle: '남성정장 자료이미지 예시 1번 - <b style="color:#008793;">123,000원</b>', img: require('../assets/listimg/suit/suitimg01.jpg')},
                    {id: 2 , stitle : 'Code .SU002', maker: 'INSEONG', btitle: '남성정장 자료이미지 예시 2번 - <b style="color:#008793;">150,000원</b>', img: require('../assets/listimg/suit/suitimg02.jpg')},
                    {id: 3 , stitle : 'Code .SU003', maker: 'INSEONG', btitle: '남성정장 자료이미지 예시 3번 - <b style="color:#008793;">135,000원</b>', img: require('../assets/listimg/suit/suitimg03.jpg')},
                    {id: 4 , stitle : 'Code .SU004', maker: 'INSEONG', btitle: '남성정장 자료이미지 예시 4번 - <b style="color:#008793;">110,000원</b>', img: require('../assets/listimg/suit/suitimg04.jpg')},
                    {id: 5 , stitle : 'Code .SU005', maker: 'INSEONG', btitle: '남성정장 자료이미지 예시 5번 - <b style="color:#008793;">200,000원</b>', img: require('../assets/listimg/suit/suitimg05.jpg')},
                    {id: 6 , stitle : 'Code .SU006', maker: 'INSEONG', btitle: '남성정장 자료이미지 예시 6번 - <b style="color:#008793;">200,000원</b>', img: require('../assets/listimg/suit/suitimg01.jpg')},
                    {id: 7 , stitle : 'Code .SU007', maker: 'INSEONG', btitle: '남성정장 자료이미지 예시 7번 - <b style="color:#008793;">170,000원</b>', img: require('../assets/listimg/suit/suitimg03.jpg')},
                    {id: 8 , stitle : 'Code .SU008', maker: 'INSEONG', btitle: '남성정장 자료이미지 예시 8번 - <b style="color:#008793;">170,000원</b>', img: require('../assets/listimg/suit/suitimg04.jpg')},
                    {id: 9 , stitle : 'Code .SU009', maker: 'INSEONG', btitle: '남성정장 자료이미지 예시 8번 - <b style="color:#008793;">170,000원</b>', img: require('../assets/listimg/suit/suitimg05.jpg')},
                    {id: 10 , stitle : 'Code .SU010', maker: 'INSEONG', btitle: '예시 - <b style="color:#008793;">1,070,000원</b>', img: require('../assets/listimg/suit/suitimg03.jpg')},
                    ],
                sidecheck: false,
            }
        }
}
</script>

<style>
@import url(../css/Market.css);
</style>