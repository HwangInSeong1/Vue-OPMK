<template>
    <div>
        <div class="markethead"> <div>뷰티<ion-icon name="diamond-outline" class="icct_img"></ion-icon></div>
            <div class="sidemenu" @click="sidecheck=true"><ion-icon name="menu-outline"></ion-icon></div>
                <transition name="slide-fade">
                    <div class="menu_modalout" v-if="sidecheck">
                        <div class="menu_modalin">
                            <div class="seboo_cate"> &nbsp;세부 카테고리</div>
                            <div class="side_xxx" @click="sidecheck=false">x</div>
                            <div class="seboo_cate_a">화장품1<ion-icon name="caret-forward" class="ic_po" style="left:180px"></ion-icon>
                                <div class="seboo_cate_b">
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">서브메뉴1</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">서브메뉴2</div></router-link>
                                </div>
                            </div>
                            <div class="seboo_cate_a">액세서리<ion-icon name="caret-forward" class="ic_po" style="left:173px"></ion-icon>
                                <div class="seboo_cate_b">
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">반지</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">팔찌</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">목걸이</div></router-link>
                                    <router-link to="#"><div class="seboo_cate_c" @click="sidecheck=false">귀걸이</div></router-link>
                                </div>
                            </div>
                            <div class="seboo_cate_a">예시품3<ion-icon name="caret-forward" class="ic_po" style="left:180px"></ion-icon>
                                <div class="seboo_cate_b">
                                    <router-link to=""><div class="seboo_cate_c" @click="sidecheck=false">서브메뉴1</div></router-link>
                                    <router-link to=""><div class="seboo_cate_c" @click="sidecheck=false">서브메뉴2</div></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
        </div>
        <div class="marketlist">
            <div class="cate_top10">이달의 뷰티아이템 TOP10</div>
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
            <div class="cate_subtitle">액세서리 (반지)</div>
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
                    {id: 1 , stitle : 'Code .B001',area:'/' ,maker: 'INSEONG', btitle: '[니]NII 남녀 맨투맨 외 + 추가중복쿠폰혜택 - <b style="color:#008793;">76,000원</b>', img: require('../assets/listimg01/top10/ac02.jpg')},
                    {id: 2 , stitle : 'Code .B002',area:'#' , maker: 'INSEONG', btitle: '남성의류 자료이미지 예시 1번 - <b style="color:#008793;">32,000원</b>', img: require('../assets/listimg01/top10/ac02.jpg')},
                    {id: 3 , stitle : 'Code .B003',area:'#' , maker: 'INSEONG', btitle: '남성의류 자료이미지 예시 2번 - <b style="color:#008793;">35,000원</b>', img: require('../assets/listimg01/top10/ac02.jpg')},
                    {id: 4 , stitle : 'Code .B004',area:'#' , maker: 'INSEONG', btitle: '남성의류 자료이미지 예시 3번 - <b style="color:#008793;">35,000원</b>', img: require('../assets/listimg01/top10/ac02.jpg')},
                    {id: 5 , stitle : 'Code .B005',area:'#' , maker: 'INSEONG', btitle: '남성 슬렉스바지 - <b style="color:#008793;">30,000원</b>', img: require('../assets/listimg01/top10/ac02.jpg')},
                    {id: 6 , stitle : 'Code .B006',area:'#' , maker: 'INSEONG', btitle: '스파이더 기능성 티 \n - <b style="color:#008793;">20,000원</b>', img: require('../assets/listimg01/top10/ac02.jpg')},
                    {id: 7 , stitle : 'Code .B007',area:'#' , maker: 'INSEONG', btitle: '스톤아일랜드 티셔츠 1번 - <b style="color:#008793;">70,000원</b>', img: require('../assets/listimg01/top10/ac02.jpg')},
                    {id: 8 , stitle : 'Code .B008',area:'#' , maker: 'INSEONG', btitle: '스톤아일랜드 티셔츠 1번 - <b style="color:#008793;">70,000원</b>', img: require('../assets/listimg01/top10/ac02.jpg')},
                    {id: 9 , stitle : 'Code .B009',area:'#' , maker: 'INSEONG', btitle: '스톤아일랜드 티셔츠 1번 - <b style="color:#008793;">70,000원</b>', img: require('../assets/listimg01/top10/ac02.jpg')},
                    {id: 10 , stitle : 'Code .B010',area:'#' , maker: 'INSEONG', btitle: '예시', img: require('../assets/listimg01/top10/ac02.jpg')},
                    ],
                items2 : [
                    {id: 1 , stitle : 'Code .AC001', maker: 'INSEONG', btitle: '액세서리(반지) 자료이미지 예시 1번 - <b style="color:#008793;">1,123,000원</b>', img: require('../assets/listimg01/accessory/ac/ac01.jpg')},
                    {id: 2 , stitle : 'Code .AC002', maker: 'INSEONG', btitle: '액세서리(반지) 자료이미지 예시 2번 - <b style="color:#008793;">1,150,000원</b>', img: require('../assets/listimg01/accessory/ac/ac02.jpg')},
                    {id: 3 , stitle : 'Code .AC003', maker: 'INSEONG', btitle: '액세서리(반지) 자료이미지 예시 3번 - <b style="color:#008793;">2,135,000원</b>', img: require('../assets/listimg01/accessory/ac/ac03.jpg')},
                    {id: 4 , stitle : 'Code .AC004', maker: 'INSEONG', btitle: '액세서리(반지) 자료이미지 예시 4번 - <b style="color:#008793;">210,000원</b>', img: require('../assets/listimg01/accessory/ac/ac04.jpg')},
                    {id: 5 , stitle : 'Code .AC005', maker: 'INSEONG', btitle: '액세서리(반지) 자료이미지 예시 5번 - <b style="color:#008793;">300,000원</b>', img: require('../assets/listimg01/accessory/ac/ac05.jpg')},
                    {id: 6 , stitle : 'Code .AC006', maker: 'INSEONG', btitle: '액세서리(반지) 자료이미지 예시 6번 - <b style="color:#008793;">400,000원</b>', img: require('../assets/listimg01/accessory/ac/ac01.jpg')},
                    {id: 7 , stitle : 'Code .AC007', maker: 'INSEONG', btitle: '액세서리(반지) 자료이미지 예시 7번 - <b style="color:#008793;">570,000원</b>', img: require('../assets/listimg01/accessory/ac/ac02.jpg')},
                    {id: 8 , stitle : 'Code .AC008', maker: 'INSEONG', btitle: '액세서리(반지) 자료이미지 예시 8번 - <b style="color:#008793;">670,000원</b>', img: require('../assets/listimg01/accessory/ac/ac04.jpg')},
                    {id: 9 , stitle : 'Code .AC009', maker: 'INSEONG', btitle: '액세서리(반지) 자료이미지 예시 8번 - <b style="color:#008793;">870,000원</b>', img: require('../assets/listimg01/accessory/ac/ac05.jpg')},
                    {id: 10 , stitle : 'Code .AC010', maker: 'INSEONG', btitle: '예시 - <b style="color:#008793;">1,070,000원</b>', img: require('../assets/listimg01/accessory/ac/ac03.jpg')},
                    ],
                sidecheck: false,
            }
        }
}
</script>

<style>
@import url(../css/Market.css);
</style>