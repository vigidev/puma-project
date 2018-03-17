<template>
  <div id="app">
    <navi></navi>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar'
import Foot from '@/components/Footer'

export default {
  name: 'app',
  components: {
    'navi': NavBar,
    'foot': Foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
