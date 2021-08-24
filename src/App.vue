<template>
  <div id="app">
    <LoginBar />
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

</style>
