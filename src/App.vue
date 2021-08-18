<template>
  <div id="app">
    <LoginBar />
    <NavBar />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LoginBar from './components/LoginBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    LoginBar,
  }
}
</script>

<style>

</style>
