<template>
  <div id="app">
    <div v-if="loading">
    <div id="block-loader">
        <div class="loader"></div>
        <img class="loader-img" src="../static/computing.png">  
    </div>
    </div>
    <div v-else>
    <navi></navi>
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <foot></foot>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar'
import Foot from '@/components/Footer'

export default {
  data () {
    return {
      loading: true
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  name: 'app',
  components: {
    'navi': NavBar,
    'foot': Foot
  }
}
</script>

<style>
#block-loader{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,1.0);
    position: fixed;
}
.loader {
  border: 16px solid #000;
  border-radius: 50%;
  border-top: 10px solid #fff;
  border-bottom: 10px solid #fff;
  width: 140px;
  height: 140px;
  -webkit-animation: spin 0.5s linear infinite;
  animation: spin 0.5s linear infinite;
  position: absolute;
  z-index: 15;
  top: 50%;
  left: 50%;
  margin: -70px 0 0 -70px;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loader-img{
    width: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -40px 0 0 -40px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}
.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */
{
  opacity: 0
}
    a {
      color: rgba(0, 0, 0, 0.7);
    }
    a:hover {
      text-decoration: none;
      color: rgba(0, 0, 0, 1);
    }
    .list-group-item:hover {
        background-color: #e9ecef;
    }
    @-webkit-keyframes fadein {
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
    ;
    }
    @-moz-keyframes fadein {
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
    ;
    }
    @keyframes fadein {
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
    ;
    }
    @keyframes first-indicator {
    0% {
    transform: translate(0%) scaleX(0);
    }
    25% {
    transform: translate(0%) scaleX(0.5);
    }
    50% {
    transform: translate(25%) scaleX(0.75);
    }
    75% {
    transform: translate(100%) scaleX(0);
    }
    100% {
    transform: translate(100%) scaleX(0);
    }
    ;
    }
    @keyframes second-indicator {
    0% {
    transform: translate(0%) scaleX(0);
    }
    60% {
    transform: translate(0%) scaleX(0);
    }
    80% {
    transform: translate(0%) scaleX(0.6);
    }
    100% {
    transform: translate(100%) scaleX(0.1);
    }
    ;
}
</style>
