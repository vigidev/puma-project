<template>
  <div id="app">
    <div v-if="loading">
      <div class="ipl-progress-indicator" id="ipl-progress-indicator" ref="ipl-progress-indicator">
        <div class="ipl-progress-indicator-head">
          <div class="first-indicator"></div>
          <div class="second-indicator"></div>
        </div>
        <div class="insp-logo-frame">
          <center>
            <b-img fluid src="https://iqyoe.github.io/puma-web/assets/img/horizontal-logo-comp-lengkap-white.png" alt="PUMA Computing Logo" /></center>
        </div>
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
[v-cloak] {
  display: none;
}
    .ipl-progress-indicator.available {
    opacity: 0;
    }
    .ipl-progress-indicator {
    background-color: #000;
    width: 100%;
    height: 100%;
    position: fixed;
    opacity: 1;
    pointer-events: none;
    -webkit-transition: opacity cubic-bezier(.4, 0, .2, 1) 436ms;
    -moz-transition: opacity cubic-bezier(.4, 0, .2, 1) 436ms;
    transition: opacity cubic-bezier(.4, 0, .2, 1) 436ms;
    z-index: 9999;
    }
    .insp-logo-frame {
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    -webkit-animation: fadein 436ms;
    -moz-animation: fadein 436ms;
    animation: fadein 436ms;
    height: 98%;
    }
    .insp-logo-frame-img{
    width: 112px;
    height: 112px;
    -webkit-align-self: center;
    -moz-align-self: center;
    align-self: center;
    border-radius: 50%;
    }
    .ipl-progress-indicator-head {
    background-color: rgba(255,255,255,.5);
    height: 4px;
    overflow: hidden;
    position: relative;
    }
    .ipl-progress-indicator .first-indicator, .ipl-progress-indicator .second-indicator {
    background-color: rgba(255,255,255,1);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    transform-origin: left center;
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    transform: scaleX(0);
    }
    .ipl-progress-indicator .first-indicator {
    -webkit-animation: first-indicator 2000ms linear infinite;
    -moz-animation: first-indicator 2000ms linear infinite;
    animation: first-indicator 2000ms linear infinite;
    }
    .ipl-progress-indicator .second-indicator {
    -webkit-animation: second-indicator 2000ms linear infinite;
    -moz-animation: second-indicator 2000ms linear infinite;
    animation: second-indicator 2000ms linear infinite;
    }
    .ipl-progress-indicator .insp-logo {
    /* animation: App-logo-spin infinite 20s linear; */
    border-radius: 50%;
    -webkit-align-self: center;
    -moz-align-self: center;
    align-self: center;
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
