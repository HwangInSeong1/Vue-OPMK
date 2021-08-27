<template>
    <div>
      <a href="#lc_top"><div class="topBar"> Top </div></a>
      <LoginBar id="lc_top" />
      <NavBar />
      <div>
        <router-view></router-view>
      </div>
      <Footer />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LoginBar from './components/LoginBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    LoginBar,
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
  color: rgb(39, 221, 94);
}

.topBar:hover {
  background: rgba(77, 77, 77, 0.5);
  color: white;
}
</style>
