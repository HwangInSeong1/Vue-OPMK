<template>
<div>
    <swiper class="swiper" ref="mySwiper" 
		:options="swiperOptions" 
		@slideChange="slideChangeTransitionStart"
	>

		<swiper-slide class="swslide" :key="ad.num" v-for="ad in ads"> <img :src="ad.adsimg" > </swiper-slide>
		
		<!-- pagination -->
		<div class="swiper-pagination" slot="pagination"></div>
        
		<!-- navigation -->
		<div class="swiper-button-prev swiper-btn-prev" slot="button-prev" style="color:white;text-shadow:2px 2px 2px gray"></div>
		<div class="swiper-button-next swiper-btn-next" slot="button-next" style="color:white;text-shadow:2px 2px 2px gray"></div>
	</swiper>
    <div class="mainpage">
            <div class="maincontent">
                <span>Example 01</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
		name: 'ListItem',
		components: {
			Swiper,
			SwiperSlide
		},
		methods: {
			slideChangeTransitionStart() {
				console.log(this.swiper.activeIndex); //현재 index값 얻기
			}
		},
		data() {
			return {
                ads : [
                    {num:1, adsimg : require('../assets/adsimg/adsimg001.png')},
                    {num:2, adsimg : require('../assets/adsimg/adsimg002.png')},
                    {num:3, adsimg : require('../assets/listimg/image07.jpg')},
                ],
				swiperOptions: {
					loop: true,
					autoplay: {delay:3000,disableOnInteraction: false},
					pagination: {
						el: '.swiper-pagination'
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},                    
				},
			}
		},

		//참조하고 있는 값이 변경될 때마다 정의된 계산식에 따라 값을 출력
		computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper;
			}
		},

		//el이 새로 생성된 vm.$el로 인스턴스가 마운트 된 직후
		mounted() {
			//console.log('Current Swiper instance object', this.swiper)
			//this.swiper.slideTo(3, 1000, false)
		}


	}
</script>

<style>
@import url(../css/Home.css);
</style>