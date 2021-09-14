<template>
    <div>
      <a href="#lc_top"><div class="topBar"> Top </div></a> <!-- 페이지 맨 상단으로 올리는 버튼 -->
      <LoginSignBar id="lc_top" />
      <NavBar />
      <div>
        <router-view></router-view>
      </div>
      <Footer />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LoginSignBar from './components/Login_SignBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    LoginSignBar,
    Footer,
  }
}
</script>

<style>
.topBar {
  background:rgba(131, 131, 131, 0.5);
  position: fixed;
  right: 0.5%;
  bottom: 1.0%;
  padding:5px;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(37, 128, 64);
  border-radius: 10px;
}

.topBar:hover {
  background: rgba(131, 131, 131, 0.5);
  color: white;
}
</style>
