<template>
    <div>
        <h1 class="markethead">Market 001</h1>
        <div class="marketlist">
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
            }
        }
}
</script>

<style>
@import url(../css/Market001.css);
</style>