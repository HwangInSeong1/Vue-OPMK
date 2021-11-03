<template>
<div> <!-- swiper 프로그램 이용해서 슬라이드 구현 -->
    <swiper class="swiper" ref="mySwiper" style="width:1400px;"
		:options="swiperOptions" 
		@slideChange="slideChangeTransitionStart"
	>

		<swiper-slide class="swslide" :key="ad.num" v-for="ad in ads"> <img :src="ad.adsimg"> </swiper-slide>
		
		<!-- pagination -->
		<div class="swiper-pagination" slot="pagination"></div>
        
		<!-- navigation -->
		<div class="swiper-button-prev swiper-btn-prev" slot="button-prev" style="color:white;text-shadow:2px 2px 2px gray;padding-left:10px;"></div>
		<div class="swiper-button-next swiper-btn-next" slot="button-next" style="color:white;text-shadow:2px 2px 2px gray;padding-right:10px;"></div>
	</swiper>
	<div class="maintitle">오늘의 발견! TOP 12</div> <!-- 하드코딩 구현 -->
    <div class="mainpage">
            <div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
			</div>
			<div class="mainflex">
				<div class="screen_m">
					<div class="scrtext_m">구매하러가기</div>
				</div>
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
				// 광고 리스트
                ads : [
                    {num:1, adsimg : require('../assets/adsimg/adsimg001.png')},
                    {num:2, adsimg : require('../assets/adsimg/adsimg002.png')},
					{num:3, adsimg : require('../assets/adsimg/adsimg004.jpg')},
					{num:4, adsimg : require('../assets/adsimg/adsimg005.jpg')},
                ],
				// 스와이퍼 옵션
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